const {
    SlashCommandBuilder,
    PermissionsBitField,
    EmbedBuilder,
    ChannelType
  } = require('discord.js');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('ban')
      .setDescription('Bane um usuário do servidor')
      .addUserOption(opt =>
        opt.setName('user')
           .setDescription('Usuário a ser banido')
           .setRequired(true)
      )
      .addStringOption(opt =>
        opt.setName('reason')
           .setDescription('Motivo do ban')
      )
      .addIntegerOption(opt =>
        opt.setName('days')
           .setDescription('Dias de mensagens a deletar (0–7)')
           .setRequired(false)
      ),
    async execute(interaction) {
      if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
        return interaction.reply({ content: '🔒 Você não pode banir membros.', flags: 1 << 6 });
      }
  
      const user   = interaction.options.getUser('user');
      const reason = interaction.options.getString('reason')   || 'Sem motivo especificado';
      const days   = interaction.options.getInteger('days')   || 0;
  
      // executa o ban
      await interaction.guild.members.ban(user.id, { days, reason });
  
      await interaction.reply({ content: `✅ ${user.tag} foi banido do servidor.`, flags: 1 << 6 });
  
      const logChannel = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logChannel) {
        const embed = new EmbedBuilder()
          .setTitle('🔨 Banimento')
          .setColor(0xFF0000)
          .addFields(
            { name: 'Usuário',    value: user.tag, inline: true },
            { name: 'Moderador',  value: interaction.user.tag, inline: true },
            { name: 'Motivo',     value: reason, inline: false },
            { name: 'Delete Msgs', value: `${days} dia(s)`, inline: true }
          )
          .setTimestamp();
        await logChannel.send({ embeds: [embed] });
      }
    }
  };
  