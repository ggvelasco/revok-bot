// stores/ticketStore.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function openTicket({ guildId, userId, channelId, subject }) {
  return prisma.ticket.create({
    data: { guildId, userId, channelId, subject }
  });
}

async function getOpenTicketForUser(guildId, userId) {
  return prisma.ticket.findFirst({
    where: { guildId, userId, closedAt: null }
  });
}

async function getTicketByChannel(channelId) {
  return prisma.ticket.findFirst({
    where: { channelId, closedAt: null }
  });
}

async function closeTicketByChannel(channelId) {
  return prisma.ticket.updateMany({
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
