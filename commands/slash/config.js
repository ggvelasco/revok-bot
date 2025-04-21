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

    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply({
        content: t(guildId, "general.NO_PERMISSION"),
        flags
      });
    }

    const cfg = await getGuildConfig(guildId);
    const sub = interaction.options.getSubcommand();
    // “value” só existe nos subcommands que tinham nome “value”
    const val = interaction.options.get("value")?.value;

    switch (sub) {
      case "prefix":
        cfg.prefix = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_PREFIX", { prefix: val }),
          flags
        });

      case "logchannel":
        cfg.logChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_LOGCHANNEL", {
            channel: `<#${val}>`
          }),
          flags
        });

      case "staffrole":
        cfg.staffRoleId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_STAFFROLE", {
            role: `<@&${val}>`
          }),
          flags
        });

      case "defaultlang":
        cfg.language = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_DEFAULTLANG", { lang: val }),
          flags
        });

      case "welcomechannel":
        cfg.welcomeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_WELCOME_CHANNEL", {
            channel: `<#${val}>`
          }),
          flags
        });

      case "welcomemessage":
        cfg.welcomeMessage = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_WELCOME_MESSAGE"),
          flags
        });

      case "goodbyechannel":
        cfg.goodbyeChannelId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_GOODBYE_CHANNEL", {
            channel: `<#${val}>`
          }),
          flags
        });

      case "goodbyemessage":
        cfg.goodbyeMessage = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_GOODBYE_MESSAGE"),
          flags
        });

      case "autorole":
        cfg.autoRoleId = val;
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({
          content: t(guildId, "config.SUCCESS_AUTOROLE", {
            role: `<@&${val}>`
          }),
          flags
        });

      case "show": {
        const embed = new EmbedBuilder()
          .setTitle(t(guildId, "config.SHOW_TITLE"))
          .addFields(
            { name: t(guildId, "config.PREFIX_SUB"), value: `\`${cfg.prefix}\``, inline: true },
            { name: t(guildId, "config.LOGCHANNEL_SUB"), value: cfg.logChannelId ? `<#${cfg.logChannelId}>` : "—", inline: true },
            { name: t(guildId, "config.STAFFROLE_SUB"), value: cfg.staffRoleId ? `<@&${cfg.staffRoleId}>` : "—", inline: true },
            { name: t(guildId, "config.DEFAULTLANG_SUB"), value: cfg.language, inline: true },
            { name: t(guildId, "config.WELCOME_CHANNEL_SUB"), value: cfg.welcomeChannelId ? `<#${cfg.welcomeChannelId}>` : "—", inline: true },
            { name: t(guildId, "config.WELCOME_MESSAGE_SUB"), value: cfg.welcomeMessage || "—", inline: true },
            { name: t(guildId, "config.GOODBYE_CHANNEL_SUB"), value: cfg.goodbyeChannelId ? `<#${cfg.goodbyeChannelId}>` : "—", inline: true },
            { name: t(guildId, "config.GOODBYE_MESSAGE_SUB"), value: cfg.goodbyeMessage || "—", inline: true },
            { name: t(guildId, "config.AUTOROLE_SUB"), value: cfg.autoRoleId ? `<@&${cfg.autoRoleId}>` : "—", inline: true },
            { name: t(guildId, "config.DISABLE_SUB"), value: cfg.disabledCommands.length ? cfg.disabledCommands.map(c => `• \`${c}\``).join("\n") : "—", inline: true }
          )
          .setColor(0x00AE86)
          .setTimestamp();

        return interaction.reply({ embeds: [embed], flags });
      }

      case "disable": {
        const cmd = interaction.options.getString("command").toLowerCase();
        if (!interaction.client.slashCommands.has(cmd)) {
          return interaction.reply({ content: t(guildId, "config.INVALID_COMMAND"), flags });
        }
        if (!cfg.disabledCommands.includes(cmd)) {
          cfg.disabledCommands.push(cmd);
          await saveGuildConfig(guildId, cfg);
        }
        return interaction.reply({ content: t(guildId, "config.SUCCESS_DISABLE", { command: cmd }), flags });
      }

      case "enable": {
        const cmd = interaction.options.getString("command").toLowerCase();
        if (!interaction.client.slashCommands.has(cmd)) {
          return interaction.reply({ content: t(guildId, "config.INVALID_COMMAND"), flags });
        }
        cfg.disabledCommands = cfg.disabledCommands.filter(c => c !== cmd);
        await saveGuildConfig(guildId, cfg);
        return interaction.reply({ content: t(guildId, "config.SUCCESS_ENABLE", { command: cmd }), flags });
      }
    }
  }
};
