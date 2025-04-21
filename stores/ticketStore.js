// stores/ticketStore.js
const fs   = require('fs');
const path = require('path');
const base = process.env.DATA_PATH || path.join(__dirname, 'prod');
if (!fs.existsSync(base)) fs.mkdirSync(base, { recursive: true });
const FILE = path.join(base, 'ticketStore.json');

function _load() {
  if (!fs.existsSync(FILE)) return { nextIdByGuild: {}, data: {} };
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function _save(db) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

async function getStore() {
  const db = _load();
  // garantir estrutura
  db.nextIdByGuild = db.nextIdByGuild || {};
  db.data          = db.data          || {};
  return db;
}

async function saveStore(db) {
  _save(db);
}

module.exports = { getStore, saveStore };
