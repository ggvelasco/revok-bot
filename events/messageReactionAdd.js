const { listRoles } = require('../services/reactionRoleService');

module.exports = {
  name: 'messageReactionAdd',
  async execute(reaction, user) {
    // evita bots e DMs
    if (user.bot || !reaction.message.guild) return;

    // garante que partial seja buscada
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (err) {
        console.error('Erro ao fetch reaction partial:', err);
        return;
      }
    }

    // montando a chave com emoji.name (unicode ou custom.name)
    const key = `${reaction.message.id}-${reaction.emoji.name}`;
    const roles = await listRoles(reaction.message.guild.id);
    const roleId = roles[key];

    // nada configurado para essa combinação
    if (!roleId) return;

    try {
      const member = await reaction.message.guild.members.fetch(user.id);
      await member.roles.add(roleId);
      console.log(`✅ Atribuído cargo ${roleId} para ${user.tag} via reação ${reaction.emoji.name}`);
    } catch (err) {
      console.error('❌ Falha ao adicionar cargo:', err);
    }
  }
};
