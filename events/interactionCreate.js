// events/interactionCreate.js
const { ActionRowBuilder, ButtonStyle } = require('discord.js');
const { getGuildConfig }                = require('../stores/guildConfigStore');
const { t }                              = require('../utils/i18n');
const {
  getTicketByChannel,
  closeTicketByChannel
} = require('../stores/ticketStore');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    const guildId = interaction.guild?.id;

    // ─── Botões de fechar ticket ───
    if (interaction.isButton()) {
      const m = interaction.customId.match(/^close_ticket_(\d+)$/);
      if (m) {
        const ticketId = parseInt(m[1], 10);
        const ticket   = await getTicketByChannel(interaction.channel.id);
        if (!ticket || ticket.id !== ticketId) {
          return interaction.reply({
            content: t(guildId, 'ticket.ERR_NOT_CHANNEL'),
            flags: 1 << 6
          });
        }
        await closeTicketByChannel(interaction.channel.id);
        await interaction.reply({
          content: t(guildId, 'ticket.REPLY_CLOSED', { id: String(ticket.id).padStart(4,'0') }),
          flags: 1 << 6
        });
        return interaction.channel.delete().catch(() => {});
      }
    }

    // ─── Slash Commands ───
    if (!interaction.isChatInputCommand()) return;
    const cfg = await getGuildConfig(guildId);

    // bloqueia comandos desativados
    if (cfg.disabledCommands.includes(interaction.commandName)) {
      return interaction.reply({
        content: t(guildId, 'config.COMMAND_DISABLED', { command: interaction.commandName }),
        flags: 1 << 6
      });
    }

    const cmd = interaction.client.slashCommands.get(interaction.commandName);
    if (!cmd) return;
    try {
      await cmd.execute(interaction);
    } catch (err) {
      console.error('[INTERACTION ERROR]', err);
      if (!interaction.replied) {
        await interaction.reply({
          content: t(guildId, 'general.ERR_INTERNAL'),
          flags: 1 << 6
        });
      }
    }
  }
};
