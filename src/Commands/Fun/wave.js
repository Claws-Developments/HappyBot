const axios = require("axios");

const { MessageEmbed } = require("discord.js");

const Command = require("../../Structures/Command.js");

module.exports = new Command({
  name: "wave",
  aliases: ['hi'],
  description: "Wave to friend or members",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user = message.mentions.members.first();
    if (!user) return message.reply("**Mention a member!**");

    axios
      .get("https://api.waifu.pics/sfw/wave")
      .then((res) => {
        const embed = new MessageEmbed()
          .setTitle(`${message.author.username} waved to ${user.user.username}`)
          .setImage(res.data.url)
          .setColor("PURPLE");
        message.reply({ embeds: [embed] });
      })
      .catch((err) => {
        console.error(err);
      });
  },
});