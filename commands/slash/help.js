// commands/slash/help.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getGuildConfig } = require('../../stores/guildConfigStore');
const { t }              = require('../../utils/i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show all available commands'),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const cfg     = await getGuildConfig(guildId);
    const { slashCommands, prefixCommands } = interaction.client;

    const embed = new EmbedBuilder()
      .setTitle(t(guildId, 'help.TITLE'))
      .setDescription(t(guildId, 'help.EMBED_DESCRIPTION'))
      .setColor(0x00AE86)
      .setTimestamp();

    // Slash commands
    const activeSlash = slashCommands.filter(cmd =>
      !cfg.disabledCommands.includes(cmd.data.name)
    );
    const slashList = activeSlash.map(cmd => {
      const key  = `help.COMMANDS.${cmd.data.name}`;
      const desc = t(guildId, key, {}, cmd.data.description);
      return `• **/${cmd.data.name}** — ${desc}`;
    }).join('\n') || t(guildId, 'help.EMPTY_SLASH');

    embed.addFields({
      name: t(guildId, 'help.CATEGORY_SLASH'),
      value: slashList
    });

    // Prefix commands
    const activePrefix = prefixCommands.filter(cmd =>
      !cfg.disabledCommands.includes(cmd.name)
    );
    const prefixList = activePrefix.map(cmd => {
      const key  = `help.COMMANDS.${cmd.name}`;
      const desc = t(guildId, key, {}, cmd.description || t(guildId, 'help.NO_DESCRIPTION'));
      return `• **${cfg.prefix}${cmd.name}** — ${desc}`;
    }).join('\n') || t(guildId, 'help.EMPTY_PREFIX');

    embed.addFields({
      name: t(guildId, 'help.CATEGORY_PREFIX'),
      value: prefixList
    });

    await interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
