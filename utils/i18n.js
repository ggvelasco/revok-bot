// utils/i18n.js
const fs   = require('fs');
const path = require('path');
const { getGuildConfig } = require('../stores/guildConfigStore');

// cache de locale
const cache = {};

// agora é async
async function t(guildId, key, vars = {}) {
  // espera a config do guild
  const cfg  = await getGuildConfig(guildId);
  const lang = cfg.language || 'pt';

  if (!cache[lang]) {
    const file = path.join(__dirname, '..', 'locales', `${lang}.json`);
    cache[lang] = JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  // percorre a chave
  const parts = key.split('.');
  let str = cache[lang];
  for (const p of parts) {
    str = str?.[p];
  }
  if (typeof str !== 'string') {
    return key; // fallback
  }

  // substituições
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return str;
}

module.exports = { t };
