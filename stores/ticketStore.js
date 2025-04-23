// stores/ticketStore.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Abre um novo ticket.
 * @param {object} params
 * @param {string} params.guildId
 * @param {string} params.userId
 * @param {string} params.channelId
 * @param {string} params.subject
 * @returns {Promise<object>} O ticket criado (inclui id autogerado)
 */
async function openTicket({ guildId, userId, channelId, subject }) {
  return prisma.ticket.create({
    data: {
      guildId,
      userId,
      channelId,
      subject,
      openedAt: new Date()
    }
  });
}

/**
 * Busca se o usuário já tem um ticket aberto neste guild.
 * @param {string} guildId
 * @param {string} userId
 * @returns {Promise<object|null>}
 */
async function getOpenTicketForUser(guildId, userId) {
  return prisma.ticket.findFirst({
    where: { guildId, userId }
  });
}

/**
 * Encontra um ticket pelo channelId.
 * @param {string} channelId
 * @returns {Promise<object|null>}
 */
async function getTicketByChannel(channelId) {
  return prisma.ticket.findUnique({
    where: { channelId }
  });
}

/**
 * Fecha (deleta) o ticket daquele channel.
 * @param {string} channelId
 * @returns {Promise<import('@prisma/client').Prisma.BatchPayload>}
 */
async function closeTicketByChannel(channelId) {
  return prisma.ticket.deleteMany({
    where: { channelId }
  });
}

module.exports = {
  openTicket,
  getOpenTicketForUser,
  getTicketByChannel,
  closeTicketByChannel
};
