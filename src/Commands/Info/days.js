const Command = require("../../Structures/Command.js");
const Discord = require("discord.js")

module.exports = new Command({
    name: "days",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {

        const daysEmbed = new Discord.MessageEmbed()
            .setTitle("Days that commemorate Mental Health")
            .setColor("PURPLE")
            .setDescription("**Children's Mental Health Week** \n```7 - 13 February``` \n**Self injury Awareness Day** \n```1 March``` \n**World Bipolar Day** \n```30 March``` \n**Mental Health Awareness Week** \n```10 - 16 May``` \n**World Suicide Prevention Day** \n```10 September``` \n**World Mental Health Day** \n```10 October``` \n**Anti-Bullying Week** \n```15 - 19 November```")
            .setTimestamp()

        message.channel.send({ embeds: [daysEmbed] })

    }
})