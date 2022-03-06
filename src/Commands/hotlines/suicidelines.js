const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'suicidelines',
    aliases: ['sl'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Suicide Hotlines ")
        .addFields(
        {name: 'Suicide Hotline', value: '1-800-SUICIDE (784-2433)'},
        {name: 'Suicide Prevention Hotline', value: '1-800-827-7571'},
        {name: 'Deaf Hotline', value: '1-800-799-4TTY'},
        {name: 'Holy Spirit Teenline', value: '(717) 763-2345 or 1-800-722-5385'},
        {name: 'Crisis Intervention (Harrisburg)', value: '(717) 232-7511 or 1- 888- 596-4447'},
    )
        .setColor("GREEN")

    message.channel.send({embeds:[embed]})
     }
})