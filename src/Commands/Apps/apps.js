const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const Discord = require("discord.js");

const Command = require("../../Structures/Command.js");
module.exports = new Command({
  name: "apps",
  description: "Shows info about commands", 
  permission: "SEND_MESSAGES",
  
  async run(message, args, client) {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder("Select your option")
        .addOptions([
          {
            label: "Headspace",
            description: "Click here to get more info on Headspace",
            value: "first",
            emoji: "<:headspace:931629361650618438>",
          },
          {
            label: "Moodfit",
            description: "Click me to get more info on Moodfit",
            value: "second",
            emoji: "<:moodfit:930962878255738900>",
          },
          {
            label: "Sanvello",
            description: "Click here to get more info on Sanvello",
            value: "third",
            emoji: "<:sanvello:930963152743575602>",
          },
          {
            label: "Calm",
            description: "Click me to get more info on Calm",
            value: "fourth",
            emoji: "<:calm:930962342013976686>",
          },
          {
            label: "Bearable",
            description: "Click me to get more info on Bearable",
            value: "fifth",
            emoji: "<:bearable:930962311043231814>",
          },
          {
            label: "PTSD Coach",
            description: "Click me to get more info on PTSD Coach",
            value: "sixth",
            emoji: "<:ptsd_coach:930963016315445288>",
          },
        ])
    );

    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle("Apps Info Page")
      .addFields(
        {
          name: "Information",
          value:
            "You have summoned a Select Menu that shall give you information regarding a few Applications that could potentially help you with your Mental Health. `Keep in mind that these apps are not guaranteed to help 100%. The owner will not be held responsible for any irresponsible act.` \nTo see the Apps and all the information, please select an option in the drop down menu presented below.",
        },
        // {
        //   name: "More Info",
        //   value:
        //     "For More Information about **each** command \ntry using the `!helpinfo` Command",
        // },
        {
          name: "Default Prefix:",
          value: "`-help`",
        }
      )
      .setTimestamp()
      .setThumbnail("https://media.discordapp.net/attachments/930418354991296542/931156634028363806/2Q.png");

    let sendmsg = await message.channel.send({
      embeds: [embed],
      components: [row],
    });

    let embed1 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("ORANGE")
      .setTitle("Welcome to **Headspace**")
      .addFields(
        {
          name: "**Headspace**",
          value:
            "**Headspace** was started with one mission: `to improve the health and happiness of the world.`",
        },

        {
          name: "More information about Headspace",
          value: "To get more information regarding the application Headspace, please click on the following link, https://www.headspace.com/",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931647576078434314/4rZc2erpS0iZcQU9XStqEKgZzJM24RJaXroi7cEd5H9w14K0CHdQswpDWoQ7qJngJS3CHdT8xgBpES6hpXEj7cEltDRupD24hJbM7f0CyCCTHoItQAAAABJRU5ErkJggg.png");

    let embed2 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("BLUE")
      .setTitle("Welcome to **Moodfit**")
      .addFields(
        {
          name: "**Moodfit**",
          value: "Tools, Goals & Insights \n`Reduce stress and build up the fitness of your mental health`",
        },

        {
          name: "More information about Moodfit",
          value:
            "To get more information regarding the application Moodfit, please click on the following link, https://www.getmoodfit.com/",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931648745534279773/L31fBVDqjhmmKO2AAAAAElFTkSuQmCC.png");

    let embed3 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("GREEN")
      .setTitle("Welcome to **Sanvello**")
      .addFields(
        {
          name: "**Sanvello**",
          value:
            "Sanvello is based on the principles of cognitive behavioral therapy (CBT) and mindfulness meditation, strategies shown to provide effective relief for mental health concerns including anxiety and depression.",
        },

        {
          name: "More information about Sanvello",
          value: "To get more information regarding the application Sanvello, please click on the following link, https://www.sanvello.com/",
        }
        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931650627384250448/82WS3i0z66rJBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEmP8DdSdFtbwuhhoAAAAASUVORK5CYII.png");

    let embed4 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("DARK_BLUE")
      .setTitle("Welcome to **Calm**")
      .addFields(
        {
          name: "**Calm**",
          value:
            "Our goal is to help you improve your health and happiness.",
        },

        {
          name: "More information about Calm",
          value: "To get more information regarding the application Calm, please click on the following link, https://www.calm.com/",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931652653207932958/9k.png");

    let embed5 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("WHITE")
      .setTitle("Welcome to **Bearable**")
      .addFields(
        {
          name: "**Bearable**",
          value:
            "Keep track of your Mood, Symptoms, Daily Activities and other health factors such as Sleep, Medication, Exercise and Food Diary. \n`You can even automatically sync your steps, heart rate, blood pressure, weight, and more.`​"
        },

        {
          name: "More information about Bearable",
          value: "To get more information regarding the application Bearable, please click on the following link, https://bearable.app/",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931659506360942643/9k.png");

    let embed6 = new Discord.MessageEmbed()

      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("DARK_NAVY")
      .setTitle("Welcome to **PTSD Coach**")
      .addFields(
        {
          name: "**PTSD Coach**",
          value: "PTSD Coach was designed for those who have, or may have, posttraumatic stress disorder (PTSD). This app provides you with education about PTSD, information about professional care, a self-assessment for PTSD, opportunities to find support, and tools that can help you manage the stresses of daily life with PTSD.",
        },

        {
          name: "More information about PTSD Coach",
          value:
            "To get more information regarding the application PTSD Coach, please click on the following link, https://mobile.va.gov/app/ptsd-coach",
        }

        // {
        //   name: "More Information ",
        //   value:
        //     "For more **Information** please check out the `!helpinfo` Command",
        // }
      )
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/931647563516485642/931663290688483409/Z.png");

    const collector = message.channel.createMessageComponentCollector({
      componentType: "SELECT_MENU",
    });

    collector.on("collect", async (collected) => {
      const value = collected.values[0];

      if (value === "first") {
        collected.reply({ embeds: [embed1], ephemeral: true });
      }
      if (value === "second") {
        collected.reply({ embeds: [embed2], ephemeral: true });
      }
      if (value === "third") {
        collected.reply({ embeds: [embed3], ephemeral: true });
      }
      if (value === "fourth") {
        collected.reply({ embeds: [embed4], ephemeral: true });
      }
      if (value === "fifth") {
        collected.reply({ embeds: [embed5], ephemeral: true });
      }
      if (value === "sixth") {
        collected.reply({ embeds: [embed6], ephemeral: true });
      }
    });
  },
});