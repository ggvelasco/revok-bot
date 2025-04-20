// services/ticketService.js
const { getStore, saveStore } = require('../stores/ticketStore');

async function openTicket({ guildId, userId, subject, channelId }) {
  const store = await getStore();
  const id = store.nextId++;
  store.data[id] = { guildId, userId, channelId, subject, openedAt: Date.now() };
  await saveStore(store);
  return id;
}

async function closeTicketByChannel(channelId) {
  const store = await getStore();
  const entry = Object.entries(store.data).find(([, t]) => t.channelId === channelId);
  if (!entry) return null;
  const [id, ticket] = entry;
  delete store.data[id];
  await saveStore(store);
  return id;
}

async function getOpenTicket(guildId, userId) {
  const store = await getStore();
  const entry = Object.entries(store.data)
    .find(([, t]) => t.guildId === guildId && t.userId === userId);
  return entry ? { id: entry[0], ...entry[1] } : null;
}

module.exports = { openTicket, closeTicketByChannel, getOpenTicket };
