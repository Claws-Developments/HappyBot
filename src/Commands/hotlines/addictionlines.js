const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'addictionlines',
    aliases: ['adl'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Addiction Hotlines ")
        .addFields(
        {name: 'Marijuana Anonymous', value: '1-800-766-6779'},
        {name: 'Alcohol Treatment Referral Hotline (24 hours)', value: '1-800-252-6465'},
        {name: 'Families Anonymous', value: '1-800-736-9805'},
        {name: 'Cocaine Hotline (24 hours)', value: '1-800-262-2463'},
        {name: 'Drug Abuse National Helpline', value: '1-800-662-4357'},
        {name: 'National Association for Children of Alcoholics', value: '1-888-554-2627'},
        {name: 'Ecstasy Addiction', value: '1-800-468-6933'},
        {name: 'Alcoholics for Christ', value: '1-800-441-7877'},
        )
        .setColor("GREEN")

        message.channel.send({embeds:[embed]})
  }
})