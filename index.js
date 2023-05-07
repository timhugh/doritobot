const { Client, Events, GatewayIntentBits } = require("discord.js");
const fastify = require("fastify");
const commands = require("./commands/all");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);
    if (command === undefined) {
        console.warn("Got unknown command", interaction.commandName);
        interaction.reply("Sorry, I don't know what that means!");
        return;
    }

    try {
        console.log("Executing command", command.name);
        await command.execute(interaction);
    } catch (error) {
        console.error(
            "Encountered error while executing command",
            interaction.commandName,
            error
        );
    }
});

client.on(Events.ShardError, (error) => {
    console.warn("Received shard error", error);
});

client.login(process.env.DISCORD_API_TOKEN);

const server = fastify({ logger: true });

server.get("/health", async (_, res) => {
    return { status: "OK" };
});

server.listen({ port: process.env.PORT });
