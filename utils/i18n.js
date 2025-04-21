// utils/i18n.js
const fs   = require('fs');
const path = require('path');

// Mesma lógica de DATA_PATH que você usa nos stores
const baseFolder = process.env.DATA_PATH || path.join(__dirname, '..', 'stores', 'prod');
const CONFIG_FILE = path.join(baseFolder, 'guildConfig.json');

// Cache de arquivos de locale para não ficar carregando do disco toda hora
const localeCache = {};

function t(guildId, key, vars = {}) {
  // 1) carrega config de guild SINCRONAMENTE
  let cfgDb = {};
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      cfgDb = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    } catch {}
  }
  const cfg = cfgDb[guildId] || {};
  const lang = cfg.language || 'pt';

  // 2) carrega o locale se ainda não estiver no cache
  if (!localeCache[lang]) {
    const localeFile = path.join(__dirname, '..', 'locales', `${lang}.json`);
    try {
      localeCache[lang] = JSON.parse(fs.readFileSync(localeFile, 'utf8'));
    } catch {
      // se falhar, use o inglês como fallback
      localeCache[lang] = JSON.parse(fs.readFileSync(
        path.join(__dirname, '..', 'locales', 'en.json'),
        'utf8'
      ));
    }
  }

  // 3) pega a string por key (ex: "ticket.CREATE_TITLE")
  const parts = key.split('.');
  let str = localeCache[lang];
  for (const p of parts) {
    str = str?.[p];
    if (str == null) break;
  }
  if (typeof str !== 'string') {
    // fallback simples: devolve a própria key
    return key;
  }

  // 4) substitui variáveis {id}, {user}, {subject}, etc.
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }

  return str;
}

module.exports = { t };
