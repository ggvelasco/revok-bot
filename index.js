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
  ],
});

//------------------- collection para comandos -------------------
client.commands = new Collection();

// ------------------- lê todos os arquivos de ./commands -------------------
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((f) => f.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // cada comando precisa ter: name e execute()
  if ("name" in command && "execute" in command) {
    client.commands.set(command.name, command);
  } else {
    console.warn(`[WARNING] O comando em ${file} está mal formatado.`);
  }
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
