const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Exibe todos os comandos disponíveis'),
  async execute(interaction) {
    const { slashCommands, prefixCommands } = interaction.client;
    const embed = new EmbedBuilder()
      .setTitle('📖 Central de Comandos')
      .setDescription('Aqui estão as funcionalidades que você pode usar:')
      .setColor(0x00AE86)
      .setTimestamp();

    // Slash commands
    embed.addFields({
      name: '🔹 Slash Commands',
      value: slashCommands.map(cmd => 
        `• **/${cmd.data.name}** — ${cmd.data.description}`
      ).join('\n') || 'Nenhum comando slash registrado.'
    });

    // Prefix commands
    embed.addFields({
      name: '🔸 Prefix Commands',
      value: prefixCommands.map(cmd => 
        `• **!${cmd.name}** — ${cmd.description || 'Sem descrição'}`
      ).join('\n') || 'Nenhum comando prefix registrado.'
    });

    // Respondo de forma efêmera pra não poluir o canal
    await interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
