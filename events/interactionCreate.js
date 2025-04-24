// events/interactionCreate.js
const { AutocompleteInteraction, ButtonInteraction } = require("discord.js");
const { getGuildConfig } = require("../stores/guildConfigStore");
const {
  getTicketByChannel,
  closeTicketByChannel,
} = require("../stores/ticketStore");
const { t } = require("../utils/i18n");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const guildId = interaction.guild?.id;
    const flags = 1 << 6; // resposta ephemerally

    // ─── Autocomplete ───────────────────────────────────────────────────────
    if (interaction.isAutocomplete()) {
      const focused = interaction.options.getFocused();
      const choices = [...interaction.client.slashCommands.keys()];
      const filtered = choices
        .filter((cmd) => cmd.startsWith(focused))
        .slice(0, 25);
      return interaction.respond(
        filtered.map((name) => ({ name, value: name }))
      );
    }

    // ─── Botão “Fechar Ticket” ───────────────────────────────────────────────
    if (interaction.isButton()) {
      const match = interaction.customId.match(/^close_ticket_(\d+)$/);
      if (!match) return; // não é nosso botão

      const ticketId = Number(match[1]);
      // busca no banco
      const ticket = await getTicketByChannel(interaction.channel.id);

      // valida existência
      if (!ticket || ticket.id !== ticketId) {
        return interaction
          .reply({ content: t(guildId, "ticket.ERR_NOT_CHANNEL"), flags })
          .catch(console.error);
      }

      // fecha no banco
      await closeTicketByChannel(interaction.channel.id);

      // confirma para quem clicou
      const text = await t(guildId, "ticket.REPLY_CLOSED", {
        id: String(ticketId).padStart(4, "0"),
      });
      await interaction.reply({ content: text, flags }).catch(console.error);

      // apaga o canal após 500ms
      setTimeout(() => {
        interaction.channel.delete().catch(console.error);
      }, 500);

      return;
    }

    // ─── Slash-Commands ─────────────────────────────────────────────────────
    if (!interaction.isChatInputCommand()) return;

    // bloqueio de comandos desativados
    const cfg = await getGuildConfig(guildId);
    if (cfg.disabledCommands.includes(interaction.commandName)) {
      return interaction
        .reply({
          content: t(guildId, "config.COMMAND_DISABLED", {
            command: interaction.commandName,
          }),
          flags,
        })
        .catch(console.error);
    }

    const cmd = interaction.client.slashCommands.get(interaction.commandName);
    if (!cmd) return;

    try {
      await cmd.execute(interaction);
    } catch (err) {
      console.error("[INTERACTION ERROR]", err);
      if (!interaction.replied) {
        await interaction
          .reply({ content: t(guildId, "general.ERR_INTERNAL"), flags })
          .catch(console.error);
      }
    }
  },
};
