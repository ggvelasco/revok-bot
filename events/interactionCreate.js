// events/interactionCreate.js
const { getGuildConfig } = require('../stores/guildConfigStore');
const { t }             = require('../utils/i18n');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    // ————————————————————————————————————— Autocomplete —————————————————————————————————————
    if (interaction.isAutocomplete()) {
      // o que o usuário já digitou no campo
      const focused = interaction.options.getFocused();
      // todas as opções possíveis (nomes de slash commands)
      const choices = [...interaction.client.slashCommands.keys()];
      // filtra pelos que começam com o texto digitado e limita a 25
      const filtered = choices
        .filter(cmd => cmd.startsWith(focused))
        .slice(0, 25);
      // responde com o array de { name, value }
      return interaction.respond(
        filtered.map(name => ({ name, value: name }))
      );
    }

    // —————————————————————————————————— Comandos de chatInput ——————————————————————————————————
    if (!interaction.isChatInputCommand()) return;

    const guildId = interaction.guild.id;
    const cfg     = await getGuildConfig(guildId);

    // bloqueia comandos desativados
    if (cfg.disabledCommands.includes(interaction.commandName)) {
      return interaction.reply({
        content: t(guildId, 'config.COMMAND_DISABLED', { command: interaction.commandName }),
        flags: 1 << 6
      });
    }

    const command = interaction.client.slashCommands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error('[INTERACTION]', err);
      return interaction.reply({
        content: t(guildId, 'general.ERR_INTERNAL'),
        flags: 1 << 6
      });
    }
  }
};
