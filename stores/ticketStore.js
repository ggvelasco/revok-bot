// stores/ticketStore.js
const fs   = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'tickets.json');

/**
 * Carrega o JSON de tickets (ou inicializa um se não existir)
 * @returns {{ nextId: number, data: Record<string, any> }}
 */
function _load() {
  if (!fs.existsSync(file)) return { nextId: 1, data: {} };
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Persiste o JSON de tickets
 * @param {{ nextId: number, data: Record<string, any> }} store
 */
function _save(store) {
  fs.writeFileSync(file, JSON.stringify(store, null, 2));
}

/**
 * Retorna o objeto inteiro de tickets
 */
async function getStore() {
  return _load();
}

/**
 * Salva o objeto de tickets
 * @param {{ nextId: number, data: Record<string, any> }} store
 */
async function saveStore(store) {
  _save(store);
}

module.exports = { getStore, saveStore };
