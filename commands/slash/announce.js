// commands/slash/announce.js
const {
    SlashCommandBuilder,
    PermissionsBitField,
    EmbedBuilder,
    ChannelType     // ← IMPORTAÇÃO ADICIONADA
  } = require('discord.js');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('announce')
      .setDescription('Faz o bot postar uma mensagem no canal escolhido')
      .addChannelOption(opt =>
        opt
          .setName('channel')
          .setDescription('Canal onde publicar')
          .addChannelTypes(ChannelType.GuildText)  // só texto
          .setRequired(true)
      )
      .addStringOption(opt =>
        opt
          .setName('message')
          .setDescription('O conteúdo da mensagem')
          .setRequired(true)
      ),
    async execute(interaction) {
      if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return interaction.reply({ content: '🔒 Só administradores podem usar isso.', flags: 1 << 6 });
      }
  
      const channel = interaction.options.getChannel('channel');
      const text    = interaction.options.getString('message');
  
      await channel.send(text);    
      await interaction.reply({ content: `✅ Mensagem enviada em ${channel}`, flags: 1 << 6 });
    }
  };
  