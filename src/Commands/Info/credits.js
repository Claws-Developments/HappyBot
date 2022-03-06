const Command = require("../../Structures/Command.js");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
    name: "credits",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        const creditsEmbed = new Discord.MessageEmbed()

            .setTitle("The following users helped create the MHR project:")
            .setColor("PURPLE")
            .setDescription("Mr.Rocky \n```Lead Developer, Main Programmer and Playlists``` \Mr.Rocky \n```Information, Graphics and Playlists```")

        message.channel.send({ embeds: [creditsEmbed] })
    }

})
