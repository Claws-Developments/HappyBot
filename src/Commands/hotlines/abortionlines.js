const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Command = require("../../Structures/Command.js");

module.exports = new Command({
    name: 'abortionlines',
    aliases: ['ab'],
    permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Abortion Hotlines ")
        .addFields(
        { name: 'National Domestic Violence Hotline', value: '1-800-799-SAFE'},
        { name: 'Post Abortion Counseling', value: '1-800-228-0332'},
        { name: 'Post Abortion Project Rachel', value: '1-800-5WE-CARE'},
        {name: 'National Abortion Federation Hotline', value: '1-800-772-9100'},
        {name: 'National Office of Post Abortion Trauma', value: '1-800-593-2273'}
    )
        .setColor("GREEN")

        message.channel.send({embeds:[embed]})
  }
})