// commands/slash/ticket.js
const {
  SlashCommandBuilder,
  ChannelType,
  PermissionsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');
const {
  openTicket,
  getOpenTicketForUser,
  getTicketByChannel,
  closeTicketByChannel
} = require('../../stores/ticketStore');
const { getGuildConfig } = require('../../stores/guildConfigStore');
const { t } = require('../../utils/i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Support ticket system') // fallback
    .addSubcommand(sub =>
      sub.setName('open').setDescription('Open a new ticket')
         .addStringOption(opt =>
           opt.setName('subject')
              .setDescription('Subject of your ticket')
              .setRequired(true)
         )
    )
    .addSubcommand(sub =>
      sub.setName('close').setDescription('Close this ticket')
    ),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const userId  = interaction.user.id;

    // 1) defer para podermos usar editReply()
    await interaction.deferReply({ flags: 1 << 6 });

    // 2) pega config e verifica se o sistema está configurado
    const cfg = await getGuildConfig(guildId);
    if (!cfg.staffRoleId) {
      const msg = await t(guildId, 'ticket.ERR_NOT_CONFIG_ADMIN');
      return interaction.editReply({ content: msg, flags: 1 << 6 });
    }

    const sub = interaction.options.getSubcommand();

    // ─── OPEN ─────────────────────────────
    if (sub === 'open') {
      // já existe ticket aberto?
      if (await getOpenTicketForUser(guildId, userId)) {
        const msg = await t(guildId, 'ticket.ALREADY');
        return interaction.editReply({ content: msg, flags: 1 << 6 });
      }

      const subject = interaction.options.getString('subject');

      // cria o canal temporário
      let channel;
      try {
        channel = await interaction.guild.channels.create({
          name: 'ticket-temp',
          type: ChannelType.GuildText,
          permissionOverwrites: [
            { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.ViewChannel] },
            { id: userId,                                   allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] },
            { id: cfg.staffRoleId,                          allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] }
          ]
        });
      } catch (err) {
        console.error(err);
        const msg = await t(guildId, 'ticket.ERR_OPEN');
        return interaction.editReply({ content: msg, flags: 1 << 6 });
      }

      // persiste no banco e pega o ID
      let ticket;
      try {
        ticket = await openTicket({ guildId, userId, channelId: channel.id, subject });
      } catch (err) {
        console.error(err);
        const msg = await t(guildId, 'ticket.ERR_OPEN');
        return interaction.editReply({ content: msg, flags: 1 << 6 });
      }

      // renomeia de acordo com o ID gerado
      const padded = String(ticket.id).padStart(4, '0');
      await channel.edit({ name: `ticket-${padded}` });

      // monta embed + botão
      const embed = new EmbedBuilder()
        .setTitle(await t(guildId, 'ticket.CREATE_TITLE', { id: padded }))
        .setDescription(await t(guildId, 'ticket.CREATE_DESC', {
          user: interaction.user.toString(),
          subject
        }))
        .setColor(0x00AE86)
        .setTimestamp();

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`close_ticket_${ticket.id}`)
          .setLabel(await t(guildId, 'ticket.BUTTON_CLOSE'))
          .setStyle(ButtonStyle.Danger)
      );

      // responde e envia no canal
      const replyText = await t(guildId, 'ticket.REPLY_OPEN', { channel: channel.toString() });
      await interaction.editReply({ content: replyText, flags: 1 << 6 });
      return channel.send({ embeds: [embed], components: [row] });
    }

    // ─── CLOSE ────────────────────────────
    if (sub === 'close') {
      const existing = await getTicketByChannel(interaction.channel.id);
      if (!existing) {
        const msg = await t(guildId, 'ticket.ERR_NOT_CHANNEL');
        return interaction.editReply({ content: msg, flags: 1 << 6 });
      }

      await closeTicketByChannel(interaction.channel.id);
      const padded = String(existing.id).padStart(4, '0');
      const closeMsg = await t(guildId, 'ticket.REPLY_CLOSED', { id: padded });
      await interaction.editReply({ content: closeMsg, flags: 1 << 6 });
      return interaction.channel.delete().catch(() => {});
    }
  }
};
