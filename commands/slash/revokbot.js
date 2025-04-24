// commands/slash/revokbot.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');
const pkg = require('../../package.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('revokbot')
    .setDescription('📊 Mostra informações técnicas do bot (apenas para o owner)'),

  async execute(interaction) {
    const ephemeralFlag = 1 << 6;
    const ownerId = process.env.OWNER_ID;

    if (!ownerId || interaction.user.id !== ownerId) {
      return interaction.reply({ content: '🚫 Você não tem permissão para este comando.', flags: ephemeralFlag });
    }

    const { client } = interaction;
    const mem = process.memoryUsage();
    const uptime = process.uptime();
    const totalGuilds = client.guilds.cache.size;
    const totalUsers = client.guilds.cache.reduce((acc, g) => acc + g.memberCount, 0);
    const commandsCount = client.slashCommands.size + client.prefixCommands.size;
    const ping = Math.round(client.ws.ping);
    const nodeVersion = process.version;
    const djsVersion = require('discord.js').version;
    const loadAvg = os.loadavg()[0].toFixed(2);

    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const uptimeDisplay = `${days}d ${hours}h ${minutes}m`;

    const cpuUsage = process.cpuUsage();
    const cpuPercent = ((cpuUsage.user + cpuUsage.system) / (uptime * 1e6)).toFixed(2);

    const embed = new EmbedBuilder()
      .setTitle('📊 Revok Bot — Painel Técnico')
      .setColor(0x00AE86)
      .addFields(
        { name: '🖥 Sistema', value: '\u200B' },
        { name: '• Plataforma', value: `${os.platform()} ${os.arch()}`, inline: true },
        { name: '• Node.js',    value: nodeVersion, inline: true },
        { name: '• discord.js', value: djsVersion,  inline: true },
        { name: '\u200B', value: '\u200B' },

        { name: '⚙️ Bot', value: '\u200B' },
        { name: '• Versão',   value: `v${pkg.version}`, inline: true },
        { name: '• Ambiente', value: process.env.NODE_ENV || 'unknown', inline: true },
        { name: '• Uptime',   value: uptimeDisplay, inline: true },
        { name: '\u200B', value: '\u200B' },

        { name: '🌐 Discord', value: '\u200B' },
        { name: '• Servidores', value: `${totalGuilds}`, inline: true },
        { name: '• Usuários',   value: `${totalUsers}`, inline: true },
        { name: '• Comandos',   value: `${commandsCount}`, inline: true },
        { name: '\u200B', value: '\u200B' },

        { name: '📈 Performance', value: '\u200B' },
        { name: '• Ping API',     value: `${ping}ms`, inline: true },
        { name: '• Memória',      value: `${(mem.heapUsed/1024/1024).toFixed(2)} MB`, inline: true },
        { name: '• CPU (%)',      value: `${cpuPercent}%`, inline: true },
        { name: '• Load Avg (1m)',value: `${loadAvg}`, inline: true }
      )
      .setFooter({ text: 'Revok • Painel do Desenvolvedor • gus' })
      .setTimestamp();

    return interaction.reply({ embeds: [embed], flags: ephemeralFlag });
  }
};
