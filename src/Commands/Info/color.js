/** @format */

const Command = require("../../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("isomorphic-fetch");

module.exports = new Command({
  name: "color",
  aliases: ['colour'],
  description: "Shows color which the user has provided!",
  permission: "SEND_MESSAGES",
  type: "BOTH",
  slashCommandOptions: [
    {
      name: "color",
      description: "Shows color which the user has provided!",
      type: "STRING",
      required: true,
    },
  ],
  async run(message, args, client) {

    let color = args.slice(1).join(" ");
    if (color.includes("#")) {
      color = args.slice(1).join(" ").split("#")[1];
    }
    const url = `https://api.alexflipnote.dev/colour/${color}`;
    let json;
    try {
      json = await fetch(url).then((res) => res.json());
    } catch (e) {
      return message.reply("An Error Occured, Try Again Later.");
    }
    if (json.description) return message.reply("Invalid color!");
    let colorEmbed = new Discord.MessageEmbed()

      .setTitle(json.name)
      .addField("RGB", json.rgb, true)
      .addField("Hex", json.hex, true)
      .setThumbnail(json.image)
      .setImage(json.image_gradient, true)
      .setColor(json.hex)

    message.reply({ embeds: [colorEmbed] });
  },
});