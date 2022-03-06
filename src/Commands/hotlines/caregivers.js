const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'caregiverlines',
    aliases: ['cgl'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Care Giver Hotlines ")
        .addFields(
        {name: 'Elder Care Locator', value: '1-800-677-1116'},
        {name: 'Well Spouse Foundation', value: '1-800-838-0879'}
        )
        .setColor("GREEN")

        message.channel.send({embeds:[embed]})
  }
})