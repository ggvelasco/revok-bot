// commands/slash/mute.js
const {
  SlashCommandBuilder,
  PermissionsBitField,
  EmbedBuilder,
  ChannelType
} = require('discord.js');
const { t } = require('../../utils/i18n');
const { doOrSimulate } = require('../../utils/action');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    // descrição global (fallback EN)
    .setDescription(en.mod.mute.DESCRIPTION)
    // localizações p/ client
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.mute.DESCRIPTION,
      'en-US': en.mod.mute.DESCRIPTION
    })

    .addUserOption(opt =>
      opt
        .setName('user')
        .setDescription(en.mod.mute.USER_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.mute.USER_OPTION,
          'en-US': en.mod.mute.USER_OPTION
        })
        .setRequired(true)
    )
    .addIntegerOption(opt =>
      opt
        .setName('duration')
        .setDescription(en.mod.mute.DURATION_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.mute.DURATION_OPTION,
          'en-US': en.mod.mute.DURATION_OPTION
        })
    )
    .addStringOption(opt =>
      opt
        .setName('unit')
        .setDescription(en.mod.mute.UNIT_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.mute.UNIT_OPTION,
          'en-US': en.mod.mute.UNIT_OPTION
        })
        .addChoices(
          { name: pt.mod.mute.UNIT_MINUTE,  value: 'minutes' },
          { name: pt.mod.mute.UNIT_HOUR,    value: 'hours'   },
          { name: pt.mod.mute.UNIT_DAY,     value: 'days'    }
        )
    )
    .addStringOption(opt =>
      opt
        .setName('reason')
        .setDescription(en.mod.mute.REASON_OPTION)
        .setDescriptionLocalizations({
          'pt-BR': pt.mod.mute.REASON_OPTION,
          'en-US': en.mod.mute.REASON_OPTION
        })
    ),

  async execute(interaction) {
    const guildId = interaction.guild.id;
    const flags   = 1 << 6;

    // permission check
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
      return interaction.reply({ content: t(guildId, 'mod.mute.NO_PERM'), flags });
    }

    const member   = interaction.options.getMember('user');
    const duration = interaction.options.getInteger('duration');
    const unit     = interaction.options.getString('unit');
    const reason   = interaction.options.getString('reason') 
                     || t(guildId, 'mod.mute.REASON_UNSPECIFIED');

    // toggle unmute
    const isTimedOut = 
      member.communicationDisabledUntilTimestamp &&
      member.communicationDisabledUntilTimestamp > Date.now();

    if (!duration) {
      if (!isTimedOut) {
        return interaction.reply({ content: t(guildId, 'mod.mute.UNSPECIFY_DURATION'), flags });
      }
      await doOrSimulate(
        `unmute ${member.user.tag}`,
        () => member.timeout(null, reason)
      );
      await interaction.reply({ content: t(guildId, 'mod.mute.UNMUTED', { user: member.user.tag }), flags });

      const logCh = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logCh) {
        const embed = new EmbedBuilder()
          .setTitle(t(guildId, 'mod.mute.EMBED_TITLE_UNMUTE'))
          .setColor(0x00FF00)
          .addFields(
            { name: t(guildId, 'mod.mute.FIELD_USER'),      value: member.user.tag, inline: true },
            { name: t(guildId, 'mod.mute.FIELD_MODERATOR'), value: interaction.user.tag, inline: true },
            { name: t(guildId, 'mod.mute.FIELD_REASON'),    value: reason, inline: false }
          )
          .setTimestamp();
        await logCh.send({ embeds: [embed] });
      }
      return;
    }

    // calculate ms
    const multipliers = { minutes: 60_000, hours: 3_600_000, days: 86_400_000 };
    const ms = multipliers[unit] * duration;

    await doOrSimulate(
      `mute ${member.user.tag} for ${duration} ${unit}`,
      () => member.timeout(ms, reason)
    );

    // choose unit label
    const label = duration === 1
      ? pt.mod.mute[`UNIT_${unit.toUpperCase().slice(0,-1)}`]  // UNIT_MINUTE, UNIT_HOUR, UNIT_DAY
      : pt.mod.mute[`UNIT_${unit.toUpperCase()}S`];             // UNIT_MINUTES, etc.
    // for EN, your t() will fetch appropriate; we pass label as var
    const userLabel = member.user.tag;

    await interaction.reply({
      content: t(guildId, 'mod.mute.SUCCESS', { user: userLabel, duration, unitLabel: label }),
      flags
    });

    const logCh = interaction.guild.channels.cache.find(ch =>
      ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
    );
    if (logCh) {
      const embed = new EmbedBuilder()
        .setTitle(t(guildId, 'mod.mute.EMBED_TITLE_MUTE'))
        .setColor(0x808080)
        .addFields(
          { name: t(guildId, 'mod.mute.FIELD_USER'),      value: userLabel, inline: true },
          { name: t(guildId, 'mod.mute.FIELD_MODERATOR'), value: interaction.user.tag, inline: true },
          { name: t(guildId, 'mod.mute.FIELD_DURATION'),  value: `${duration} ${label}`, inline: true },
          { name: t(guildId, 'mod.mute.FIELD_REASON'),    value: reason, inline: false }
        )
        .setTimestamp();
      await logCh.send({ embeds: [embed] });
    }
  }
};
