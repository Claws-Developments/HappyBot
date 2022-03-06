const Event = require("../Structures/Event.js");
const Discord = require("discord.js");
module.exports = new Event("messageCreate", async (client, message) => {
    const array = require("../JSON/suicide.json") //change to ur path
    const Member = message.member
    if(array.includes(message.content)) { 
      message.delete()

      const suicide = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("<:info:930584727256174693> Banned word has been detected.\n")
        .setImage("https://cdn.discordapp.com/attachments/930418354991296542/938836033674543114/suicide_prevent.jpg")
        .addField("User", `\`\`\`${message.author.tag} \n(${message.author.id})\`\`\``)
        .addField("Message Content", `\`\`\`${message.content}\`\`\``)
        .addField("Notes :pencil:", `\`\`\`This word has been detected by the bot because it is related to suicide or any other form of hate speech! Please take moderation action against the user if necessary!\`\`\``)
        .setTimestamp()

      message.channel.send({embeds: [suicide]})

    }
})