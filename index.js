const { Client, Intents } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const discordToken = process.env.DISCORD_APP_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = [
  
]

client.once('ready', () => {
  console.log('Ready!');
});

client.login(discordToken);
