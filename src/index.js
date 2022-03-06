console.clear();

const Discord = require('discord.js');

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");

require('dotenv').config();

const client = new Client();

const chalk = require("chalk");

// Token/Bot Login
client.start(process.env.TOKEN)