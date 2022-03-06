const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'abuselines',
    aliases: ['al'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Abuse Hotlines ")
        .addFields(
        {name: 'National Sexual Assault Hotline', value: '1-800-656-HOPE (4673)'},
        {name: 'Stop it Now!', value: '1-888-PREVENT'},
        {name: 'United States Elder Abuse Hotline', value: '1-866-363-4276'},
        {name: 'National Child Abuse Hotline', value: '1-800-4-A-CHILD (422-4453)'},
        {name: 'Child Abuse Hotline / Dept of Social Services', value: '1-800-342-3720'},
        {name: 'Child Abuse National Hotline', value: '1-800-25ABUSE'},
        {name: 'Children in immediate danger', value: '1-800-THE-LOST'},
        {name: 'Exploitation of Children', value: ' 1-800-843-5678'},
        {name: 'Missing Children Help Center', value: '1-800-872-5437'}
    )
        .setColor("GREEN")

        message.channel.send({embeds:[embed]})
  }
})