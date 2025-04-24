const {
  PermissionsBitField,
  EmbedBuilder,
  ChannelType
} = require('discord.js');
const { doOrSimulate } = require('../utils/action');
const { t } = require('../utils/i18n');

// Custom Error para falta de permissão
class PermissionError extends Error {}

// Função genérica que aplica a ação e retorna o embed de log
async function moderateUser({
  interaction,
  action,       // 'kick' | 'ban' | 'timeout'
  target,       // GuildMember
  options = {}, // { days, reason, ms }
  localeKeys    // { titleKey, fields: [{ nameKey, value }] }
}) {
  const guildId = interaction.guild.id;

  // 1) Checa permissão no Discord
  const flagMap = {
    kick: PermissionsBitField.Flags.KickMembers,
    ban:  PermissionsBitField.Flags.BanMembers,
    timeout: PermissionsBitField.Flags.ModerateMembers
  };
  if (!interaction.member.permissions.has(flagMap[action])) {
    throw new PermissionError(await t(guildId, `mod.${action}.NO_PERM`));  // <--- await aqui
  }

  // 2) Executa (ou simula) via dry‑run
  const label = `${action} ${target.user.tag}` +
    (options.days ? ` for ${options.days}d` : '') +
    (options.ms   ? ` for ${options.ms}ms` : '');
    
  await doOrSimulate(label, () => {
    if (action === 'kick')    return target.kick(options.reason);
    if (action === 'ban')     return interaction.guild.members.ban(target.id, { days: options.days, reason: options.reason });
    if (action === 'timeout') return target.timeout(options.ms, options.reason);
  });

  // 3) Cria embed de log
  const embed = new EmbedBuilder()
    .setTitle(await t(guildId, localeKeys.titleKey))  // <--- await aqui
    .setColor(action === 'ban' ? 0xFF0000
            : action === 'kick' ? 0xFFA500
            : 0x808080)
    .setTimestamp();

  for (const field of localeKeys.fields) {
    embed.addFields({
      name:  await t(guildId, field.nameKey),  // <--- await aqui
      value: field.value,
      inline: field.inline ?? true
    });
  }

  return embed;
}

module.exports = { moderateUser, PermissionError };
