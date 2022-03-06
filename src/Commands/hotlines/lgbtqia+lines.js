const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'lgbtqlines',
    aliases: ['ll'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("LGBTQ+ Hotlines ")
        .addFields(
        {name: 'Helpline', value: '1-800-398-GAYS'},
        {name: 'Gay and Lesbian National Hotline', value: '1-888-843-4564'},
        {name: 'Trevor Hotline (Suicide)', value: '1-866-4-U-TREVOR'},
        )
        .setColor("GREEN")
        .setTimestamp()

        message.channel.send({embeds:[embed]})
  }
})