const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'cancerlines',
    aliases: ['cl'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Cancer Hotlines ")
        .addFields(
        {name: 'American Cancer Society', value: '1-800-227-2345'},
        {name: 'National Cancer institute', value: '1-800-422-6237'}
        )
        .setColor("GREEN")

        message.channel.send({embeds:[embed]})
  }
})