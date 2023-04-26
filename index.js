const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
    console.log("Bot is ready");
});

client.on("message", (message) => {
    console.log("message received", message);
});

client.login(process.env.DISCORD_API_TOKEN);
