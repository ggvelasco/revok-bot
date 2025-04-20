// events/ready.js
const DRY_RUN = process.env.DRY_RUN === 'true';

// ANSI escapes para cor
const RED   = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    const status = DRY_RUN
      ? `🛡️  ${GREEN}[DRY‑RUN ON]${RESET}`
      : `⚠️  ${RED}[DRY‑RUN OFF]${RESET}`;

    console.log(`${status} ✅ ${client.user.tag} Bot está ${GREEN}online${RESET}!`);
  },
};
