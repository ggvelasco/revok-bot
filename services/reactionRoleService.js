// services/reactionRoleService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Retorna o map de reaction-role para uma guild.
 */
async function listRoles(guildId) {
  const rows = await prisma.reactionRole.findMany({
    where: { guildId }
  });
  // transforma em { "msgId-emoji": roleId, ... }
  return Object.fromEntries(
    rows.map(r => [`${r.messageId}-${r.emoji}`, r.roleId])
  );
}

/**
 * Adiciona/atualiza uma reaction-role.
 */
async function addRole(guildId, messageId, emoji, roleId) {
  await prisma.reactionRole.upsert({
    where: { guildId_messageId_emoji: { guildId, messageId, emoji } },
    create: { guildId, messageId, emoji, roleId },
    update: { roleId }
  });
}

/**
 * Remove uma reaction-role.
 */
async function removeRole(guildId, messageId, emoji) {
  await prisma.reactionRole.deleteMany({
    where: { guildId, messageId, emoji }
  });
}

module.exports = { listRoles, addRole, removeRole };
