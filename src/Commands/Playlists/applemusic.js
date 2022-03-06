const { Client, Discord } = require("discord.js")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = new Command({
  name: 'applemusic',
  description: 'Apple Music Playlists',
  permission: 'SEND_MESSAGES',

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Calming Apple Music Playlists <:apple_music:932683949489135666> ")
        .setDescription("`There should be a button presented below which should be labeled` **Apple Music Playlists** \n`Once you click the button, it'll redirect you to a 'website' which will present you with some` **calming playlists**")
        .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/932361735652913193/images.png")
        .setColor("LUMINOUS_VIVID_PINK")

    const applemusic = new MessageButton()
        .setLabel('Apple Music Playlists')
        .setURL("https://music.apple.com/")
        .setStyle('LINK')

    const row = new MessageActionRow()
        .addComponents([applemusic])

        message.channel.send({embeds:[embed], components : [row]})
  }
})