const { getGuildConfig } = require('../stores/guildConfigStore');
const { t } = require('../utils/i18n');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const cfg = await getGuildConfig(member.guild.id);
    // 1) auto‑role
    if (cfg.autoRoleId) {
      member.roles.add(cfg.autoRoleId).catch(console.error);
    }
    // 2) welcome
    if (cfg.welcomeChannelId) {
      const channel = member.guild.channels.cache.get(cfg.welcomeChannelId);
      if (channel) {
        const text = cfg.welcomeMessage
          ? cfg.welcomeMessage.replace('{user}', member.toString())
          : t(member.guild.id, 'config.DEFAULT_WELCOME', { user: member.toString() });
        channel.send(text).catch(console.error);
      }
    }
  }
};
