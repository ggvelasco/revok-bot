// commands/slash/help.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription(en.help.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.help.DESCRIPTION,
      'en-US': en.help.DESCRIPTION,
      'es-ES': es.help.DESCRIPTION
    }),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const { slashCommands, prefixCommands } = interaction.client;

    const embed = new EmbedBuilder()
      .setTitle(t(guildId, 'help.TITLE'))
      .setDescription(t(guildId, 'help.EMBED_DESCRIPTION'))
      .setColor(0x00AE86)
      .setTimestamp();

    // Slash commands
    const slashList = slashCommands.map(cmd => {
      // tenta pegar t(guildId, `help.COMMANDS.${cmd.data.name}`), senão fallback
      const key = `help.COMMANDS.${cmd.data.name}`;
      const desc = t(guildId, key, {}, cmd.data.description);
      return `• **/${cmd.data.name}** — ${desc}`;
    }).join('\n') || t(guildId, 'help.EMPTY_SLASH');

    embed.addFields({
      name: t(guildId, 'help.CATEGORY_SLASH'),
      value: slashList
    });

    // Prefix commands
    const prefixList = prefixCommands.map(cmd => {
      const key = `help.COMMANDS.${cmd.name}`;
      const desc = t(guildId, key, {}, cmd.description || t(guildId, 'help.NO_DESCRIPTION'));
      return `• **!${cmd.name}** — ${desc}`;
    }).join('\n') || t(guildId, 'help.EMPTY_PREFIX');

    embed.addFields({
      name: t(guildId, 'help.CATEGORY_PREFIX'),
      value: prefixList
    });

    await interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
