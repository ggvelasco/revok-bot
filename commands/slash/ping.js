// commands/ping.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com a latência da API'),
  async execute(interaction) {
    const latency = Math.round(interaction.client.ws.ping);
    await interaction.reply(`🏓 Latência da API: ${latency} ms`);
  }
};
