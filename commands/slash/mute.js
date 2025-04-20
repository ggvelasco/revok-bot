// commands/slash/mute.js
const {
  SlashCommandBuilder,
  PermissionsBitField,
  EmbedBuilder,
  ChannelType
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Aplica ou remove timeout nativo (mute) de um usuário')
    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription('Usuário a ser mutado/desmutado')
        .setRequired(true)
    )
    .addIntegerOption(opt =>
      opt
        .setName('duration')
        .setDescription('Duração do mute (número)')
        .setRequired(false)
    )
    .addStringOption(opt =>
      opt
        .setName('unit')
        .setDescription('Unidade de tempo')
        .addChoices(
          { name: 'Minutos', value: 'minutes' },
          { name: 'Horas',   value: 'hours'   },
          { name: 'Dias',    value: 'days'    }
        )
        .setRequired(false)
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription('Motivo do mute')
        .setRequired(false)
    ),

  async execute(interaction) {
    const member   = interaction.options.getMember('user');
    const duration = interaction.options.getInteger('duration');
    const unit     = interaction.options.getString('unit');
    const reason   = interaction.options.getString('reason') || 'Sem motivo especificado';
    const flags    = 1 << 6;

    // Permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
      return interaction.reply({ content: '🔒 Você não tem permissão para mutar membros.', flags });
    }

    // Detecta se já está em timeout
    const isTimedOut = member.communicationDisabledUntilTimestamp && member.communicationDisabledUntilTimestamp > Date.now();

    // Se não passou duração, faz toggle de unmute
    if (!duration) {
      if (!isTimedOut) {
        return interaction.reply({ content: '❌ Especifique uma duração para mutar, ou use `/mute user duration:0` para desmutar.', flags });
      }
      // desmute
      await member.timeout(null, reason);
      await interaction.reply({ content: `🔊 ${member.user.tag} foi desmutado.`, flags });

      // log
      const logChannel = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logChannel) {
        const embed = new EmbedBuilder()
          .setTitle('🔊 Desmute')
          .setColor(0x00FF00)
          .addFields(
            { name: 'Usuário',   value: member.user.tag,        inline: true },
            { name: 'Moderador', value: interaction.user.tag,     inline: true },
            { name: 'Motivo',    value: reason,                   inline: false }
          )
          .setTimestamp();
        await logChannel.send({ embeds: [embed] });
      }
      return;
    }

    // Mute com duração
    const multipliers = { minutes: 60_000, hours: 3_600_000, days: 86_400_000 };
    const ms = multipliers[unit] * duration;

    await member.timeout(ms, reason);

    // texto de saída com singular/plural
    const unitMap = {
      minutes: { singular: 'minuto', plural: 'minutos' },
      hours:   { singular: 'hora',   plural: 'horas'   },
      days:    { singular: 'dia',    plural: 'dias'    }
    };
    const label = duration === 1
      ? unitMap[unit].singular
      : unitMap[unit].plural;

    await interaction.reply({ content: `🔇 ${member.user.tag} foi mutado por ${duration} ${label}.`, flags });

    // log
    const logChannel = interaction.guild.channels.cache.find(ch =>
      ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
    );
    if (logChannel) {
      const embed = new EmbedBuilder()
        .setTitle('🔇 Mute')
        .setColor(0x808080)
        .addFields(
          { name: 'Usuário',   value: member.user.tag,        inline: true },
          { name: 'Moderador', value: interaction.user.tag,     inline: true },
          { name: 'Duração',   value: `${duration} ${label}`,   inline: true },
          { name: 'Motivo',    value: reason,                   inline: false }
        )
        .setTimestamp();
      await logChannel.send({ embeds: [embed] });
    }
  }
};
