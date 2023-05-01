const { Client, Events, GatewayIntentBits } = require("discord.js");
const fastify = require("fastify");
const commands = require("./commands/allCommands");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);

    if (!commands.has(interaction.commandName)) {
        console.warn("Got unknown command", interaction.commandName);
        return;
    }

    const command = commands.get(interaction.commandName);
    // TODO cooldown?
    // TODO error handling?
    await command.execute(interaction);
});

client.login(process.env.DISCORD_API_TOKEN);

const server = fastify({ logger: true });

server.get("/health", async (_, res) => {
    return { status: "OK" };
});

server.listen({ port: process.env.PORT });
