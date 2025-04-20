const { listRoles } = require('../services/reactionRoleService');

module.exports = {
  name: 'messageReactionRemove',
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

    // mesma chave baseada em emoji.name
    const key = `${reaction.message.id}-${reaction.emoji.name}`;
    const roles = await listRoles(reaction.message.guild.id);
    const roleId = roles[key];

    if (!roleId) return;

    try {
      const member = await reaction.message.guild.members.fetch(user.id);
      await member.roles.remove(roleId);
      console.log(`🗑️ Removido cargo ${roleId} de ${user.tag} via remoção de reação ${reaction.emoji.name}`);
    } catch (err) {
      console.error('❌ Falha ao remover cargo:', err);
    }
  }
};
