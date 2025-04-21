// deploy-commands.js
require('dotenv').config();

const fs   = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

const token     = process.env.DISCORD_TOKEN;
const clientId  = process.env.CLIENT_ID;
const guildId   = process.env.DEV_GUILD_ID;   // só para deploy local em um servidor de testes

if (!token || !clientId || !guildId) {
  console.error('❌ Missing one of DISCORD_TOKEN, CLIENT_ID or DEV_GUILD_ID in .env');
  process.exit(1);
}

// Carrega todos os slash commands
const commands = [];
const slashPath    = path.join(__dirname, 'commands', 'slash');
const commandFiles = fs.readdirSync(slashPath).filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(path.join(slashPath, file));
  commands.push(command.data.toJSON());
}

(async () => {
  const rest = new REST({ version: '10' }).setToken(token);

  console.log(`→ Registering ${commands.length} slash commands on guild ${guildId}…`);
  try {
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('✅ Commands registered successfully');
  } catch (err) {
    console.error('❌ Error registering commands:', err);
  }
})();
