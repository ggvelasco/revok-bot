// commands/slash/ticket.js
const {
  SlashCommandBuilder,
  ChannelType,
  PermissionsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const { getStore, saveStore } = require("../../stores/ticketStore");
const { getGuildConfig } = require("../../stores/guildConfigStore");
const { t } = require("../../utils/i18n");
const pt = require("../../locales/pt.json");
const en = require("../../locales/en.json");
const es = require("../../locales/es.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    // fallback EN
    .setDescription(en.ticket.DESCRIPTION)
    .setDescriptionLocalizations({
      "pt-BR": pt.ticket.DESCRIPTION,
      "es-ES": es.ticket.DESCRIPTION,
      "en-US": en.ticket.DESCRIPTION,
    })
    .addSubcommand((sub) =>
      sub
        .setName("open")
        .setDescription(en.ticket.OPEN_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.ticket.OPEN_SUB,
          "es-ES": es.ticket.OPEN_SUB,
          "en-US": en.ticket.OPEN_SUB,
        })
        .addStringOption((opt) =>
          opt
            .setName("subject")
            .setDescription(en.ticket.SUBJECT_OPTION)
            .setDescriptionLocalizations({
              "pt-BR": pt.ticket.SUBJECT_OPTION,
              "es-ES": es.ticket.SUBJECT_OPTION,
              "en-US": en.ticket.SUBJECT_OPTION,
            })
            .setRequired(true)
        )
    )
    .addSubcommand((sub) =>
      sub
        .setName("close")
        .setDescription(en.ticket.CLOSE_SUB)
        .setDescriptionLocalizations({
          "pt-BR": pt.ticket.CLOSE_SUB,
          "es-ES": es.ticket.CLOSE_SUB,
          "en-US": en.ticket.CLOSE_SUB,
        })
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;
    const userId = interaction.user.id;
    const { staffRoleId } = await getGuildConfig(interaction.guild.id);

    await interaction.deferReply({ flags });

    if (!staffRoleId) {
      // Se quem chamou não é admin, diz para pedir ao admin
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.Flags.ManageRoles
        )
      ) {
        return interaction.editReply({
          content: t(guildId, "ticket.ERR_NOT_CONFIG_USER"),
          flags,
        });
      }
      // Se for admin, instrução direta
      return interaction.editReply({
        content: t(guildId, "ticket.ERR_NOT_CONFIG_ADMIN"),
        flags,
      });
    }

    const store = await getStore();
    store.nextId = store.nextId ?? 1;
    store.data = store.data ?? {};

    const sub = interaction.options.getSubcommand();

    if (sub === "open") {
      if (
        Object.values(store.data).some(
          (t) => t.guildId === guildId && t.userId === userId
        )
      ) {
        return interaction.editReply({
          content: t(guildId, "ticket.ALREADY"),
          flags,
        });
      }

      const subject = interaction.options.getString("subject");
      const id = store.nextId++;
      const name = `ticket-${String(id).padStart(4, "0")}`;

      let channel;
      try {
        channel = await interaction.guild.channels.create({
          name,
          type: ChannelType.GuildText,
          permissionOverwrites: [
            {
              id: interaction.guild.roles.everyone.id,
              deny: [PermissionsBitField.Flags.ViewChannel],
            },
            {
              id: userId,
              allow: [
                PermissionsBitField.Flags.ViewChannel,
                PermissionsBitField.Flags.SendMessages,
              ],
            },
            {
              id: staffRoleId,
              allow: [
                PermissionsBitField.Flags.ViewChannel,
                PermissionsBitField.Flags.SendMessages,
              ],
            },
          ],
        });
      } catch (err) {
        console.error("[TICKET] create channel failed", err);
        return interaction.editReply({
          content: t(guildId, "ticket.ERR_OPEN"),
          flags,
        });
      }

      store.data[id] = {
        guildId,
        userId,
        channelId: channel.id,
        subject,
        openedAt: Date.now(),
      };
      try {
        await saveStore(store);
      } catch (err) {
        console.error("[TICKET] saveStore failed", err);
        return interaction.editReply({
          content: t(guildId, "ticket.ERR_OPEN"),
          flags,
        });
      }

      const embed = new EmbedBuilder()
        .setTitle(t(guildId, "ticket.CREATE_TITLE", { id }))
        .setDescription(
          t(guildId, "ticket.CREATE_DESC", {
            user: interaction.user.toString(),
            subject,
          })
        )
        .setColor(0x00ae86)
        .setTimestamp();

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`close_ticket_${id}`)
          .setLabel(t(guildId, "ticket.BUTTON_CLOSE"))
          .setStyle(ButtonStyle.Danger)
      );

      await interaction.editReply({
        content: t(guildId, "ticket.REPLY_OPEN", {
          channel: channel.toString(),
        }),
        flags,
      });
      return channel.send({ embeds: [embed], components: [row] });
    }

    // CLOSE
    const entry = Object.entries(store.data).find(
      ([, t]) => t.channelId === interaction.channel.id
    );
    if (!entry) {
      return interaction.editReply({
        content: t(guildId, "ticket.ERR_NOT_CHANNEL"),
        flags,
      });
    }
    const [closeId] = entry;
    delete store.data[closeId];
    await saveStore(store);

    await interaction.editReply({
      content: t(guildId, "ticket.REPLY_CLOSED", { id: closeId }),
      flags,
    });
    return interaction.channel.delete().catch(() => {});
  },
};
