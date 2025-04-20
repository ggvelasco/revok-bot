// commands/slash/setlanguage.js
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { getGuildConfig, saveGuildConfig } = require('../../stores/guildConfigStore');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setlanguage')
    // descrição padrão (fallback em inglês)
    .setDescription(en.general.SETLANG_DESCRIPTION)
    // localizações para o Discord client
    .setDescriptionLocalizations({
      'pt-BR': pt.general.SETLANG_DESCRIPTION,
      'en-US': en.general.SETLANG_DESCRIPTION
    })
    .addStringOption(opt =>
      opt
        .setName('language')
        .setDescription(en.general.SETLANG_OPTION_DESCRIPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.general.SETLANG_OPTION_DESCRIPTION,
          'en-US': en.general.SETLANG_OPTION_DESCRIPTION
        })
        .addChoices(
          { name: pt.general.LANG_PT, value: 'pt' },
          { name: en.general.LANG_EN, value: 'en' }
        )
        .setRequired(true)
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    // permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: t(interaction.guild.id, 'general.NO_PERMISSION'),
        flags
      });
    }

    const lang = interaction.options.getString('language');
    const cfg  = getGuildConfig(interaction.guild.id);
    cfg.language = lang;
    saveGuildConfig(interaction.guild.id, cfg);

    return interaction.reply({
      content: t(interaction.guild.id, 'general.SETLANG_SUCCESS', { lang }),
      flags
    });
  }
};
