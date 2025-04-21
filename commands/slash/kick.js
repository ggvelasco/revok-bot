// commands/slash/kick.js
const {
  SlashCommandBuilder,
  ChannelType
} = require('discord.js');
const { moderateUser, PermissionError } = require('../../services/moderationService');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription(en.mod.kick.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.kick.DESCRIPTION,
      'en-US': en.mod.kick.DESCRIPTION,
      'es-ES': es.mod.kick.DESCRIPTION
    })
    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription(en.mod.kick.USER_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.kick.USER_OPTION,
          'en-US': en.mod.kick.USER_OPTION,
          'es-ES': es.mod.kick.USER_OPTION
        })
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription(en.mod.kick.REASON_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.kick.REASON_OPTION,
          'en-US': en.mod.kick.REASON_OPTION,
          'es-ES': es.mod.kick.REASON_OPTION
        })
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;
    const target = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason') 
      || t(guildId, 'mod.kick.REASON_UNSPECIFIED');

    try {
      const embed = await moderateUser({
        interaction,
        action: 'kick',
        target,
        options: { reason },
        localeKeys: {
          titleKey: 'mod.kick.EMBED_TITLE',
          fields: [
            { nameKey: 'mod.kick.FIELD_USER',      value: target.user.tag },
            { nameKey: 'mod.kick.FIELD_MODERATOR', value: interaction.user.tag },
            { nameKey: 'mod.kick.FIELD_REASON',    value: reason, inline: false }
          ]
        }
      });

      await interaction.reply({ 
        content: t(guildId, 'mod.kick.SUCCESS', { user: target.user.tag }), 
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
      console.error('[KICK]', err);
      return interaction.reply({ content: t(guildId, 'general.ERR_INTERNAL'), flags });
    }
  }
};
