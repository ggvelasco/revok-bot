// commands/slash/reactionrole.js
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { addRole, removeRole, listRoles } = require('../../services/reactionRoleService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reaction-role')
    .setDescription('Gerencia Reaction‑Roles')
    .addSubcommand(sub =>
      sub
        .setName('add')
        .setDescription('Adiciona um cargo por reação')
        .addStringOption(opt =>
          opt
            .setName('message')
            .setDescription('ID da mensagem')
            .setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('emoji')
            .setDescription('Emoji (unicode ou custom)')
            .setRequired(true)
        )
        .addRoleOption(opt =>
          opt
            .setName('role')
            .setDescription('Cargo a ser atribuído')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('remove')
        .setDescription('Remove uma Reaction‑Role')
        .addStringOption(opt =>
          opt
            .setName('message')
            .setDescription('ID da mensagem')
            .setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('emoji')
            .setDescription('Emoji')
            .setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub
        .setName('list')
        .setDescription('Lista todas as Reaction‑Roles do servidor')
    ),

  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return interaction.reply({ content: 'Você precisa de Manage Roles.', flags: 1 << 6 });
    }

    const guildId = interaction.guild.id;
    const sub = interaction.options.getSubcommand();

    if (sub === 'add') {
      const messageId = interaction.options.getString('message');
      const emoji     = interaction.options.getString('emoji');
      const role      = interaction.options.getRole('role');

      // 1) registra no store
      await addRole(guildId, messageId, emoji, role.id);

      // 2) responde imediatamente para não expirar
      await interaction.reply({ content: '✅ Reaction‑Role configurada!', flags: 1 << 6 });

      // 3) faz fetch e adiciona a reação
      try {
        const msg = await interaction.channel.messages.fetch(messageId);
        await msg.react(emoji);
      } catch (err) {
        console.error('Não consegui adicionar a reação:', err);
      }

    } else if (sub === 'remove') {
      const messageId = interaction.options.getString('message');
      const emoji     = interaction.options.getString('emoji');

      await removeRole(guildId, messageId, emoji);
      await interaction.reply({ content: '🗑️ Reaction‑Role removida.', flags: 1 << 6 });

    } else if (sub === 'list') {
      const mapping = await listRoles(guildId);
      if (!Object.keys(mapping).length) {
        return interaction.reply({ content: 'Nenhuma Reaction‑Role configurada.', flags: 1 << 6 });
      }

      const lines = Object.entries(mapping).map(([key, roleId]) => {
        const [msgId, em] = key.split('-');
        return `• Msg: ${msgId} – Emoji: ${em} → <@&${roleId}>`;
      });
      await interaction.reply({ content: lines.join('\n'), flags: 1 << 6 });
    }
  }
};
