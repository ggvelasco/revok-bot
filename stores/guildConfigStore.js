// stores/guildConfigStore.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Obtém a configuração do servidor, criando defaults se não existir.
 * @param {string} guildId
 */
async function getGuildConfig(guildId) {
  let cfg = await prisma.guildConfig.findUnique({
    where: { guildId }
  });

  if (!cfg) {
    // valores padrão
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
 * Atualiza a configuração do servidor.
 * @param {string} guildId
 * @param {object} updates — objeto com as propriedades a atualizar
 */
async function saveGuildConfig(guildId, updates) {
  return prisma.guildConfig.update({
    where: { guildId },
    data: updates
  });
}

module.exports = { getGuildConfig, saveGuildConfig };
