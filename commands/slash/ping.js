// commands/slash/ping.js
const { SlashCommandBuilder } = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    // fallback EN
    .setDescription(en.ping.DESCRIPTION)
    // localizações para o Discord client
    .setDescriptionLocalizations({
      'pt-BR': pt.ping.DESCRIPTION,
      'en-US': en.ping.DESCRIPTION
    }),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const latency = Math.round(interaction.client.ws.ping);

    // resposta efêmera
    await interaction.reply({
      content: t(guildId, 'ping.RESPONSE', { latency }),
      flags: 1 << 6
    });
  }
};
