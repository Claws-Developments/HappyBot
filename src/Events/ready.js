const Event = require("../Structures/Event.js");
const version = require("../../package.json");
const chalk = require("chalk");

module.exports = new Event("ready", client => {
    let ms = require("ms");
    console.log(chalk.magenta("Mental Health Research is now ready!"));
    console.log(chalk.cyan(`${ms(ms(Math.round(process.uptime() - (client.uptime/1000))+'s'))} to load bot`))
    activities = [`You shall smile again😊`, `Your feelings are valid✨`, `Things will get better🩹`, `You are loved❤️`], i = 0;
    setInterval(() => client.user.setActivity(`you | ${activities[i++ % activities.length]}`, { type: "LISTENING" }),60000)

});