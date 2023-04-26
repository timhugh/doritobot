const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const commands = require("./commands");

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_API_TOKEN);

(async () => {
    try {
        console.log("Registering application (/) commands.");

        const data = [];
        commands.forEach((c) => {
            console.log(`Found command "${c.name}"`);
            data.push(c.data.toJSON());
        });

        await rest.put(Routes.applicationCommands(process.env.DISCORD_APP_ID), {
            body: data,
        });

        console.log("Finished registering commands.");
    } catch (error) {
        console.error(error);
    }
})();
