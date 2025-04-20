// utils/action.js
const DRY_RUN = process.env.DRY_RUN === 'true';

/**
 * Se DRY_RUN=true, só loga; caso contrário, executa a função real.
 * @param {string} label  Descrição do que seria feito
 * @param {() => Promise<any>} fn  Função que executa a ação real
 */
async function doOrSimulate(label, fn) {
  if (DRY_RUN) {
    console.log(`[DRY RUN] ${label}`);
  } else {
    return fn();
  }
}

module.exports = { doOrSimulate };
