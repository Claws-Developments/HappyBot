const Discord = require('discord.js');
const Command = require("../../Structures/Command");
const owner = ('620708924093628436')

module.exports = new Command({
    name: "eval",
    description: "Evaluation cmd",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        if (message.author.id !== `${owner}`) return message.reply("You are not an owner");
        //   replace with your id  ^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ optional 2nd owner. You can remove this

        try {
            var code = args.slice(1).join(' ');
            if (!code) return message.reply('You need to eval something.')

            if (code.includes('client.token'))
                return message.reply('Dont wanna do that 0_0');
            var evaled = eval(code);

            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);

            const embed = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .addField('📥 Input: ', `\`\`\`${code}\`\`\``)
                .addField(
                    '📤 Output: ',
                    `\`\`\`js\n${clean(evaled)}\n\`\`\``
                );
            message.reply({ embeds: [embed] });

        } catch (err) {
            const embed = new Discord.MessageEmbed()
                .setColor('WHITE')
                .addField('📥 Input: ', `\`\`\`${code}\`\`\``)
                .addField(
                    '📤 Output: ',
                    `\`\`\`${clean(err)}\`\`\``
                );
            message.reply({ embeds: [embed] });
        }

        function clean(text) {
            if (typeof text === 'string')
                return text
                    .replace(/`/g, '`' + String.fromCharCode(8203))
                    .replace(/@/g, '@' + String.fromCharCode(8203));
            else return text;
        }
    }
})
