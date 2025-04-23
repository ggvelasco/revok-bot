// stores/ticketStore.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Abre um ticket no banco e retorna o registro.
 */
async function openTicket({ guildId, userId, channelId, subject }) {
  return await prisma.ticket.create({
    data: { guildId, userId, channelId, subject }
  });
}

/**
 * Retorna um ticket aberto (sem closedAt) para este usuário/guild.
 */
async function getOpenTicketForUser(guildId, userId) {
  return await prisma.ticket.findFirst({
    where: { guildId, userId, closedAt: null }
  });
}

/**
 * Retorna o ticket associado a este canal (aberto).
 */
async function getTicketByChannel(channelId) {
  return await prisma.ticket.findFirst({
    where: { channelId, closedAt: null }
  });
}

/**
 * Fecha (marca closedAt) todos tickets abertos neste canal.
 */
async function closeTicketByChannel(channelId) {
  return await prisma.ticket.updateMany({
    where: { channelId, closedAt: null },
    data: { closedAt: new Date() }
  });
}

module.exports = {
  openTicket,
  getOpenTicketForUser,
  getTicketByChannel,
  closeTicketByChannel
};
