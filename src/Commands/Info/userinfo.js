/** @format */

const Command = require("../../Structures/Command.js");

const moment = require("moment");

const { MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = new Command({
  name: "userinfo",
  aliases: ['whois', 'who', 'info'],
  description: "Shows info about the user.",
  permission: "SEND_MESSAGES",
  aliases: ["whois", "who"],
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "user",
      description: "Shows avatar of a user.",
      type: "USER",
      required: true,
    },
  ],
  async run(message, args, client) {
    const Target =
      message instanceof CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === args[1]) ||
          message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.mentions.members.first() || message.member;
    const member =
      message instanceof CommandInteraction
        ? message.guild.members.cache.find((m) => m.id === message.user.id)
        : message.member;

    let userRoles = Target.roles.cache
      .map((x) => x)
      .filter((z) => z.name !== "@everyone");

    if (userRoles.length > 100) {
      userRoles = "More than 100";
    }

    let safe = member.user.createdTimestamp;

    if (safe > 604800017) {
      safe = "`Not Suspicious` <:online:882619394138726463>";
    } else {
      safe = "`Suspicious` <:dnd:882619423171706910>";
    }

    let status;
    switch (Target.presence.status) {
      case "online":
        status = "<:online:882619394138726463> Online";
        break;
      case "dnd":
        status = "<:dnd:882619423171706910> DND [Do Not Disturb]";
        break;
      case "idle":
        status = "<:idle:882619464280051724> Idle";

        break;
      case "offline":
        status = "<:offline:882619499281522689> Offline";
        break;
    }

    let nitroBadge = Target.user.avatarURL({ dynamic: true });
    let flags = Target.user.flags.toArray().join(``);

    if (!flags) {
      flags = "None";
    }

    flags = flags.replace(
      "HOUSE_BRAVERY",
      "• <:house_bravery:800714032377102336> `HypeSquad Bravery`"
    );
    flags = flags.replace(
      "EARLY_SUPPORTER",
      "• <:early_nitro_supporter:800712762031341568> `Early Supporter`"
    );
    flags = flags.replace(
      "VERIFIED_DEVELOPER",
      "• <:bot_developer:882926707424755723>  `Verified Bot Developer`"
    );
    flags = flags.replace(
      "EARLY_VERIFIED_DEVELOPER",
      "• <:bot_developer:882926707424755723> `Verified Bot Developer`"
    );
    flags = flags.replace(
      "HOUSE_BRILLIANCE",
      "• <:house_brilliance:800713515157159947> `HypeSquad Brilliance`"
    );
    flags = flags.replace(
      "HOUSE_BALANCE",
      "• <:house_balance:800713663908282430> `HypeSquad Balance`"
    );
    flags = flags.replace(
      "DISCORD_PARTNER",
      "• <:DiscordPartner:891695920616448012> `Partner`"
    );
    flags = flags.replace(
      "HYPESQUAD_EVENTS",
      "• <:hypesquad_member:800714727977648138> `Hypesquad Events`"
    );
    flags = flags.replace(
      "DISCORD_CLASSIC",
      "• <:discord_nitro_1:901132808020443166> `Discord Classic`"
    );

    if (nitroBadge.includes("gif")) {
      flags =
        flags +
        `
              • <:nitro_booster:797065188221517825> \`Nitro\``;
    }

    let stat = Target.presence.activities[0];
    let custom;

    if (Target.presence.activities.some((r) => r.name === "Spotify")) {
      custom = "Listening to Spotify";
    } else if (stat && stat.name !== "Custom Status") {
      custom = stat.name;
    } else {
      custom = "None";
    }

    if (
      Target.presence.activities.some((r) => r.name !== "Spotify") &&
      stat &&
      stat.state !== null
    ) {
      stat = stat.state;
    } else {
      stat = "None";
    }

    const embeddd = new MessageEmbed()
      .setColor(`PURPLE`)
      .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
      .setDescription(
        `__**User Info**__
              **•** \`ID:\` **${Target.id}**
              **•** \`Profile:\` **${Target}**
              **•** \`Current status:\` **${status}**
              **•** \`Bot:\` **${Target.user.bot ? "Yes" : "No"}**
              **•** \`Created At:\` **${moment(Target.user.createdAt).format(
                "MMMM Do YYYY, H:mm:ss a"
              )}**
              __**Member Info**__
              **•** \`Nickname:\` **${
                Target.displayName ? Target.displayName : "yok"
              } **
              **•** \`Joined At:\` **${moment(Target.joinedAt).format(
                "MMMM Do YYYY, H:mm:ss a"
              )}**
              **•** \`Activity:\` **${custom}**
              __**Roles:**__
              ${userRoles}
              __**Badge Information**__
              ${flags} 
              
              __**Suspicious Check**__
              • ${safe}`
      )
      .setThumbnail(Target.user.avatarURL({ dynamic: true }))
      .setTimestamp();

    message.reply({ embeds: [embeddd] });
  },
});