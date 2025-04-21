// utils/i18n.js
const fs   = require('fs');
const path = require('path');

// aqui o path correto, igual ao seu store
const CONFIG_FILE = path.join(__dirname, '..', 'guildConfigs.json');
const LOCALES_DIR = path.join(__dirname, '..', 'locales');

const cache = {};

/** Lê todo o guildConfigs.json em sincrono */
function loadAllConfigs() {
  if (!fs.existsSync(CONFIG_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch {
    return {};
  }
}

/**
 * t(guildId, key, vars, fallback)
 * - key: "help.TITLE", "mod.kick.SUCCESS" etc
 * - vars: { user: "...", channel: "..." }
 * - fallback: string (usado se não encontrar)
 */
function t(guildId, key, vars = {}, fallback = '') {
  // 1) pega o config do guild e normaliza o idioma
  const all = loadAllConfigs();
  const cfg = all[guildId] || {};
  const lang = (cfg.language || 'pt').toLowerCase();

  // 2) carrega o JSON de locale se ainda não em cache
  if (!cache[lang]) {
    const file = path.join(LOCALES_DIR, `${lang}.json`);
    cache[lang] = JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  const dict = cache[lang];

  // 3) percorre a chave
  const parts = key.split('.');
  let str = dict;
  for (const p of parts) {
    str = str?.[p];
    if (str == null) break;
  }
  if (typeof str !== 'string') {
    str = fallback || key;
  }

  // 4) substituições
  for (const [k, v] of Object.entries(vars)) {
    str = str.split(`{${k}}`).join(v);
  }
  return str;
}

module.exports = { t };
