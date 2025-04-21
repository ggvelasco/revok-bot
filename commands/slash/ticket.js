// commands/slash/ticket.js
const {
  SlashCommandBuilder,
  ChannelType,
  PermissionsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');
const { getStore, saveStore }       = require('../../stores/ticketStore');
const { getGuildConfig }            = require('../../stores/guildConfigStore');
const { t }                         = require('../../utils/i18n');
const pt                           = require('../../locales/pt.json');
const en                           = require('../../locales/en.json');
const es                           = require('../../locales/es.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription(en.ticket.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.ticket.DESCRIPTION,
      'es-ES': es.ticket.DESCRIPTION,
      'en-US': en.ticket.DESCRIPTION
    })
    .addSubcommand(sub =>
      sub
        .setName('open')
        .setDescription(en.ticket.OPEN_SUB)
        .setDescriptionLocalizations({
          'pt-BR': pt.ticket.OPEN_SUB,
          'es-ES': es.ticket.OPEN_SUB,
          'en-US': en.ticket.OPEN_SUB
        })
        .addStringOption(opt =>
          opt
            .setName('subject')
            .setDescription(en.ticket.SUBJECT_OPTION)
            .setDescriptionLocalizations({
              'pt-BR': pt.ticket.SUBJECT_OPTION,
              'es-ES': es.ticket.SUBJECT_OPTION,
              'en-US': en.ticket.SUBJECT_OPTION
            })
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('close')
        .setDescription(en.ticket.CLOSE_SUB)
        .setDescriptionLocalizations({
          'pt-BR': pt.ticket.CLOSE_SUB,
          'es-ES': es.ticket.CLOSE_SUB,
          'en-US': en.ticket.CLOSE_SUB
        })
    ),

  async execute(interaction) {
    const flags   = 1 << 6;
    const guildId = interaction.guild.id;
    const userId  = interaction.user.id;
    const sub     = interaction.options.getSubcommand();

    // pegue o cargo de staff configurado
    const { staffRoleId } = await getGuildConfig(guildId);
    if (!staffRoleId) {
      // mensagem de erro para usuário final
      return interaction.reply({
        content: t(guildId, 'ticket.ERR_NOT_CONFIG_USER'),
        flags
      });
    }

    // evita timeout de resposta
    await interaction.deferReply({ flags: 1 << 6 });

    // carrega ou inicializa o store
    const store = await getStore();
    store.nextIdByGuild               = store.nextIdByGuild               || {};
    store.stats                       = store.stats                       || { ticketsCreatedByGuild: {} };
    store.data                        = store.data                        || {};

    if (sub === 'open') {
      // já existe
      if (Object.values(store.data).some(t => 
        t.guildId === guildId && t.userId === userId
      )) {
        return interaction.editReply({
          content: t(guildId, 'ticket.ALREADY')
        });
      }

      const subject = interaction.options.getString('subject');

      // contador por guild
      const nextId = store.nextIdByGuild[guildId] ?? 1;
      store.nextIdByGuild[guildId] = nextId + 1;
      // estatística
      store.stats.ticketsCreatedByGuild[guildId] =
        (store.stats.ticketsCreatedByGuild[guildId] || 0) + 1;

      // cria canal de texto
      let channel;
      try {
        channel = await interaction.guild.channels.create({
          name: `ticket-${String(nextId).padStart(4,'0')}`,
          type: ChannelType.GuildText,
          permissionOverwrites: [
            { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.ViewChannel] },
            { id: userId,                                   allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] },
            { id: staffRoleId,                              allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] }
          ]
        });
      } catch (err) {
        console.error('[TICKET] erro criando canal:', err);
        return interaction.editReply({
          content: t(guildId, 'ticket.ERR_OPEN')
        });
      }

      // persiste dados do ticket
      store.data[nextId] = {
        guildId,
        userId,
        channelId: channel.id,
        subject,
        openedAt: Date.now()
      };
      await saveStore(store);

      // embed + botão fechar
      const embed = new EmbedBuilder()
        .setTitle(t(guildId, 'ticket.CREATE_TITLE', { id: nextId }))
        .setDescription(t(guildId, 'ticket.CREATE_DESC', {
          user: interaction.user.toString(),
          subject
        }))
        .setColor(0x00AE86)
        .setTimestamp();

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`close_ticket_${nextId}`)
          .setLabel(t(guildId, 'ticket.BUTTON_CLOSE'))
          .setStyle(ButtonStyle.Danger)
      );

      // confirma ao usuário e envia embed no canal
      await interaction.editReply({
        content: t(guildId, 'ticket.REPLY_OPEN', { channel: channel.toString() })
      });
      await channel.send({ embeds: [embed], components: [row] });

    } else {
      // subcommand close
      const entry = Object.entries(store.data)
        .find(([, t]) => t.channelId === interaction.channel.id);

      if (!entry) {
        return interaction.editReply({
          content: t(guildId, 'ticket.ERR_NOT_CHANNEL')
        });
      }

      const [closeId] = entry;
      delete store.data[closeId];
      await saveStore(store);

      await interaction.editReply({
        content: t(guildId, 'ticket.REPLY_CLOSED', { id: closeId })
      });
      await interaction.channel.delete().catch(() => {});
    }
  }
};
