const { BisectClient, PowerState } = require("../bisect");
const { buildCommand } = require("../commands");

const BasicStatus = buildCommand(
    "status",
    "Get the status of the game server",
    async (interaction) => {
        await interaction.deferReply();

        let status = await BisectClient.getServerResources(
            process.env.BISECT_SERVER_ID
        );

        await interaction.editReply(
            `The game server is currently ${status.attributes.current_state}`
        );
    }
);

const DetailedStatus = buildCommand(
    "detailed_status",
    "Fetch a detailed status of the game server",
    async (interaction) => {
        await interaction.deferReply();

        let status = await BisectClient.getServerResources(
            process.env.BISECT_SERVER_ID
        );

        let statusText = JSON.stringify(status, null, 4);
        await interaction.editReply(
            `Here you go! \`\`\`json\n${statusText}\`\`\``
        );
    }
);

const Restart = buildCommand(
    "restart",
    "Restart the game server",
    async (interaction) => {
        await interaction.deferReply();
        await BisectClient.setServerState(
            process.env.BISECT_SERVER_ID,
            PowerState.Restart
        );
        await interaction.editReply("Server is restarting!");
        // TODO: poll for status and inform when running again
    }
);

module.exports = { BasicStatus, DetailedStatus, Restart };
