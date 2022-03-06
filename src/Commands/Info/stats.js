const feroms = require('fero-ms')
const Command = require('../../Structures/Command.js')
const Discord = require("discord.js");

module.exports = new Command({
    name: "stats",
    aliases: ['ping'],
    description: "Shows statistics of the bot",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
let uptime = client.uptime
const shortenedUptime = `\`\`\`${feroms.ms(uptime)}\`\`\``;
const { version } = require("discord.js")

const statsEmbed = new Discord.MessageEmbed()
.setTitle(`${message.client.user.username} Stats`)
.addFields(
  { name: " Servers:", value: `\`\`\`${client.guilds.cache.size}\`\`\``, inline: true },
  { name: " Users:", value: `\`\`\`${client.users.cache.size}\`\`\``, inline: true },
  { name: " Channels:",value: `\`\`\`${client.channels.cache.size}\`\`\``, inline: true },
  { name: " Uptime: ", value: shortenedUptime , inline: true },
  { name: " Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
  { name: " RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
  { name: " Version: ", value: `\`\`\`v${require("../../../package.json").version}\`\`\``, inline: true },
  { name: " Discord.js: ", value: `\`\`\`v${version}\`\`\``, inline: true },
  { name: "Node: ", value: `\`\`\`${process.version}\`\`\``, inline: true }
)
  .setColor("PURPLE")

  message.reply({embeds: [statsEmbed]})
}})