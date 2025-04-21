// commands/slash/config.js
const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField
} = require('discord.js');
const { getGuildConfig, saveGuildConfig } = require('../../stores/guildConfigStore');
const { t } = require('../../utils/i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('config')
    .setDescription(t(null, 'config.DESCRIPTION'))
    .addSubcommand(sub =>
      sub.setName('prefix')
         .setDescription(t(null, 'config.PREFIX_SUB'))
         .addStringOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.PREFIX_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('logchannel')
         .setDescription(t(null, 'config.LOGCHANNEL_SUB'))
         .addChannelOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.LOGCHANNEL_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('staffrole')
         .setDescription(t(null, 'config.STAFFROLE_SUB'))
         .addRoleOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.STAFFROLE_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('defaultlang')
         .setDescription(t(null, 'config.DEFAULTLANG_SUB'))
         .addStringOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.DEFAULTLANG_OPTION'))
              .addChoices(
                { name: t(null, 'general.LANG_PT'), value: 'pt' },
                { name: t(null, 'general.LANG_EN'), value: 'en' },
                { name: t(null, 'general.LANG_ES'), value: 'es' }
              )
              .setRequired(true)
         )
    )
    // novos subcomandos
    .addSubcommand(sub =>
      sub.setName('welcomechannel')
         .setDescription(t(null, 'config.WELCOME_CHANNEL_SUB'))
         .addChannelOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.WELCOME_CHANNEL_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('welcomemessage')
         .setDescription(t(null, 'config.WELCOME_MESSAGE_SUB'))
         .addStringOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.WELCOME_MESSAGE_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('goodbyechannel')
         .setDescription(t(null, 'config.GOODBYE_CHANNEL_SUB'))
         .addChannelOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.GOODBYE_CHANNEL_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('goodbyemessage')
         .setDescription(t(null, 'config.GOODBYE_MESSAGE_SUB'))
         .addStringOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.GOODBYE_MESSAGE_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('autorole')
         .setDescription(t(null, 'config.AUTOROLE_SUB'))
         .addRoleOption(opt =>
           opt.setName('value')
              .setDescription(t(null, 'config.AUTOROLE_OPTION'))
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('show')
      .setDescription(t(null, 'config.SHOW_SUB'))
    ),

  async execute(interaction) {
    const flags   = 1 << 6;
    const guildId = interaction.guild.id;
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({ content: t(guildId, 'general.NO_PERMISSION'), flags });
    }

    const cfg = await getGuildConfig(guildId);
    const sub = interaction.options.getSubcommand();
    const val = interaction.options.get('value')?.value;

    switch (sub) {
      case 'prefix':
        cfg.prefix = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_PREFIX', { prefix: val }), flags });

      case 'logchannel':
        cfg.logChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_LOGCHANNEL', { channel: `<#${val}>` }), flags });

      case 'staffrole':
        cfg.staffRoleId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_STAFFROLE', { role: `<@&${val}>` }), flags });

      case 'defaultlang':
        cfg.language = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_DEFAULTLANG', { lang: val }), flags });

      case 'welcomechannel':
        cfg.welcomeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_WELCOME_CHANNEL', { channel: `<#${val}>` }), flags });

      case 'welcomemessage':
        cfg.welcomeMessage = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_WELCOME_MESSAGE'), flags });

      case 'goodbyechannel':
        cfg.goodbyeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_GOODBYE_CHANNEL', { channel: `<#${val}>` }), flags });

      case 'goodbyemessage':
        cfg.goodbyeMessage = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_GOODBYE_MESSAGE'), flags });

      case 'autorole':
        cfg.autoRoleId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, 'config.SUCCESS_AUTOROLE', { role: `<@&${val}>` }), flags });

      case 'show':
        const embed = new EmbedBuilder()
          .setTitle(t(guildId, 'config.SHOW_TITLE'))
          .addFields(
            { name: t(guildId, 'config.PREFIX_SUB'),       value: `\`${cfg.prefix}\``, inline: true },
            { name: t(guildId, 'config.LOGCHANNEL_SUB'),   value: cfg.logChannelId ? `<#${cfg.logChannelId}>` : '—', inline: true },
            { name: t(guildId, 'config.STAFFROLE_SUB'),    value: cfg.staffRoleId   ? `<@&${cfg.staffRoleId}>`   : '—', inline: true },
            { name: t(guildId, 'config.DEFAULTLANG_SUB'),  value: cfg.language, inline: true },
            { name: t(guildId, 'config.WELCOME_CHANNEL_SUB'),   value: cfg.welcomeChannelId ? `<#${cfg.welcomeChannelId}>` : '—', inline: true },
            { name: t(guildId, 'config.WELCOME_MESSAGE_SUB'),   value: cfg.welcomeMessage     || '—', inline: true },
            { name: t(guildId, 'config.GOODBYE_CHANNEL_SUB'),   value: cfg.goodbyeChannelId  ? `<#${cfg.goodbyeChannelId}>` : '—', inline: true },
            { name: t(guildId, 'config.GOODBYE_MESSAGE_SUB'),   value: cfg.goodbyeMessage     || '—', inline: true },
            { name: t(guildId, 'config.AUTOROLE_SUB'),          value: cfg.autoRoleId        ? `<@&${cfg.autoRoleId}>`     : '—', inline: true }
          )
          .setColor(0x00AE86)
          .setTimestamp();

        return interaction.reply({ embeds: [embed], flags });
    }
  }
};
