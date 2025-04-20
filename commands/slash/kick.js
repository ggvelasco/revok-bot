// commands/slash/kick.js
const {
  SlashCommandBuilder,
  PermissionsBitField,
  EmbedBuilder,
  ChannelType
} = require('discord.js');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    // fallback EN
    .setDescription(en.mod.kick.DESCRIPTION)
    // localizações p/ client
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.kick.DESCRIPTION,
      'en-US': en.mod.kick.DESCRIPTION
    })

    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription(en.mod.kick.USER_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.kick.USER_OPTION,
          'en-US': en.mod.kick.USER_OPTION
        })
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription(en.mod.kick.REASON_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.kick.REASON_OPTION,
          'en-US': en.mod.kick.REASON_OPTION
        })
    ),

  async execute(interaction) {
    const flags   = 1 << 6;
    const guildId = interaction.guild.id;

    // permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return interaction.reply({ content: t(guildId, 'mod.kick.NO_PERM'), flags });
    }

    const target = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason') || t(guildId, 'mod.kick.REASON_UNSPECIFIED');

    // verifica se pode kickar
    if (!target.kickable) {
      return interaction.reply({ content: t(guildId, 'mod.kick.CANNOT_KICK'), flags });
    }

    // executa o kick
    await target.kick(reason);

    // resposta ao invocador
    await interaction.reply({
      content: t(guildId, 'mod.kick.SUCCESS', { user: target.user.tag }),
      flags
    });

    // log em #mod-logs
    const logChannel = interaction.guild.channels.cache.find(ch =>
      ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
    );
    if (logChannel) {
      const embed = new EmbedBuilder()
        .setTitle(t(guildId, 'mod.kick.EMBED_TITLE'))
        .setColor(0xFFA500)
        .addFields(
          { name: t(guildId, 'mod.kick.FIELD_USER'),      value: target.user.tag, inline: true },
          { name: t(guildId, 'mod.kick.FIELD_MODERATOR'), value: interaction.user.tag, inline: true },
          { name: t(guildId, 'mod.kick.FIELD_REASON'),    value: reason,             inline: false }
        )
        .setTimestamp();
      await logChannel.send({ embeds: [embed] });
    }
  }
};
