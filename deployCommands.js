const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const commands = require("./commands/allCommands");

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_API_TOKEN);

(async () => {
    try {
        console.log("Registering application (/) commands.");

        const data = [];
        commands.forEach((c) => {
            console.log(`Found command "${c.name}"`);
            data.push(c.data.toJSON());
        });

        console.log("Clearing existing commands...");
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.DISCORD_APP_ID,
                process.env.DISCORD_SERVER_ID
            ),
            {
                body: [],
            }
        );

        console.log("Deploying commands...");
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.DISCORD_APP_ID,
                process.env.DISCORD_SERVER_ID
            ),
            {
                body: data,
            }
        );

        console.log("Done!");
    } catch (error) {
        console.error(error);
    }
})();
