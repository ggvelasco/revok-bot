// index.js
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions, 
  ],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

//------------------- collection para comandos -------------------
client.prefixCommands = new Collection();
client.slashCommands  = new Collection();

// ------------------- lê todos os arquivos de ./commands/prefix -------------------

const prefixPath = path.join(__dirname, 'commands', 'prefix');
for (const file of fs.readdirSync(prefixPath).filter(f => f.endsWith('.js'))) {
  const cmd = require(path.join(prefixPath, file));
  // espera: { name, execute(message,args) }
  client.prefixCommands.set(cmd.name, cmd);
}

// ------------------- lê todos os arquivos de ./commands/slash -------------------

const slashPath = path.join(__dirname, 'commands', 'slash');
for (const file of fs.readdirSync(slashPath).filter(f => f.endsWith('.js'))) {
  const cmd = require(path.join(slashPath, file));
  // espera: { data: SlashCommandBuilder, execute(interaction) }
  client.slashCommands.set(cmd.data.name, cmd);
}

// ---------------------------------------------------------------

//------------------- lê todos os arquivos de ./events -------------------

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter((f) => f.endsWith(".js"));

for (const file of eventFiles) {
  const { name, once, execute } = require(path.join(eventsPath, file));
  if (once) {
    client.once(name, (...args) => execute(client, ...args));
  } else {
    client.on(name, (...args) => execute(...args));
  }
}

// ---------------------------------------------------------------


client.login(process.env.DISCORD_TOKEN);
