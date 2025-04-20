// commands/slash/rrpanel.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rrpanel')
    .setDescription('Posta no canal o painel de Reaction‑Roles'),
  async execute(interaction) {
    // só permitir admin
    if (!interaction.member.permissions.has('ManageGuild')) {
      return interaction.reply({ content: '🔒 Só Administradores podem usar.', flags: 1 << 6 });
    }

    const embed = new EmbedBuilder()
    .setTitle('🌈 Cores de Nickname')
    .setDescription('Reaja para adotar ou remover uma cor de nickname. Você pode mudar a qualquer momento!')
    .setColor(0x5865F2)
    .addFields(
      { name: '🔵 Azul',     value: 'Nickname azul'   , inline: true },
      { name: '🔴 Vermelho', value: 'Nickname vermelho', inline: true },
      { name: '\u200b',      value: '\u200b'          , inline: true }, // quebra de linha
      { name: '🟢 Verde',    value: 'Nickname verde'  , inline: true },
      { name: '🟡 Amarelo',  value: 'Nickname amarelo', inline: true },
      { name: '\u200b',      value: '\u200b'          , inline: true },
      { name: '🟣 Roxo',     value: 'Nickname roxo'   , inline: true }
    )
    .setFooter({ text: 'Reaja de novo para remover a cor.' })
    .setTimestamp();

    // manda o embed no mesmo canal onde executou
    await interaction.channel.send({ embeds: [embed] });
    await interaction.reply({ content: '✅ Painel postado!', flags: 1 << 6 });
  }
};
