const { Client, Discord } = require("discord.js")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');

module.exports = new Command({
  name: 'spotify',
  description: 'Spotify Playlists',
  permission: 'SEND_MESSAGES',

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Calming Spotify Playlists <:spotify:932200973521281024> ")
        .setDescription("`There should be a button presented below which should be labeled` **Spotify Playlists** \n`Once you click the button, it'll redirect you to a 'website' which will present you with some` **calming playlists**")
        .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/932361821019574392/77hI91JrJvcBzCUEE33ypXQX4lvJaohkyLUSULoTxoRS7SyeidiawbyRBlBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAT5TfwH0z1nkuMyWMsAAAAASUVORK5CYII.png")
        .setColor("GREEN")

    const spotify = new MessageButton()
        .setLabel('Spotify Playlists')
        .setURL("https://spotify.com/")
        .setStyle('LINK')

    const row = new MessageActionRow()
        .addComponents([spotify])

        message.channel.send({embeds:[embed], components : [row]})
  }
})