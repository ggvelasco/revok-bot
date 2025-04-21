// commands/slash/ban.js
const { SlashCommandBuilder, ChannelType } = require('discord.js');
const { moderateUser, PermissionError } = require('../../services/moderationService');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription(en.mod.ban.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.ban.DESCRIPTION,
      'en-US': en.mod.ban.DESCRIPTION,
      'es-ES': es.mod.ban.DESCRIPTION
    })
    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription(en.mod.ban.USER_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.USER_OPTION,
          'en-US': en.mod.ban.USER_OPTION,
          'es-ES': es.mod.ban.USER_OPTION
        })
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription(en.mod.ban.REASON_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.REASON_OPTION,
          'en-US': en.mod.ban.REASON_OPTION,
          'es-ES': es.mod.ban.REASON_OPTION
        })
    )
    .addIntegerOption(opt =>
      opt
        .setName('days')
        .setDescription(en.mod.ban.DAYS_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.ban.DAYS_OPTION,
          'en-US': en.mod.ban.DAYS_OPTION,
          'es-ES': es.mod.ban.DAYS_OPTION
        })
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;
    const target = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') 
      || t(guildId, 'mod.ban.REASON_UNSPECIFIED');
    const days = interaction.options.getInteger('days') ?? 0;

    try {
      const embed = await moderateUser({
        interaction,
        action: 'ban',
        target,
        options: { reason, days },
        localeKeys: {
          titleKey: 'mod.ban.EMBED_TITLE',
          fields: [
            { nameKey: 'mod.ban.FIELD_USER',         value: target.tag },
            { nameKey: 'mod.ban.FIELD_MODERATOR',    value: interaction.user.tag },
            { nameKey: 'mod.ban.FIELD_REASON',       value: reason, inline: false },
            { nameKey: 'mod.ban.FIELD_DELETE_MSGS',  value: t(guildId, 'mod.ban.DELETE_MSGS_VALUE', { days }), inline: true }
          ]
        }
      });

      await interaction.reply({ 
        content: t(guildId, 'mod.ban.SUCCESS', { user: target.tag }), 
        flags 
      });

      const logCh = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logCh) await logCh.send({ embeds: [embed] });

    } catch (err) {
      if (err instanceof PermissionError) {
        return interaction.reply({ content: err.message, flags });
      }
      console.error('[BAN]', err);
      return interaction.reply({ content: t(guildId, 'general.ERR_INTERNAL'), flags });
    }
  }
};
