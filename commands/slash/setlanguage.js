// commands/slash/setlanguage.js
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');
const { getGuildConfig, saveGuildConfig } = require('../../stores/guildConfigStore');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setlanguage')
    .setDescription(en.general.SETLANG_DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.general.SETLANG_DESCRIPTION,
      'en-US': en.general.SETLANG_DESCRIPTION,
      'es-ES': es.general.SETLANG_DESCRIPTION
    })
    .addStringOption(opt =>
      opt
        .setName('language')
        .setDescription(en.general.SETLANG_OPTION_DESCRIPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.general.SETLANG_OPTION_DESCRIPTION,
          'en-US': en.general.SETLANG_OPTION_DESCRIPTION,
          'es-ES': es.general.SETLANG_OPTION_DESCRIPTION
        })
        .addChoices(
          { name: pt.general.LANG_PT, value: 'pt' },
          { name: en.general.LANG_EN, value: 'en' },
          { name: es.general.LANG_ES, value: 'es' }
        )
        .setRequired(true)
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({ content: t(guildId, 'general.NO_PERMISSION'), flags });
    }

    const lang = interaction.options.getString('language');
    const cfg  = await getGuildConfig(guildId);
    cfg.language = lang;
    await saveGuildConfig(guildId, cfg);

    // localized success message
    return interaction.reply({
      content: t(guildId, 'general.SETLANG_SUCCESS', { lang: es.general.LANG_ES && lang === 'es' ? es.general.LANG_ES : lang }),
      flags
    });
  }
};
