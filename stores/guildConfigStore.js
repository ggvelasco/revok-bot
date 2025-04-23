// stores/guildConfigStore.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Garante que exista uma config para essa guild; se não, cria com valores default.
 * @param {string} guildId 
 */
async function getGuildConfig(guildId) {
  let cfg = await prisma.guildConfig.findUnique({
    where: { guildId }
  });
  if (!cfg) {
    // cria defaults
    cfg = await prisma.guildConfig.create({
      data: {
        guildId,
        prefix: '!',
        staffRoleId: null,
        logChannelId: null,
        language: 'en',
        welcomeChannelId: null,
        welcomeMessage: null,
        goodbyeChannelId: null,
        goodbyeMessage: null,
        autoRoleId: null,
        disabledCommands: []
      }
    });
  }
  return cfg;
}

/**
 * Atualiza (ou cria) a config desta guild.
 * @param {string} guildId 
 * @param {object} data 
 */
async function saveGuildConfig(guildId, data) {
  await prisma.guildConfig.upsert({
    where: { guildId },
    update: data,
    create: { guildId, ...data }
  });
}

module.exports = { getGuildConfig, saveGuildConfig };
