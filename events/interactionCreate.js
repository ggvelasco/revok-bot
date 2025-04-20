// events/interactionCreate.js
const { PermissionsBitField } = require('discord.js');
const { getStore, saveStore } = require('../stores/ticketStore');
const { t } = require('../utils/i18n');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    const flags = 1 << 6; // sempre efêmero via flags

    // ─── Fechar Ticket via Botão ──────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('close_ticket_')) {
      await interaction.deferReply({ flags });
      const guildId = interaction.guild.id;
      const id = interaction.customId.split('close_ticket_')[1];

      // carrega store e valida
      const store = await getStore();
      const entry = store.data[id];
      if (!entry || entry.channelId !== interaction.channel.id) {
        return interaction.editReply({ content: t(guildId, 'ticket.ERR_NOT_CHANNEL'), flags });
      }

      // só permitidos: autor do ticket ou quem gerencia canais
      const member = interaction.member;
      if (
        interaction.user.id !== entry.userId &&
        !member.permissions.has(PermissionsBitField.Flags.ManageChannels)
      ) {
        return interaction.editReply({ content: t(guildId, 'general.NO_PERMISSION'), flags });
      }

      // remove e salva
      delete store.data[id];
      await saveStore(store);

      // responder e deletar canal
      await interaction.editReply({ content: t(guildId, 'ticket.REPLY_CLOSED', { id }), flags });
      return interaction.channel.delete().catch(() => {});
    }

    // ─── Slash Commands ────────────────────────────────────
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.slashCommands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error('[INTERACTION] Error:', err);
      const guildId = interaction.guild?.id;
      const reply = { content: t(guildId, 'general.ERR_INTERNAL'), flags };
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply(reply);
      } else {
        await interaction.reply(reply);
      }
    }
  }
};
