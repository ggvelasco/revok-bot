// stores/guildConfigStore.js
const fs = require("fs");
const path = require("path");

const baseFolder = process.env.DATA_PATH || path.join(__dirname, 'prod');
if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true });
}
const FILE = path.join(baseFolder, 'guildConfig.json');

function _load() {
  if (!fs.existsSync(FILE)) return {};
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}
function _save(db) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

async function getGuildConfig(guildId) {
  const db = _load();
  const defaults = {
    prefix: "!",
    staffRoleId: null,
    logChannelId: null,
    language: "pt",
    welcomeChannelId: null,
    welcomeMessage: null,
    goodbyeChannelId: null,
    goodbyeMessage: null,
    autoRoleId: null,
    disabledCommands: [],
  };
  if (!db[guildId]) {
    db[guildId] = defaults;
    _save(db);
  } else {
    // garante que todas as chaves existam
    db[guildId] = { ...defaults, ...db[guildId] };
  }
  return db[guildId];
}

async function saveGuildConfig(guildId, cfg) {
  const db = _load();
  db[guildId] = cfg;
  _save(db);
}

module.exports = { getGuildConfig, saveGuildConfig };
