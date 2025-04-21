// commands/slash/announce.js
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');
const {
  SlashCommandBuilder,
  PermissionsBitField,
  ChannelType
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('announce')
    // fallback global (en)
    .setDescription(en.announce.DESCRIPTION)
    // traduções para o Discord client
    .setDescriptionLocalizations({
      'pt-BR': pt.announce.DESCRIPTION,
      'es-ES': es.announce.DESCRIPTION,
      'en-US': en.announce.DESCRIPTION
    })

    .addChannelOption(opt =>
      opt
        .setName('channel')
        // fallback
        .setDescription(en.announce.CHANNEL_DESCRIPTION)
        // localizações
        .setDescriptionLocalizations({
          'pt-BR': pt.announce.CHANNEL_DESCRIPTION,
          'es-ES': es.announce.CHANNEL_DESCRIPTION,
          'en-US': en.announce.CHANNEL_DESCRIPTION
        })
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    )

    .addStringOption(opt =>
      opt
        .setName('message')
        // fallback
        .setDescription(en.announce.MESSAGE_DESCRIPTION)
        // localizações
        .setDescriptionLocalizations({
          'pt-BR': pt.announce.MESSAGE_DESCRIPTION,
          'es-ES': es.announce.MESSAGE_DESCRIPTION,
          'en-US': en.announce.MESSAGE_DESCRIPTION
        })
        .setRequired(true)
    ),

  async execute(interaction) {
    const flags = 1 << 6;

    // permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: t(interaction.guild.id, 'general.NO_PERMISSION'),
        flags
      });
    }

    const channel = interaction.options.getChannel('channel');
    const text    = interaction.options.getString('message');

    // envia texto puro
    await channel.send(text);

    // resposta efêmera com t() e a chave certa: 'announce.SENT'
    return interaction.reply({
      content: t(interaction.guild.id, 'announce.SENT', { channel: channel.toString() }),
      flags: 1 << 6
    });
  }
};
