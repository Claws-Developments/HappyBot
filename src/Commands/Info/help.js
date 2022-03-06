const Discord = require('discord.js');

const Command = require("../../Structures/Command.js");

const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');


module.exports = new Command({
    name: "help",
    description: "shows a list of command",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed()
        .setDescription("**Hello!**\nThank you for inviting me to your server\nMy prefix is `-`\nI am here to help provide more information regarding Mental Health. \nIf <@949799859299442739> is online, you enter a command and receive no response, please contact `Mr.Rockyツ#0103`. Either the bot errored, or you have been **blacklisted** from using the bot.")
        .setColor("PURPLE")
        .setTimestamp()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Moderation Commands")
        .setDescription("`-ban` <mention user> | `-clear` <message amount> | \n`-mute` <user> | `-unmute` <user> |")
        .setColor("PURPLE")

        .setTimestamp()

        const embed3 = new Discord.MessageEmbed()
        .setTitle("Apps")
        .setDescription("To obtain information regarding the various applications that could potentially help with `Mental Health` please enter the command; \n`-apps`")
        .setColor("PURPLE")

        .setTimestamp()

        const embed4 = new Discord.MessageEmbed()
        .setTitle("Information")
        .setDescription("`-bugreport` <issue> | `-suggest` <issue> | `-color` <hexcode> | \n`-hotlines` | `-playlists` | `\n-roleinfo` <role> | `-stats` | \n`-userinfo` <user>")
        .setColor("PURPLE")

        .setTimestamp()

        const embed5 = new Discord.MessageEmbed()
        .setTitle("Playlists")
        .setDescription("To obtain the various `Playlists` that could help calm someone down, please use the command; \n`-playlists`")
        .setColor("PURPLE")


        let button = new Discord.MessageButton()
        .setLabel("🛠️Moderation")
        .setCustomId("help1")
        .setStyle("PRIMARY")

        let button2 = new Discord.MessageButton()
        .setLabel("📱Apps")
        .setCustomId("help2")
        .setStyle("PRIMARY")

        let button3 = new Discord.MessageButton()
        .setLabel("🧠Information")
        .setCustomId("help3")
        .setStyle("PRIMARY")

        let button4 = new Discord.MessageButton()
        .setLabel("🎵Playlists")
        .setCustomId("help4")
        .setStyle("PRIMARY")

        let button5 = new Discord.MessageButton()
        .setLabel("🏠Home")
        .setCustomId("help5")
        .setStyle("PRIMARY")

        let row = new MessageActionRow()
        .addComponents(button, button2, button3, button4, button5);

        const MESSAGE = await message.reply({ embeds: [embed], components: [row]});
        const collector = MESSAGE.createMessageComponentCollector({ time: 60000 });

        collector.on('collect', async b => {
            if (b.user.id !== message.author.id) {
                b.reply({content: "This is not for you", ephemeral: true});
            } else {
                if(b.customId === "help5") {
                    b.update({ embeds: [embed], components: [row]})
                }
                if(b.customId === "help1") {
                    b.update({embeds: [embed2], components: [row]})
                }
                if(b.customId === "help2") {
                    b.update({embeds: [embed3], components: [row]})   
                }
                if(b.customId === "help3") {
                    b.update({ embeds: [embed4], components: [row]})
                }
                if(b.customId === "help4") {
                    b.update({ embeds: [embed5], components: [row]})
                }
                }
            })
            collector.on('end', (b) =>{
                MESSAGE.edit("**This help menu has expired, please type `-help` again to view it.**")
            })
    }
})