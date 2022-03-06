/** @format */

const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Event.js");

const config = require("../Data/config.json");

const chalk = require("chalk");

const intents = new Discord.Intents(32767);

const fs = require("fs");

class Client extends Discord.Client {
	constructor() {
		super({ intents });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.aliases = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {
		// Command Handler
		const commandFiles = fs.readdirSync("./src/Commands")
			.filter(file => file.endsWith(".js"));

			/**
			 * @type {Command[]}
			 */
		const commands = commandFiles.map(file => require(`../Commands/${file}`));

		commands.forEach(cmd => {
			console.log(`Command ${cmd.name} loaded`);
			this.commands.set(cmd.name, cmd);
			if(command.aliases) command.aliases.forEach(a => this.aliases.set(a, command))
		});

		const slashCommands = commands
			.filter(cmd => ["BOTH", "SLASH"].includes(cmd.type))
			.map(cmd => ({
				name: cmd.name.toLowerCase(),
				description: cmd.description,
				permissions: [],
				options: cmd.slashCommandOptions,
				defaultPermission: true
			}));

		


			// .forEach(file => {
			// 	/**
			// 	 * @type {Command}
			// 	 */
			// 	const command = require(`../Commands/${file}`);
			// 	console.log(`Command ${command.name} loaded`);
			// 	this.commands.set(command.name, command);
			// });

		// Event Handler

		this.removeAllListeners();

		this.on("ready", async () => {
			const cmds = await this.application.commands.set(slashCommands);

			cmds.forEach(cmd => console.log(`Slash Command ${cmd.name} registered`));
		})

            fs.readdirSync("./src/Commands/Apps")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/Apps/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });

      fs.readdirSync("./src/Commands/Owner")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/Owner/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });

			fs.readdirSync("./src/Commands/Playlists")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/Playlists/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });
			
			fs.readdirSync("./src/Commands/Fun")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/Fun/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });

			fs.readdirSync("./src/Commands/Info")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/Info/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });

            fs.readdirSync("./src/Commands/hotlines")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {

				const command = require(`../Commands/hotlines/${file}`);
                console.log(chalk.red(`Command: ${command.name} loaded`));
                this.commands.set(command.name, command);
            });

            fs.readdirSync("./src/JSON")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {

				/**
				 * @type {Event}
				 */
				const event = require(`../JSON/${file}`);
				console.log(chalk.green(`Event: ${event.event} loaded`));
				this.on(event.event, event.run.bind(null, this));
			});

		fs.readdirSync("./src/Events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(chalk.green(`Event: ${event.event} loaded`));
				this.on(event.event, event.run.bind(null, this));
			});

		this.login(token);
	}
}

module.exports = Client;
