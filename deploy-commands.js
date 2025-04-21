// deploy-commands.js
const envFile = `.env.${process.env.NODE_ENV || 'production'}`;
require('dotenv').config({ path: envFile });
if (process.env.NODE_ENV === 'development' && !process.env.TEST_GUILD_ID) {
  console.error('❌ Você precisa definir TEST_GUILD_ID em', envFile);
  process.exit(1);
}

if (process.env.NODE_ENV === 'development' && !process.env.TEST_GUILD_ID) {
  console.error('❌ TEST_GUILD_ID não está definido em .env.development');
  process.exit(1);
}

const { REST, Routes } = require('discord.js');
const fs   = require('fs');
const path = require('path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands', 'slash');
for (const file of fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))) {
  const cmd = require(path.join(commandsPath, file));
  commands.push(cmd.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

async function deploy() {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Registrando comandos SÓ no guild de teste');
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.TEST_GUILD_ID
        ),
        { body: commands }
      );
    } else {
      console.log('🔄 Registrando comandos globalmente (produção)');
      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID),
        { body: commands }
      );
    }
    console.log('✅ Deploy concluído!');
  } catch (err) {
    console.error(err);
  }
}

deploy();
