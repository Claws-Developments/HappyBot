const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = new Command({
  name: 'playlists',
  aliases: ['music', 'pl', 'songs'],
  description: 'Shows various playlist commands',
  permission: 'SEND_MESSAGES',
  async run(message, args, client) {
    const playlistEmbed = new MessageEmbed()
        .setTitle("Playlists")
        .setDescription("The following commands will give you playlists \n```-spotify``` \n```-applemusic```")
        .setColor("PURPLE")
        .setTimestamp()

        message.reply({ embeds:[playlistEmbed] })
  }
})