const {
    SlashCommandBuilder,
    PermissionsBitField,
    EmbedBuilder,
    ChannelType
  } = require('discord.js');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('kick')
      .setDescription('Expulsa um usuário do servidor')
      .addUserOption(opt =>
        opt.setName('user')
           .setDescription('Usuário a ser expulso')
           .setRequired(true)
      )
      .addStringOption(opt =>
        opt.setName('reason')
           .setDescription('Motivo da expulsão')
      ),
    async execute(interaction) {
      // permissão
      if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
        return interaction.reply({ content: '🔒 Você não pode expulsar membros.', flags: 1 << 6 });
      }
  
      const target = interaction.options.getMember('user');
      const reason = interaction.options.getString('reason') || 'Sem motivo especificado';
  
      if (!target.kickable) {
        return interaction.reply({ content: '❌ Não posso expulsar esse usuário.', flags: 1 << 6 });
      }
  
      // executa o kick
      await target.kick(reason);
  
      // resposta pro invocador
      await interaction.reply({ content: `✅ ${target.user.tag} foi expulso do servidor.`, flags: 1 << 6 });
  
      // tentativa de logar em #mod-logs
      const logChannel = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logChannel) {
        const embed = new EmbedBuilder()
          .setTitle('👢 Expulsão')
          .setColor(0xFFA500)
          .addFields(
            { name: 'Usuário',    value: target.user.tag, inline: true },
            { name: 'Moderador',  value: interaction.user.tag, inline: true },
            { name: 'Motivo',     value: reason, inline: false }
          )
          .setTimestamp();
        await logChannel.send({ embeds: [embed] });
      }
    }
  };
  