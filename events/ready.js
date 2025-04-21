// events/ready.js
const DRY_RUN = process.env.DRY_RUN === 'true';

// ANSI escapes para cor
const RED    = '\x1b[31m';
const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';
const YELLOW = '\x1b[33m';
const RESET  = '\x1b[0m';

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    // Determina ambiente: DEVELOPMENT ou PRODUCTION
    const env = (process.env.NODE_ENV || 'production').toUpperCase();
    const envColor = env === 'DEVELOPMENT' ? CYAN : YELLOW;
    const envTag   = `${envColor}[${env}]${RESET}`;

    // Tag de dry‑run
    const dryTag = DRY_RUN
      ? `${GREEN}[DRY‑RUN ON]${RESET}`
      : `${RED}[DRY‑RUN OFF]${RESET}`;

    console.log(
      `🔌 ${envTag} ${dryTag} ✅ ${client.user.tag} está ${GREEN}online${RESET}!`
    );
  },
};
