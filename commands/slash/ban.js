// commands/slash/ban.js
const { doOrSimulate } = require('../../utils/action');
// import do DRY-RUN


const {
  SlashCommandBuilder,
  PermissionsBitField,
  EmbedBuilder,
  ChannelType
} = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    // descrição global (fallback inglês)
    .setDescription(en.mod.ban.DESCRIPTION)
    // localizações para o Discord client
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.ban.DESCRIPTION,
      'en-US': en.mod.ban.DESCRIPTION
    })

    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription(en.mod.ban.USER_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.USER_OPTION,
          'en-US': en.mod.ban.USER_OPTION
        })
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription(en.mod.ban.REASON_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.REASON_OPTION,
          'en-US': en.mod.ban.REASON_OPTION
        })
    )
    .addIntegerOption(opt =>
      opt
        .setName('days')
        .setDescription(en.mod.ban.DAYS_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.DAYS_OPTION,
          'en-US': en.mod.ban.DAYS_OPTION
        })
        .setRequired(false)
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;

    // Permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return interaction.reply({
        content: t(guildId, 'mod.ban.NO_PERM'),
        flags
      });
    }

    // Opções
    const user   = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') ||
      t(guildId, 'mod.ban.REASON_UNSPECIFIED');
    const days   = interaction.options.getInteger('days') || 0;

    // Executa o ban DRY-RUN ou real
    // DRY-RUN: só loga, não executa
    await doOrSimulate(
      `ban ${user.tag} for ${days} day(s), reason: "${reason}"`,
      () => interaction.guild.members.ban(user.id, { days, reason })
    );

    // Confirmação ao invocador
    await interaction.reply({
      content: t(guildId, 'mod.ban.SUCCESS', { user: user.tag }),
      flags
    });

    // Log em #mod-logs (se existir)
    const logChannel = interaction.guild.channels.cache.find(ch =>
      ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
    );
    if (logChannel) {
      const embed = new EmbedBuilder()
        .setTitle(t(guildId, 'mod.ban.EMBED_TITLE'))
        .setColor(0xFF0000)
        .addFields(
          {
            name: t(guildId, 'mod.ban.FIELD_USER'),
            value: user.tag,
            inline: true
          },
          {
            name: t(guildId, 'mod.ban.FIELD_MODERATOR'),
            value: interaction.user.tag,
            inline: true
          },
          {
            name: t(guildId, 'mod.ban.FIELD_REASON'),
            value: reason,
            inline: false
          },
          {
            name: t(guildId, 'mod.ban.FIELD_DELETE_MSGS'),
            value: t(guildId, 'mod.ban.DELETE_MSGS_VALUE', { days }),
            inline: true
          }
        )
        .setTimestamp();

      await logChannel.send({ embeds: [embed] });
    }
  }
};
