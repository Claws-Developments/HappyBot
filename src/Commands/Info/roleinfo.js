const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const Command = require('../../Structures/Command')

module.exports = new Command ({
	name: 'roleinfo',
	aliases: ['role', 'roles'],
	description: 'Displays information about a provided role.',
    permission: 'SEND_MESSAGES',

	async run(message, args, client) {
		const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
		if(!role) {
			return message.reply(
				':x: Please provide a valid role.',
			);
		}

		let permissions;
		if(role.permissions.toArray().length !== 0) {
			permissions = role.permissions.toArray().map(x => x.split('_').map(y => y[0] + y.slice(1).toLowerCase()).join(' ')).join(', ');
		}
		else {
			permissions = 'None';
		}
		const roleEmbed = new MessageEmbed()
			.setColor('PURPLE')
			.setFooter(`Requested by ${message.author.tag} `)
			.setTimestamp()
			.setTitle('Role Information')
			.addFields(
				{ name: 'Role Name', value: `\`\`\`${role.name}\`\`\``, inline:true },
				{ name: 'Role ID', value: `\`\`\`${role.id}\`\`\``, inline:true },
				{ name: 'Hex Color', value: `\`\`\`${role.hexColor.toUpperCase()}\`\`\`` },
				{ name: 'Members', value: `\`\`\`${role.members.size}\`\`\``, inline:true },
				{ name: 'Hoisted', value: `\`\`\`${role.hoist ? 'Yes' : 'No'}\`\`\``, inline:true },
				{ name: 'Mentionable', value: `\`\`\`${role.mentionable ? 'Yes' : 'No'}\`\`\``, inline:true },
				{ name: 'Created', value: `\`\`\`${moment(role.createdTimestamp).format('MMMM Do YYYY, h:mm:ss')} | ${Math.floor((Date.now() - role.createdTimestamp) / 86400000)} day(s) ago\`\`\`` },
			)
      .addField('Permissions', 
				`\`\`\`${permissions}\`\`\``,
			);
			

		return message.reply({embeds: [roleEmbed]});
	},
});