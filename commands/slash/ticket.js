// commands/slash/ticket.js
const {
  SlashCommandBuilder,
  ChannelType,
  PermissionsBitField
} = require('discord.js');
const { getStore, saveStore } = require('../../stores/ticketStore');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Sistema de tickets de suporte')
    .addSubcommand(sub =>
      sub
        .setName('open')
        .setDescription('Abre um novo ticket')
        .addStringOption(opt =>
          opt
            .setName('subject')
            .setDescription('Motivo do ticket')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub.setName('close').setDescription('Fecha o ticket atual')
    ),

  async execute(interaction) {
    const flags   = 1 << 6;                  // resposta efêmera
    const guildId = interaction.guild.id;
    const userId  = interaction.user.id;
    const sub     = interaction.options.getSubcommand();

    // carrega o store
    const store = await getStore();
    // inicializa se ainda não existe
    if (!store.nextId) store.nextId = 1;
    if (!store.data)  store.data  = {};

    if (sub === 'open') {
      // checa se já há ticket aberto
      const already = Object.values(store.data).find(t =>
        t.guildId === guildId && t.userId === userId
      );
      if (already) {
        return interaction.reply({ content: 'Você já tem um ticket aberto.', flags });
      }

      // 1) gere um ID único
      const id = store.nextId++;
      // ainda não temos channelId; só persistimos depois de criar o canal

      const subject = interaction.options.getString('subject');

      // 2) crie o canal usando esse ID
      const channelName = `ticket-${String(id).padStart(4,'0')}`;
      const channel = await interaction.guild.channels.create({
        name: channelName,
        type: ChannelType.GuildText,
        permissionOverwrites: [
          { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.ViewChannel] },
          { id: userId,                                  allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] },
          { id: process.env.STAFF_ROLE_ID,               allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] }
        ]
      });

      // 3) armazene no JSON com channelId e ID
      store.data[id] = {
        guildId,
        userId,
        channelId: channel.id,
        subject,
        openedAt: Date.now()
      };
      await saveStore(store);

      // 4) responda e mande a mensagem no canal
      await interaction.reply({ content: `✅ Ticket #${id} aberto: ${channel}`, flags });
      return channel.send(`📩 Ticket #${id} criado por ${interaction.user}. Assunto: **${subject}**`);
    }

    // CLOSE
    // fecha pelo canal atual
    const entry = Object.entries(store.data).find(([, t]) => t.channelId === interaction.channelId);
    if (!entry) {
      return interaction.reply({ content: 'Este canal não é um ticket válido.', flags });
    }
    const [closeId] = entry;

    // remova e salve
    delete store.data[closeId];
    await saveStore(store);

    // responda rápido
    await interaction.reply({ content: `✅ Ticket #${closeId} fechado.`, flags });
    // delete o canal imediatamente
    return interaction.channel.delete().catch(() => {});
  }
};
