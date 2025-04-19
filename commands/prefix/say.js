module.exports = {
    name: 'say',
    description: 'Repete o texto fornecido',
    async execute(message, args) {
      const text = args.join(' ');
      if (!text) return message.reply('Diga algo para eu repetir!');
      message.channel.send(text);
    }
  };
  