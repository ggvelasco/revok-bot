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
const {
  openTicket,
  getOpenTicketForUser,
  getTicketByChannel,
  closeTicketByChannel
} = require('../../stores/ticketStore');
const { getGuildConfig } = require('../../stores/guildConfigStore');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');

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

    // 1) Defer para usar editReply()
    await interaction.deferReply({ ephemeral: true });

    // 2) Verifica staffRole
    const cfg = await getGuildConfig(guildId);
    if (!cfg.staffRoleId) {
      return interaction.editReply(t(guildId, 'ticket.ERR_NOT_CONFIG_ADMIN'));
    }

    const sub = interaction.options.getSubcommand();

    // ─── OPEN ─────────────────────────────
    if (sub === 'open') {
      // 3) impede duplicatas
      const already = await getOpenTicketForUser(guildId, userId);
      if (already) {
        return interaction.editReply(t(guildId, 'ticket.ALREADY'));
      }

      const subject = interaction.options.getString('subject');

      // 4) cria canal temporário
      let channel;
      try {
        channel = await interaction.guild.channels.create({
          name: `ticket-temp`,
          type: ChannelType.GuildText,
          permissionOverwrites: [
            { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.ViewChannel] },
            { id: userId,                                  allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] },
            { id: cfg.staffRoleId,                         allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] }
          ]
        });
      } catch (err) {
        console.error('[TICKET] create channel failed', err);
        return interaction.editReply(t(guildId, 'ticket.ERR_OPEN'));
      }

      // 5) persiste e obtém o ID
      let ticket;
      try {
        ticket = await openTicket({ guildId, userId, channelId: channel.id, subject });
      } catch (err) {
        console.error('[TICKET] openTicket failed', err);
        return interaction.editReply(t(guildId, 'ticket.ERR_OPEN'));
      }

      // 6) renomeia canal
      const padded = String(ticket.id).padStart(4, '0');
      await channel.edit({ name: `ticket-${padded}` });

      // 7) monta embed + botão
      const embed = new EmbedBuilder()
        .setTitle(t(guildId, 'ticket.CREATE_TITLE', { id: padded }))
        .setDescription(t(guildId, 'ticket.CREATE_DESC', {
          user: interaction.user.toString(),
          subject
        }))
        .setColor(0x00AE86)
        .setTimestamp();
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`close_ticket_${ticket.id}`)
          .setLabel(t(guildId, 'ticket.BUTTON_CLOSE'))
          .setStyle(ButtonStyle.Danger)
      );

      // 8) finalize
      await interaction.editReply(t(guildId, 'ticket.REPLY_OPEN', { channel: channel.toString() }));
      return channel.send({ embeds: [embed], components: [row] });
    }

    // ─── CLOSE ────────────────────────────
    // 9) encontra ticket por canal
    if (sub === 'close') {
      const existing = await getTicketByChannel(interaction.channel.id);
      if (!existing) {
        return interaction.editReply(t(guildId, 'ticket.ERR_NOT_CHANNEL'));
      }
      // 10) fecha no banco e deleta canal
      await closeTicketByChannel(interaction.channel.id);
      await interaction.editReply(t(guildId, 'ticket.REPLY_CLOSED', {
        id: String(existing.id).padStart(4, '0')
      }));
      return interaction.channel.delete().catch(() => {});
    }
  }
};
