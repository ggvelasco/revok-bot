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
    .setDescription(en.announce.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.announce.DESCRIPTION,
      'es-ES': es.announce.DESCRIPTION,
      'en-US': en.announce.DESCRIPTION
    })
    .addChannelOption(opt =>
      opt
        .setName('channel')
        .setDescription(en.announce.CHANNEL_DESCRIPTION)
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
        .setDescription(en.announce.MESSAGE_DESCRIPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.announce.MESSAGE_DESCRIPTION,
          'es-ES': es.announce.MESSAGE_DESCRIPTION,
          'en-US': en.announce.MESSAGE_DESCRIPTION
        })
        .setRequired(true)
    ),

  async execute(interaction) {
    const flags = 1 << 6;

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: await t(interaction.guild.id, 'general.NO_PERMISSION'),  // ✅ Correção aqui
        flags
      });
    }

    const channel = interaction.options.getChannel('channel');
    const text    = interaction.options.getString('message');

    await channel.send(text);

    return interaction.reply({
      content: await t(interaction.guild.id, 'announce.SENT', { channel: channel.toString() }),  // ✅ Correção aqui
      flags
    });
  }
};
