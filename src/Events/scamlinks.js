const Event = require("../Structures/Event.js");
const Discord = require("discord.js");

module.exports = new Event("messageCreate", async (client, message) => {
    const array = require("../JSON/scamlinks.json") //change to ur path
    const Member = message.member
    if(array.includes(message.content)) { 
      message.delete()

      const scammed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("<:info:930584727256174693> Banned Link has been detected.\n")
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .addField("User:", `\`\`\`${message.author.tag} \n(${message.author.id})\`\`\``)
        .addField("Message Content:", `\`\`\`${message.content}\`\`\``)
        .setTimestamp()

      message.channel.send({embeds: [scammed]})

    }
})