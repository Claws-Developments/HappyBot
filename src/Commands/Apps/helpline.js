const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: "helpline",
    aliases: ['hl'],
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const helpLine = new Discord.MessageEmbed()

        .setTitle("Suicide Helpline")
        .setColor("PURPLE")
        .setDescription("π¦πΊ Australia \n```Call 131114``` \nπ¨π¦ Canada \n```Call 1 (833) 456 4566``` \nπΏπ¦ South Africa \n```Call 0514445691``` \nπ¬π§ United Kingdom \n```Call 0800 689 5652``` \nπΊπΈ United States \n```Call (800) 273-8255``` \nπΊπ³ Other \nhttps://www.opencounseling.com/suicide-hotlines")
        .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/939213492911763556/image-removebg-preview_53.png")
        .setTimestamp()

        message.channel.send({embeds: [helpLine]})
    }
})