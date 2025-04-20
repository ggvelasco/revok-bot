// stores/reactionRoleStore.js
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'reactionRoles.json');

/**
 * Carrega todo o banco.
 * @returns {Object} mapeamento inteiro do JSON.
 */
function _load() {
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Salva todo o banco.
 * @param {Object} data
 */
function _save(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

/**
 * Retorna o objeto de reaction‑roles para a guild.
 * @param {string} guildId
 * @returns {Object.<string,string>}  
 */
async function getAll(guildId) {
  const db = _load();
  return db[guildId] || {};
}

/**
 * Adiciona ou atualiza uma reaction‑role.
 * @param {string} guildId
 * @param {string} messageId
 * @param {string} emoji
 * @param {string} roleId
 */
async function add(guildId, messageId, emoji, roleId) {
  const db = _load();
  db[guildId] = db[guildId] || {};
  db[guildId][`${messageId}-${emoji}`] = roleId;
  _save(db);
}

/**
 * Remove uma reaction‑role.
 * @param {string} guildId
 * @param {string} messageId
 * @param {string} emoji
 */
async function remove(guildId, messageId, emoji) {
  const db = _load();
  if (db[guildId]) {
    delete db[guildId][`${messageId}-${emoji}`];
    _save(db);
  }
}

module.exports = { getAll, add, remove };
