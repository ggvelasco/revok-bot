// events/messageCreate.js
module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
      if (!message.guild || message.author.bot) return;
      const prefix = '!';
      if (!message.content.startsWith(prefix)) return;
      const [cmdName, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(/\s+/);
      const command = message.client.commands.get(cmdName);
      if (!command) return;
      try {
        await command.execute(message, args);
      } catch (err) {
        console.error(err);
        message.reply('❌ Erro ao executar o comando.');
      }
    }
  };
  