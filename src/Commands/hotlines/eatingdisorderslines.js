const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'eatingdisorderlines',
    aliases: ['edl'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Eating Disorder Hotlines ")
        .addFields(
        {name: 'Eating Disorders Awareness and Prevention', value: '1-800-931-2237'},
        {name: 'Eating Disorders Center', value: '1-888-236-1188'},
        {name: 'National Association of Anorexia Nervosa and Associated Disorders', value: '1-847-831-3438'},
        {name: 'Remuda Ranch', value: '1-800-445-1900'}
        )
        .setColor("GREEN")
        .setTimestamp()

        message.channel.send({embeds:[embed]})
  }
})