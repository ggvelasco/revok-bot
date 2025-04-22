// commands/slash/revokbot.js
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const os = require('os');
const pkg = require('../../package.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('revokbot')
    .setDescription('📊 Mostra informações técnicas do bot (só para o owner)'),
  async execute(interaction) {
    const ownerId = process.env.OWNER_ID; // coloque seu ID aqui no .env
    if (interaction.user.id !== ownerId) {
      return interaction.reply({ content: '🚫 Você não tem permissão para este comando.', flags: 1 << 6 });
    }

    const { client } = interaction;
    const mem = process.memoryUsage();
    const uptime = process.uptime();
    const totalGuilds = client.guilds.cache.size;
    const totalUsers = client.guilds.cache
      .reduce((acc, g) => acc + g.memberCount, 0);
    const commandsCount = client.slashCommands.size + client.prefixCommands.size;
    const ping = Math.round(client.ws.ping);
    const nodeVersion = process.version;
    const djsVersion = require('discord.js').version;
    const load = os.loadavg()[0].toFixed(2);

    const embed = new EmbedBuilder()
      .setTitle('🤖 Revok Bot — Status Técnico')
      .addFields(
        { name: '📦 Versão',           value: `v${pkg.version}`,               inline: true },
        { name: '⏳ Uptime',           value: `${Math.floor(uptime/3600)}h ${Math.floor((uptime%3600)/60)}m`, inline: true },
        { name: '🐳 Ambiente',         value: process.env.NODE_ENV || 'unknown', inline: true },
        { name: '🌐 Servidores',       value: `${totalGuilds}`,               inline: true },
        { name: '👥 Usuários totais',  value: `${totalUsers}`,                inline: true },
        { name: '⚙️ Comandos',         value: `${commandsCount}`,             inline: true },
        { name: '🏓 Ping API',         value: `${ping}ms`,                    inline: true },
        { name: '💾 Memória (heap)',    value: `${(mem.heapUsed/1024/1024).toFixed(2)} MB`, inline: true },
        { name: '🐟 Load Avg (1m)',    value: `${load}`,                      inline: true },
        { name: '🛠 Node.js',         value: nodeVersion,                   inline: true },
        { name: '📚 discord.js',      value: djsVersion,                    inline: true },
        { name: '🖥 Plataforma',       value: `${os.platform()} ${os.arch()}`, inline: true }
      )
      .setColor(0x00AE86)
      .setTimestamp();

    return interaction.reply({ embeds: [embed], flags: 1 << 6 });
  }
};
