// index.js
require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Logado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (!message.guild || message.author.bot) return;
  const prefix = '!';
  if (!message.content.startsWith(prefix)) return;

  const [cmd] = message.content.slice(prefix.length).trim().split(/\s+/);
  if (cmd === 'ping') {
    message.reply(`Pong! Latência: ${Date.now() - message.createdTimestamp}ms`);
  }
});

client.login(process.env.DISCORD_TOKEN);
