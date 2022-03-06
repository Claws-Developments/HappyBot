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
        .setDescription("The following commands will give you hotlines for various things! \n```-abortionlines``` \n```-abuselines``` \n```-suicidelines``` ")
        .setColor("PURPLE")
        .setFooter('More hotlines coming soon!')
        .setTimestamp()

        message.reply({ embeds:[playlistEmbed] })
  }
})