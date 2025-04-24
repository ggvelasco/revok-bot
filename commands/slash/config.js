// commands/slash/config.js
const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
  ChannelType
} = require("discord.js");
const {
  getGuildConfig,
  saveGuildConfig
} = require("../../stores/guildConfigStore");
const { t } = require("../../utils/i18n");
const pt = require("../../locales/pt.json");
const en = require("../../locales/en.json");
const es = require("../../locales/es.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("config")
    .setDescription(en.config.DESCRIPTION)
    .setDescriptionLocalizations({
      "pt-BR": pt.config.DESCRIPTION,
      "es-ES": es.config.DESCRIPTION,
      "en-US": en.config.DESCRIPTION
    })

    // prefix
    .addSubcommand(sub =>
      sub
        .setName("prefix")
        .setDescription(en.config.PREFIX_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.PREFIX_SUB,
          "es-ES": es.config.PREFIX_SUB,
          "en-US": en.config.PREFIX_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.PREFIX_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.PREFIX_OPTION,
              "es-ES": es.config.PREFIX_OPTION,
              "en-US": en.config.PREFIX_OPTION
            })
            .setRequired(true)
        )
    )

    // logchannel
    .addSubcommand(sub =>
      sub
        .setName("logchannel")
        .setDescription(en.config.LOGCHANNEL_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.LOGCHANNEL_SUB,
          "es-ES": es.config.LOGCHANNEL_SUB,
          "en-US": en.config.LOGCHANNEL_SUB
        })
        .addChannelOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.LOGCHANNEL_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.LOGCHANNEL_OPTION,
              "es-ES": es.config.LOGCHANNEL_OPTION,
              "en-US": en.config.LOGCHANNEL_OPTION
            })
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        )
    )

    // staffrole
    .addSubcommand(sub =>
      sub
        .setName("staffrole")
        .setDescription(en.config.STAFFROLE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.STAFFROLE_SUB,
          "es-ES": es.config.STAFFROLE_SUB,
          "en-US": en.config.STAFFROLE_SUB
        })
        .addRoleOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.STAFFROLE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.STAFFROLE_OPTION,
              "es-ES": es.config.STAFFROLE_OPTION,
              "en-US": en.config.STAFFROLE_OPTION
            })
            .setRequired(true)
        )
    )

    // defaultlang
    .addSubcommand(sub =>
      sub
        .setName("defaultlang")
        .setDescription(en.config.DEFAULTLANG_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.DEFAULTLANG_SUB,
          "es-ES": es.config.DEFAULTLANG_SUB,
          "en-US": en.config.DEFAULTLANG_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.DEFAULTLANG_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.DEFAULTLANG_OPTION,
              "es-ES": es.config.DEFAULTLANG_OPTION,
              "en-US": en.config.DEFAULTLANG_OPTION
            })
            .addChoices(
              { name: pt.general.LANG_PT, value: "pt" },
              { name: en.general.LANG_EN, value: "en" },
              { name: es.general.LANG_ES, value: "es" }
            )
            .setRequired(true)
        )
    )

    // welcomechannel
    .addSubcommand(sub =>
      sub
        .setName("welcomechannel")
        .setDescription(en.config.WELCOME_CHANNEL_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.WELCOME_CHANNEL_SUB,
          "es-ES": es.config.WELCOME_CHANNEL_SUB,
          "en-US": en.config.WELCOME_CHANNEL_SUB
        })
        .addChannelOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.WELCOME_CHANNEL_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.WELCOME_CHANNEL_OPTION,
              "es-ES": es.config.WELCOME_CHANNEL_OPTION,
              "en-US": en.config.WELCOME_CHANNEL_OPTION
            })
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        )
    )

    // welcomemessage
    .addSubcommand(sub =>
      sub
        .setName("welcomemessage")
        .setDescription(en.config.WELCOME_MESSAGE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.WELCOME_MESSAGE_SUB,
          "es-ES": es.config.WELCOME_MESSAGE_SUB,
          "en-US": en.config.WELCOME_MESSAGE_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.WELCOME_MESSAGE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.WELCOME_MESSAGE_OPTION,
              "es-ES": es.config.WELCOME_MESSAGE_OPTION,
              "en-US": en.config.WELCOME_MESSAGE_OPTION
            })
            .setRequired(true)
        )
    )

    // goodbyechannel
    .addSubcommand(sub =>
      sub
        .setName("goodbyechannel")
        .setDescription(en.config.GOODBYE_CHANNEL_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.GOODBYE_CHANNEL_SUB,
          "es-ES": es.config.GOODBYE_CHANNEL_SUB,
          "en-US": en.config.GOODBYE_CHANNEL_SUB
        })
        .addChannelOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.GOODBYE_CHANNEL_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.GOODBYE_CHANNEL_OPTION,
              "es-ES": es.config.GOODBYE_CHANNEL_OPTION,
              "en-US": en.config.GOODBYE_CHANNEL_OPTION
            })
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        )
    )

    // goodbyemessage
    .addSubcommand(sub =>
      sub
        .setName("goodbyemessage")
        .setDescription(en.config.GOODBYE_MESSAGE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.GOODBYE_MESSAGE_SUB,
          "es-ES": es.config.GOODBYE_MESSAGE_SUB,
          "en-US": en.config.GOODBYE_MESSAGE_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.GOODBYE_MESSAGE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.GOODBYE_MESSAGE_OPTION,
              "es-ES": es.config.GOODBYE_MESSAGE_OPTION,
              "en-US": en.config.GOODBYE_MESSAGE_OPTION
            })
            .setRequired(true)
        )
    )

    // autorole
    .addSubcommand(sub =>
      sub
        .setName("autorole")
        .setDescription(en.config.AUTOROLE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.AUTOROLE_SUB,
          "es-ES": es.config.AUTOROLE_SUB,
          "en-US": en.config.AUTOROLE_SUB
        })
        .addRoleOption(opt =>
          opt
            .setName("value")
            .setDescription(en.config.AUTOROLE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.AUTOROLE_OPTION,
              "es-ES": es.config.AUTOROLE_OPTION,
              "en-US": en.config.AUTOROLE_OPTION
            })
            .setRequired(true)
        )
    )

    // show
    .addSubcommand(sub =>
      sub
        .setName("show")
        .setDescription(en.config.SHOW_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.SHOW_SUB,
          "es-ES": es.config.SHOW_SUB,
          "en-US": en.config.SHOW_SUB
        })
    )

    // disable
    .addSubcommand(sub =>
      sub
        .setName("disable")
        .setDescription(en.config.DISABLE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.DISABLE_SUB,
          "es-ES": es.config.DISABLE_SUB,
          "en-US": en.config.DISABLE_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("command")
            .setDescription(en.config.DISABLE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.DISABLE_OPTION,
              "es-ES": es.config.DISABLE_OPTION,
              "en-US": en.config.DISABLE_OPTION
            })
            .setRequired(true)
        )
    )

    // enable
    .addSubcommand(sub =>
      sub
        .setName("enable")
        .setDescription(en.config.ENABLE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.config.ENABLE_SUB,
          "es-ES": es.config.ENABLE_SUB,
          "en-US": en.config.ENABLE_SUB
        })
        .addStringOption(opt =>
          opt
            .setName("command")
            .setDescription(en.config.ENABLE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.config.ENABLE_OPTION,
              "es-ES": es.config.ENABLE_OPTION,
              "en-US": en.config.ENABLE_OPTION
            })
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;

    // só admin pode alterar config
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      const noPerm = await t(guildId, "general.NO_PERMISSION");
      return interaction.reply({ content: noPerm, flags });
    }

    const cfg = await getGuildConfig(guildId);
    const sub = interaction.options.getSubcommand();
    const val = interaction.options.get("value")?.value;

    switch (sub) {
      case "prefix": {
        cfg.prefix = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_PREFIX", { prefix: val });
        return interaction.reply({ content: msg, flags });
      }

      case "logchannel": {
        cfg.logChannelId = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_LOGCHANNEL", { channel: `<#${val}>` });
        return interaction.reply({ content: msg, flags });
      }

      case "staffrole": {
        cfg.staffRoleId = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_STAFFROLE", { role: `<@&${val}>` });
        return interaction.reply({ content: msg, flags });
      }

      case "defaultlang": {
        cfg.language = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_DEFAULTLANG", { lang: val });
        return interaction.reply({ content: msg, flags });
      }

      case "welcomechannel": {
        cfg.welcomeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_WELCOME_CHANNEL", { channel: `<#${val}>` });
        return interaction.reply({ content: msg, flags });
      }

      case "welcomemessage": {
        cfg.welcomeMessage = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_WELCOME_MESSAGE");
        return interaction.reply({ content: msg, flags });
      }

      case "goodbyechannel": {
        cfg.goodbyeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_GOODBYE_CHANNEL", { channel: `<#${val}>` });
        return interaction.reply({ content: msg, flags });
      }

      case "goodbyemessage": {
        cfg.goodbyeMessage = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_GOODBYE_MESSAGE");
        return interaction.reply({ content: msg, flags });
      }

      case "autorole": {
        cfg.autoRoleId = val;
        await saveGuildConfig(guildId, cfg);
        const msg = await t(guildId, "config.SUCCESS_AUTOROLE", { role: `<@&${val}>` });
        return interaction.reply({ content: msg, flags });
      }

      case "show": {
        const embed = new EmbedBuilder()
          .setTitle(await t(guildId, "config.SHOW_TITLE"))
          .addFields(
            { name: await t(guildId, "config.PREFIX_SUB"),      value: `\`${cfg.prefix}\``, inline: true },
            { name: await t(guildId, "config.LOGCHANNEL_SUB"),  value: cfg.logChannelId ? `<#${cfg.logChannelId}>` : "—", inline: true },
            { name: await t(guildId, "config.STAFFROLE_SUB"),   value: cfg.staffRoleId   ? `<@&${cfg.staffRoleId}>`   : "—", inline: true },
            { name: await t(guildId, "config.DEFAULTLANG_SUB"), value: cfg.language, inline: true },
            { name: await t(guildId, "config.WELCOME_CHANNEL_SUB"), value: cfg.welcomeChannelId ? `<#${cfg.welcomeChannelId}>` : "—", inline: true },
            { name: await t(guildId, "config.WELCOME_MESSAGE_SUB"), value: cfg.welcomeMessage     || "—", inline: true },
            { name: await t(guildId, "config.GOODBYE_CHANNEL_SUB"), value: cfg.goodbyeChannelId  ? `<#${cfg.goodbyeChannelId}>` : "—", inline: true },
            { name: await t(guildId, "config.GOODBYE_MESSAGE_SUB"), value: cfg.goodbyeMessage     || "—", inline: true },
            { name: await t(guildId, "config.AUTOROLE_SUB"),        value: cfg.autoRoleId        ? `<@&${cfg.autoRoleId}>`     : "—", inline: true },
            { name: await t(guildId, "config.DISABLE_SUB"),         value: cfg.disabledCommands.length
                ? cfg.disabledCommands.map(c => `• \`${c}\``).join("\n")
                : "—", inline: true }
          )
          .setColor(0x00AE86)
          .setTimestamp();

        return interaction.reply({ embeds: [embed], flags });
      }

      case "disable": {
        const cmdName = interaction.options.getString("command").toLowerCase();
        if (!interaction.client.slashCommands.has(cmdName)) {
          const errMsg = await t(guildId, "config.INVALID_COMMAND");
          return interaction.reply({ content: errMsg, flags });
        }
        if (!cfg.disabledCommands.includes(cmdName)) {
          cfg.disabledCommands.push(cmdName);
          await saveGuildConfig(guildId, cfg);
        }
        const okMsg = await t(guildId, "config.SUCCESS_DISABLE", { command: cmdName });
        return interaction.reply({ content: okMsg, flags });
      }

      case "enable": {
        const cmdName = interaction.options.getString("command").toLowerCase();
        if (!interaction.client.slashCommands.has(cmdName)) {
          const errMsg = await t(guildId, "config.INVALID_COMMAND");
          return interaction.reply({ content: errMsg, flags });
        }
        cfg.disabledCommands = cfg.disabledCommands.filter(c => c !== cmdName);
        await saveGuildConfig(guildId, cfg);
        const okMsg = await t(guildId, "config.SUCCESS_ENABLE", { command: cmdName });
        return interaction.reply({ content: okMsg, flags });
      }
    }
  }
};
