// commands/slash/mute.js
const { SlashCommandBuilder, ChannelType, PermissionsBitField, EmbedBuilder } = require('discord.js');
const { moderateUser, PermissionError } = require('../../services/moderationService');
const { t } = require('../../utils/i18n');
const pt = require('../../locales/pt.json');
const en = require('../../locales/en.json');
const es = require('../../locales/es.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription(en.mod.mute.DESCRIPTION)
    .setDescriptionLocalizations({
      'pt-BR': pt.mod.mute.DESCRIPTION,
      'en-US': en.mod.mute.DESCRIPTION,
      'es-ES': es.mod.mute.DESCRIPTION
    })
    .addUserOption(opt =>
      opt.setName('user')
         .setDescription(en.mod.mute.USER_OPTION)
         .setDescriptionLocalizations({
           'pt-BR': pt.mod.mute.USER_OPTION,
           'en-US': en.mod.mute.USER_OPTION,
           'es-ES': es.mod.mute.USER_OPTION
         })
         .setRequired(true)
    )
    .addIntegerOption(opt =>
      opt.setName('duration')
         .setDescription(en.mod.mute.DURATION_OPTION)
         .setDescriptionLocalizations({
           'pt-BR': pt.mod.mute.DURATION_OPTION,
           'en-US': en.mod.mute.DURATION_OPTION,
           'es-ES': es.mod.mute.DURATION_OPTION
         })
    )
    .addStringOption(opt =>
      opt.setName('unit')
         .setDescription(en.mod.mute.UNIT_OPTION)
         .setDescriptionLocalizations({
           'pt-BR': pt.mod.mute.UNIT_OPTION,
           'en-US': en.mod.mute.UNIT_OPTION,
           'es-ES': es.mod.mute.UNIT_OPTION
         })
         .addChoices(
           { name: pt.mod.mute.UNIT_MINUTE, value: 'minutes' },
           { name: pt.mod.mute.UNIT_HOUR,   value: 'hours'   },
           { name: pt.mod.mute.UNIT_DAY,    value: 'days'    }
         )
    )
    .addStringOption(opt =>
      opt.setName('reason')
         .setDescription(en.mod.mute.REASON_OPTION)
         .setDescriptionLocalizations({
           'pt-BR': pt.mod.mute.REASON_OPTION,
           'en-US': en.mod.mute.REASON_OPTION,
           'es-ES': es.mod.mute.REASON_OPTION
         })
    ),

  async execute(interaction) {
    const flags = 1 << 6;
    const guildId = interaction.guild.id;

    // Permissão
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
      return interaction.reply({ content: t(guildId, 'mod.mute.NO_PERM'), flags });
    }

    const member   = interaction.options.getMember('user');
    const duration = interaction.options.getInteger('duration');
    const unit     = interaction.options.getString('unit');
    const reason   = interaction.options.getString('reason') || t(guildId, 'mod.mute.REASON_UNSPECIFIED');

    // Se forneceu duração mas não a unidade
    if (duration != null && !unit) {
      return interaction.reply({ content: t(guildId, 'mod.mute.UNSPECIFY_UNIT'), flags });
    }

    // Toggle desmute
    if (!duration) {
      const isTimedOut = member.communicationDisabledUntilTimestamp &&
        member.communicationDisabledUntilTimestamp > Date.now();

      if (!isTimedOut) {
        return interaction.reply({ content: t(guildId, 'mod.mute.UNSPECIFY_DURATION'), flags });
      }

      try {
        const embed = await moderateUser({
          interaction,
          action: 'timeout',
          target: member,
          options: { ms: null, reason },
          localeKeys: {
            titleKey: 'mod.mute.EMBED_TITLE_UNMUTE',
            fields: [
              { nameKey: 'mod.mute.FIELD_USER',      value: member.user.tag },
              { nameKey: 'mod.mute.FIELD_MODERATOR', value: interaction.user.tag },
              { nameKey: 'mod.mute.FIELD_REASON',    value: reason, inline: false }
            ]
          }
        });

        await interaction.reply({ content: t(guildId, 'mod.mute.UNMUTED', { user: member.user.tag }), flags });
        const logCh = interaction.guild.channels.cache.find(ch =>
          ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
        );
        if (logCh) await logCh.send({ embeds: [embed] });

      } catch (err) {
        if (err instanceof PermissionError) {
          return interaction.reply({ content: err.message, flags });
        }
        console.error('[MUTE]', err);
        return interaction.reply({ content: t(guildId, 'general.ERR_INTERNAL'), flags });
      }
      return;
    }

    // Cálculo de ms para mute
    const multipliers = { minutes: 60_000, hours: 3_600_000, days: 86_400_000 };
    const ms = multipliers[unit] * duration;
    const unitKey = duration === 1
      ? `UNIT_${unit.toUpperCase().slice(0, -1)}`
      : `UNIT_${unit.toUpperCase()}`;

    try {
      const embed = await moderateUser({
        interaction,
        action: 'timeout',
        target: member,
        options: { ms, reason },
        localeKeys: {
          titleKey: 'mod.mute.EMBED_TITLE_MUTE',
          fields: [
            { nameKey: 'mod.mute.FIELD_USER',      value: member.user.tag },
            { nameKey: 'mod.mute.FIELD_MODERATOR', value: interaction.user.tag },
            { 
              nameKey: 'mod.mute.FIELD_DURATION', 
              value: `${duration} ${t(guildId, `mod.mute.${unitKey}`)}`, 
              inline: true 
            },
            { nameKey: 'mod.mute.FIELD_REASON',    value: reason, inline: false }
          ]
        }
      });

      await interaction.reply({
        content: t(guildId, 'mod.mute.SUCCESS', {
          user: member.user.tag,
          duration,
          unitLabel: t(guildId, `mod.mute.${unitKey}`)
        }),
        flags
      });

      const logCh = interaction.guild.channels.cache.find(ch =>
        ch.name === 'mod-logs' && ch.type === ChannelType.GuildText
      );
      if (logCh) await logCh.send({ embeds: [embed] });

    } catch (err) {
      if (err instanceof PermissionError) {
        return interaction.reply({ content: err.message, flags });
      }
      console.error('[MUTE]', err);
      return interaction.reply({ content: t(guildId, 'general.ERR_INTERNAL'), flags });
    }
  }
};
