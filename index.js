// index.js
// ─── 1) Carrega o .env certo antes de tudo ─────────────────
const envFile = `.env.${process.env.NODE_ENV || 'production'}`;
require('dotenv').config({ path: envFile });

// ─── 2) Só depois lemos o DRY_RUN ──────────────────────────
const DRY_RUN = process.env.DRY_RUN === 'true';

// ─── 3) E o resto do setup ────────────────────────────────
const fs   = require('fs');
const path = require('path');
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction
  ],
});

// opcional: debug rápido pra conferir qual .env foi carregado
console.log(`💡 Carregando variáveis de: ${envFile}`);
console.log(`💡 Dry‑run: ${DRY_RUN}`);

// ─── collections de comandos ───────────────────────────────
client.prefixCommands = new Collection();
client.slashCommands  = new Collection();

const prefixPath = path.join(__dirname, 'commands', 'prefix');
for (const f of fs.readdirSync(prefixPath).filter(f=>f.endsWith('.js'))) {
  const cmd = require(path.join(prefixPath, f));
  client.prefixCommands.set(cmd.name, cmd);
}

const slashPath = path.join(__dirname, 'commands', 'slash');
for (const f of fs.readdirSync(slashPath).filter(f=>f.endsWith('.js'))) {
  const cmd = require(path.join(slashPath, f));
  client.slashCommands.set(cmd.data.name, cmd);
}

// ─── carregando events ─────────────────────────────────────
const eventsPath = path.join(__dirname, 'events');
for (const f of fs.readdirSync(eventsPath).filter(f=>f.endsWith('.js'))) {
  const { name, once, execute } = require(path.join(eventsPath, f));
  if (once) client.once(name, (...args) => execute(client, ...args));
  else     client.on(name, (...args) => execute(...args));
}

console.log('Eventos carregados:', client.eventNames());

// ─── login usando o token do .env correto ──────────────────
client.login(process.env.DISCORD_TOKEN);
