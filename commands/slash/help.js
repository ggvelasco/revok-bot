// commands/slash/help.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    // descrição do client (fallback EN)
    .setDescription(en.help.DESCRIPTION)
    // localizações para o Discord client
    .setDescriptionLocalizations({
      'pt-BR': pt.help.DESCRIPTION,
      'en-US': en.help.DESCRIPTION
    }),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const { slashCommands, prefixCommands } = interaction.client;

    const embed = new EmbedBuilder()
      .setTitle(t(guildId, 'help.TITLE'))
      .setDescription(t(guildId, 'help.EMBED_DESCRIPTION'))
      .setColor(0x00AE86)
      .setTimestamp();

    // Lista de Slash Commands
    const slashList = slashCommands
      .map(cmd => `• **/${cmd.data.name}** — ${cmd.data.description}`)
      .join('\n') || t(guildId, 'help.EMPTY_SLASH');
    embed.addFields({
      name: t(guildId, 'help.CATEGORY_SLASH'),
      value: slashList
    });

    // Lista de Prefix Commands
    const prefixList = prefixCommands
      .map(cmd => `• **!${cmd.name}** — ${cmd.description || t(guildId, 'help.NO_DESCRIPTION')}`)
      .join('\n') || t(guildId, 'help.EMPTY_PREFIX');
    embed.addFields({
      name: t(guildId, 'help.CATEGORY_PREFIX'),
      value: prefixList
    });

    await interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
