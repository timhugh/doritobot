const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { BisectClient, PowerState } = require("../bisectClient");

const Status = {
    name: "status",
    data: new SlashCommandBuilder()
        .setName("status")
        .setDescription("Check the status of the game server")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.deferReply();
        let status = await BisectClient.getServerResources(
            process.env.BISECT_SERVER_ID
        );
        let statusText = JSON.stringify(status, null, 4);
        await interaction.editReply(
            `Here you go! \`\`\`json\n${statusText}\`\`\``
        );
    },
};

const Restart = {
    name: "restart",
    data: new SlashCommandBuilder()
        .setName("restart")
        .setDescription("Restart the game server")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.deferReply();
        await BisectClient.setServerState(
            process.env.BISECT_SERVER_ID,
            PowerState.Restart
        );
        await interaction.editReply("Server is restarting!");
        // TODO: poll for status and inform when running again
    },
};

module.exports = { Status, Restart };
