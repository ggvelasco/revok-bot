// events/messageCreate.js
const { getGuildConfig } = require('../stores/guildConfigStore');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    // ignora DMs e bots
    if (!message.guild || message.author.bot) return;

    // obtém prefixo do config (ou usa '!')
    const { prefix = '!' } = await getGuildConfig(message.guild.id);

    // verifica prefixo
    if (!message.content.startsWith(prefix)) return;

    // separa comando e args
    const args = message.content.slice(prefix.length).trim().split(/\s+/);
    const cmdName = args.shift().toLowerCase();

    // executa comando de prefixo registrado
    const cmd = message.client.prefixCommands.get(cmdName);
    if (!cmd) return;

    try {
      await cmd.execute(message, args);
    } catch (err) {
      console.error('[PREFIX CMD]', err);
      message.reply('❌ Ocorreu um erro ao executar o comando.');
    }
  }
};
