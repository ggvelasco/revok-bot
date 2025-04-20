// utils/i18n.js
const fs   = require('fs');
const path = require('path');
const { getGuildConfig } = require('../stores/guildConfigStore');

// um cache para não ficar lendo disco toda hora
const cache = {};

function t(guildId, key, vars = {}) {
  // carrega config síncrona
  const cfg = getGuildConfig(guildId);
  const lang = cfg.language || 'pt';

  if (!cache[lang]) {
    const file = path.join(__dirname, '..', 'locales', `${lang}.json`);
    cache[lang] = JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  // percorre a chave (ex: "announce.SENT")
  const parts = key.split('.');
  let str = cache[lang];
  for (const p of parts) {
    str = str?.[p];
  }
  if (typeof str !== 'string') {
    // fallback
    return key;
  }

  // substitui variáveis
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return str;
}

module.exports = { t };
