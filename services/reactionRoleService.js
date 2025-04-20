// services/reactionRoleService.js
const {
  getAll,
  add,
  remove
} = require('../stores/reactionRoleStore');

/**
 * Retorna o mapeamento de messageId-emoji → roleId para a guild.
 * @param {string} guildId 
 * @returns {Object<string, string>}
 */
async function listRoles(guildId) {
  return await getAll(guildId);
}

/**
 * Adiciona uma reaction‑role ao armazenamento.
 * @param {string} guildId 
 * @param {string} messageId 
 * @param {string} emoji 
 * @param {string} roleId 
 */
async function addRole(guildId, messageId, emoji, roleId) {
  await add(guildId, messageId, emoji, roleId);
}

/**
 * Remove uma reaction‑role do armazenamento.
 * @param {string} guildId 
 * @param {string} messageId 
 * @param {string} emoji 
 */
async function removeRole(guildId, messageId, emoji) {
  await remove(guildId, messageId, emoji);
}

module.exports = {
  listRoles,
  addRole,
  removeRole
};
