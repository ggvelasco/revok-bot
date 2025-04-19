module.exports = {
    name: 'messageCreate',
    async execute(message) {
      if (!message.guild || message.author.bot) return;
      const prefix = '!';
      if (!message.content.startsWith(prefix)) return;
  
      const [cmdName, ...args] = message.content.slice(prefix.length).trim().split(/\s+/);
      const command = message.client.prefixCommands.get(cmdName);
      if (!command) return;
  
      try {
        await command.execute(message, args);
      } catch {
        message.reply('Erro ao executar comando de prefixo.');
      }
    }
  };
  