// events/interactionCreate.js
const {
  ActionRowBuilder,
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');
const { getStore, saveStore } = require('../stores/ticketStore');
const { getGuildConfig }      = require('../stores/guildConfigStore');
const { t }                   = require('../utils/i18n');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    const guildId = interaction.guild?.id;

    // ————————————————————————————————————— Autocomplete —————————————————————————————————————
    if (interaction.isAutocomplete()) {
      const focused = interaction.options.getFocused();
      const choices = [...interaction.client.slashCommands.keys()];
      const filtered = choices.filter(cmd => cmd.startsWith(focused)).slice(0, 25);
      return interaction.respond(filtered.map(name => ({ name, value: name })));
    }

    // ————————————————————————————————————— Botões —————————————————————————————————————
    if (interaction.isButton()) {
      // identifica nosso botão de fechar ticket
      const match = interaction.customId.match(/^close_ticket_(\d+)$/);
      if (!match) return; // não é um botão nosso
      const ticketId = match[1];

      // carrega store e verifica se existe um ticket aberto com aquele ID no canal
      const store = await getStore();
      const entry = Object.entries(store.data)
        .find(([id, t]) =>
          id === ticketId && t.guildId === guildId && t.channelId === interaction.channel.id
        );

      if (!entry) {
        return interaction.reply({
          content: t(guildId, 'ticket.ERR_NOT_CHANNEL'),
          flags: 1 << 6
        });
      }

      // remove do store e salva
      delete store.data[ticketId];
      await saveStore(store);

      // confirma e deleta o canal
      await interaction.reply({
        content: t(guildId, 'ticket.REPLY_CLOSED', { id: ticketId }),
        flags: 1 << 6
      });
      return interaction.channel.delete().catch(() => {});
    }

    // —————————————————————————————————— Slash Commands ——————————————————————————————————
    if (!interaction.isChatInputCommand()) return;

    const cfg = await getGuildConfig(guildId);

    // bloqueia comandos desativados
    if (cfg.disabledCommands.includes(interaction.commandName)) {
      return interaction.reply({
        content: t(guildId, 'config.COMMAND_DISABLED', { command: interaction.commandName }),
        flags: 1 << 6
      });
    }

    const command = interaction.client.slashCommands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error('[INTERACTION]', err);
      if (!interaction.replied) {
        await interaction.reply({
          content: t(guildId, 'general.ERR_INTERNAL'),
          flags: 1 << 6
        });
      }
    }
  }
};
