// commands/slash/reactionrole.js
const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const {
  addRole,
  removeRole,
  listRoles,
} = require("../../services/reactionRoleService");
const { t } = require("../../utils/i18n");
const pt = require("../../locales/pt.json");
const en = require("../../locales/en.json");
const es = require("../../locales/es.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reaction-role")
    .setDescription(en.rr.DESCRIPTION)
    .setDescriptionLocalizations({
      "pt-BR": pt.rr.DESCRIPTION,
      "es-ES": es.rr.DESCRIPTION,
      "en-US": en.rr.DESCRIPTION,
    })

    // add
    .addSubcommand((sub) =>
      sub
        .setName("add")
        .setDescription(en.rr.ADD_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.rr.ADD_SUB,
          "es-ES": es.rr.ADD_SUB,
          "en-US": en.rr.ADD_SUB,
        })
        .addStringOption((opt) =>
          opt
            .setName("message")
            .setDescription(en.rr.MSG_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.rr.MSG_OPTION,
              "es-ES": es.rr.MSG_OPTION,
              "en-US": en.rr.MSG_OPTION,
            })
            .setRequired(true)
        )
        .addStringOption((opt) =>
          opt
            .setName("emoji")
            .setDescription(en.rr.EMOJI_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.rr.EMOJI_OPTION,
              "es-ES": es.rr.EMOJI_OPTION,
              "en-US": en.rr.EMOJI_OPTION,
            })
            .setRequired(true)
        )
        .addRoleOption((opt) =>
          opt
            .setName("role")
            .setDescription(en.rr.ROLE_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.rr.ROLE_OPTION,
              "es-ES": es.rr.ROLE_OPTION,
              "en-US": en.rr.ROLE_OPTION,
            })
            .setRequired(true)
        )
    )

    // remove
    .addSubcommand((sub) =>
      sub
        .setName("remove")
        .setDescription(en.rr.REMOVE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.rr.REMOVE_SUB,
          "es-ES": es.rr.REMOVE_SUB,
          "en-US": en.rr.REMOVE_SUB,
        })
        .addStringOption((opt) =>
          opt
            .setName("message")
            .setDescription(en.rr.MSG_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.rr.MSG_OPTION,
              "es-ES": es.rr.MSG_OPTION,
              "en-US": en.rr.MSG_OPTION,
            })
            .setRequired(true)
        )
        .addStringOption((opt) =>
          opt
            .setName("emoji")
            .setDescription(en.rr.EMOJI_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.rr.EMOJI_OPTION,
              "es-ES": es.rr.EMOJI_OPTION,
              "en-US": en.rr.EMOJI_OPTION,
            })
            .setRequired(true)
        )
    )

    // list
    .addSubcommand((sub) =>
      sub
        .setName("list")
        .setDescription(en.rr.LIST_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.rr.LIST_SUB,
          "es-ES": es.rr.LIST_SUB,
          "en-US": en.rr.LIST_SUB,
        })
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;

    if (
      !interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)
    ) {
      return interaction.reply({
        content: await t(guildId, "rr.NO_MANAGE_ROLES"),
        flags,
      });
    }

    const sub = interaction.options.getSubcommand();

    if (sub === "add") {
      const messageId = interaction.options.getString("message");
      const emoji = interaction.options.getString("emoji");
      const role = interaction.options.getRole("role");

      await addRole(guildId, messageId, emoji, role.id);

      await interaction.reply({
        content: await t(guildId, "rr.ADD_SUCCESS"),
        flags,
      });

      try {
        const msg = await interaction.channel.messages.fetch(messageId);
        await msg.react(emoji);
      } catch (err) {
        console.error("❌ " + await t(guildId, "rr.ERROR_REACT"), err);
      }

    } else if (sub === "remove") {
      const messageId = interaction.options.getString("message");
      const emoji = interaction.options.getString("emoji");

      await removeRole(guildId, messageId, emoji);

      await interaction.reply({
        content: await t(guildId, "rr.REMOVE_SUCCESS"),
        flags,
      });

    } else if (sub === "list") {
      const mapping = await listRoles(guildId);
      if (!Object.keys(mapping).length) {
        return interaction.reply({
          content: await t(guildId, "rr.LIST_EMPTY"),
          flags,
        });
      }

      const msgLabel = await t(guildId, "rr.LIST_MSG_LABEL");
      const emojiLabel = await t(guildId, "rr.LIST_EMOJI_LABEL");

      const lines = Object.entries(mapping).map(([key, roleId]) => {
        const [msgId, em] = key.split("-");
        return `• ${msgLabel} ${msgId} – ${emojiLabel} ${em} → <@&${roleId}>`;
      });

      await interaction.reply({
        content: lines.join("\n"),
        flags,
      });
    }
  },
};
