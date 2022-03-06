const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command.js');
const Owner = ('620708924093628436')

module.exports = new Command({
  name: 'suggestion',
  aliases: ['s', 'suggest'],
  description: 'suggest a feature to the owner',
  permission: 'SEND_MESSAGES',

  async run(message, args, client) {
      const owner = client.users.cache.get(`${Owner}`);

      const query = args.slice(1).join(" ");
      if(!query) {
			return message.reply(
				'`Please specify a query.` \n**Also keep in mind that if this command gets abused or if invalid reasons are being given, the author will be blacklisted and the owner of the bot will remove the bot from the server.**',
			);
		}

      const bugEmbed = new MessageEmbed()
      
        .setTitle(' <:warning:894272960637054996> Suggestion')
        .setColor("PURPLE")
        .addField('Author:', message.author.toString(), true)
        .addField('Guild:', message.guild.name, true)
        .addField('MemberCount:', message.guild.memberCount.toString(), true)
        .addField('GuildID:', message.guild.id.toString(), true)
        .addField('Suggestion:', query)
        .setTimestamp()

      owner.send({ embeds: [bugEmbed] })
      message.channel.send(`Your suggesstion has been sent successfully to the owner of the bot!`)
  }
})
