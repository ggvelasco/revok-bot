// commands/slash/help.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../../utils/i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show all available commands'),  // fallback

  async execute(interaction) {
    const guildId = interaction.guild.id;

    // 1) título e descrição
    let title = await t(guildId, 'help.TITLE');
    if (!title || title.includes('.')) title = '📖 Command Center';
    let desc = await t(guildId, 'help.EMBED_DESCRIPTION');
    if (!desc || desc.includes('.')) desc = 'Here are the features you can use:';

    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(desc)
      .setColor(0x00AE86)
      .setTimestamp();

    // 2) Slash commands
    const slashLines = await Promise.all(
      [...interaction.client.slashCommands.values()].map(async cmd => {
        const key = cmd.data.name;
        let cd = await t(guildId, `help.COMMANDS.${key}`);
        if (!cd || cd.includes('.')) cd = cmd.data.description;
        return `• **/${key}** — ${cd}`;
      })
    );
    embed.addFields({
      name: await t(guildId, 'help.CATEGORY_SLASH'),
      value: slashLines.length
        ? slashLines.join('\n')
        : await t(guildId, 'help.EMPTY_SLASH')
    });

    // 3) Prefix commands
    const prefixLines = await Promise.all(
      [...interaction.client.prefixCommands.values()].map(async cmd => {
        const key = cmd.name;
        let pd = await t(guildId, `help.COMMANDS.${key}`);
        if (!pd || pd.includes('.')) pd = cmd.description || await t(guildId, 'help.NO_DESCRIPTION');
        return `• **!${key}** — ${pd}`;
      })
    );
    embed.addFields({
      name: await t(guildId, 'help.CATEGORY_PREFIX'),
      value: prefixLines.length
        ? prefixLines.join('\n')
        : await t(guildId, 'help.EMPTY_PREFIX')
    });

    // 4) Resposta efêmera
    await interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
