const { getGuildConfig } = require('../stores/guildConfigStore');
const { t } = require('../utils/i18n');

module.exports = {
  name: 'guildMemberRemove',
  async execute(member) {
    const cfg = await getGuildConfig(member.guild.id);
    if (cfg.goodbyeChannelId) {
      const channel = member.guild.channels.cache.get(cfg.goodbyeChannelId);
      if (channel) {
        const text = cfg.goodbyeMessage
          ? cfg.goodbyeMessage.replace('{user}', member.user.tag)
          : t(member.guild.id, 'config.DEFAULT_GOODBYE', { user: member.user.tag });
        channel.send(text).catch(console.error);
      }
    }
  }
};
