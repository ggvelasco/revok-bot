// deploy-commands.js
// 1) carrega .env genérico
require('dotenv').config();
// 2) carrega .env específico (override)
const envFile = `.env.${process.env.NODE_ENV || 'production'}`;
require('dotenv').config({ path: envFile, override: true });

const { REST, Routes } = require('discord.js');
const fs   = require('fs');
const path = require('path');

const CLIENT_ID    = process.env.CLIENT_ID;
const TOKEN        = process.env.DISCORD_TOKEN;
const TEST_GUILD   = process.env.TEST_GUILD_ID;
const PROD_GUILD   = process.env.PROD_GUILD_ID;
const isDev        = process.env.NODE_ENV === 'development';

// 3) Carrega todos os slash commands
const commands = [];
const commandsPath = path.join(__dirname, 'commands', 'slash');
for (const file of fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))) {
  const cmd = require(path.join(commandsPath, file));
  commands.push(cmd.data.toJSON());
}

// 4) debug: veja o que vai ser enviado
console.log('→ Commands to deploy:', commands.map(c => c.name).join(', '));

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    if (isDev) {
      // DEV: guild‐level instantâneo
      if (!TEST_GUILD) throw new Error('TEST_GUILD_ID não definido em .env.development');
      console.log(`🔄 Registrando ${commands.length} comandos na guild (DEV) ${TEST_GUILD}`);
      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD),
        { body: commands }
      );
      console.log('✅ Comandos DEV registrados com sucesso!');
    } else {
      // PROD: primeiro, guild‐level (instantâneo) se quiser testar rápido
      if (PROD_GUILD) {
        console.log(`🔄 Registrando ${commands.length} comandos na guild (PROD) ${PROD_GUILD}`);
        await rest.put(
          Routes.applicationGuildCommands(CLIENT_ID, PROD_GUILD),
          { body: commands }
        );
        console.log('✅ Comandos PROD(guild) registrados com sucesso!');
      }
      // depois, registro global oficial
      console.log(`🔄 Registrando ${commands.length} comandos GLOBALMENTE`);
      await rest.put(
        Routes.applicationCommands(CLIENT_ID),
        { body: commands }
      );
      console.log('✅ Comandos GLOBAL registrados com sucesso!');
    }
  } catch (err) {
    console.error('❌ Erro no deploy de comandos:', err);
  }
})();
