// stores/reactionRoleStore.js
const fs   = require('fs');
const path = require('path');

const baseFolder = process.env.DATA_PATH || path.join(__dirname, 'prod');
if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true });
}
const file = path.join(baseFolder, 'reactionRoles.json');

function _load() {
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function _save(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

async function getAll(guildId) {
  const db = _load();
  return db[guildId] || {};
}
async function add(guildId, messageId, emoji, roleId) {
  const db = _load();
  db[guildId] = db[guildId] || {};
  db[guildId][`${messageId}-${emoji}`] = roleId;
  _save(db);
}
async function remove(guildId, messageId, emoji) {
  const db = _load();
  if (db[guildId]) {
    delete db[guildId][`${messageId}-${emoji}`];
    _save(db);
  }
}
async function clearGuild(guildId) {
  const db = _load();
  delete db[guildId];
  _save(db);
}

module.exports = { getAll, add, remove, clearGuild };
