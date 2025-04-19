module.exports = {
    name: 'ping',
    description: 'Responde Pong! e mostra latências',
    async execute(message, args) {
      const apiLatency = Math.round(message.client.ws.ping);
      return message.reply(`🏓 Pong! API Latency: ${apiLatency} ms`);
    }
  };
  