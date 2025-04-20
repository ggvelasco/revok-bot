// stores/guildConfigStore.js
const fs   = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'guildConfigs.json');

function _load() {
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function _save(cfg) {
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2));
}

function getGuildConfig(guildId) {
  const all = _load();
  return all[guildId] || { language: 'pt' };
}

function saveGuildConfig(guildId, config) {
  const all = _load();
  all[guildId] = config;
  _save(all);
}

module.exports = { getGuildConfig, saveGuildConfig };
