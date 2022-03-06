const {  Message, MessageEmbed } = require("discord.js")
const Command = require("../../Structures/Command.js");
const ownerID = "620708924093628436";
const Discord = require("discord.js")

module.exports = new Command({
    name: "leaveserver",
    description: "leave a server",
    permission: "ADMINISTRATOR",
    type: "TEXT",
    async run(message, args, client) {
        const ownerEmbed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setDescription("You are not my owner")
        .setTitle("❌ Error!")

        if(message.author.id !== ownerID) return message.channel.send({embeds: [ownerEmbed]})

        const guildId = args[1];

        if (!guildId) return message.channel.send({ embeds: [new MessageEmbed()
                .setColor("PURPLE")
                .setAuthor(message.author.tag)
                .setDescription("**❌ Please Provide an ID for the Guild**")]})

        const guild = client.guilds.cache.find((g) => g.id === guildId)

        if (!guild) return message.channel.send({ embeds: [ new MessageEmbed()
                .setColor("PURPLE")
                .setAuthor(message.author.tag)
                .setDescription("**Can not find this guild**")]})
        let leaved = await guild.leave()
        if (leaved) {
            const leave = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription("✅ I have successfully left the guild!")
    
            return message.channel.send({embeds: [leave]});
         } else {
            message.channel.send({content: 'An err occured trying to leave the server'})
        }

    }
})
