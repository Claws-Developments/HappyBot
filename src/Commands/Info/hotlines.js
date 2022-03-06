const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = new Command({
  name: 'hotlines',
  aliases: ['lines', 'hl', 'hottslines'],
  description: 'Shows various playlist commands',
  permission: 'SEND_MESSAGES',
  async run(message, args, client) {
    const playlistEmbed = new MessageEmbed()
        .setTitle("HotLines")
        .setDescription("The following commands will give you hotlines for various things! \n```-abortionlines``` \n```-abuselines``` \n```-suicidelines``` \n```-addictionlines``` \n```-cancerlines``` \n```-caregiverlines``` \n__**There are a lot of phone numbers on this bot. If you don’t know where to start, we suggest dialing 2-1-1 on your phone to be connected with the national human service call center. You can learn more about the [2-1-1 number](https://www.211.org/)**__ ")
        .setColor("PURPLE")
        .setFooter('YOU ARE LOVED!')
        .setTimestamp()

        message.reply({ embeds:[playlistEmbed] })
  }
})
