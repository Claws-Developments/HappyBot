const Command = require("../../Structures/Command.js");
const Discord = require("discord.js")
const Owner = ('620708924093628436')

module.exports = new Command({
    name: "guildlist",
    description: "Shows what server(s) your bot is in!",
    aliases: ['slist', 'servers', 'sl'],
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if(message.author.id !== `${Owner}`) return message.reply('Owner only cmd.');
        let description = 
        `Total Server: ${client.guilds.cache.size}\n\n` + client.guilds.cache
        .sort((a, b) => b.memberCount - a.memberCount)
        .map(r => r)
        .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ID: ${r.id}`)
        .slice(0, 10)
        .join('\n')

        const serversEmbed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setColor('PURPLE')
        .setDescription(description)
        .setTimestamp()

        message.channel.send({ embeds: [serversEmbed] })
  }
})
