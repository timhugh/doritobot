const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const BisectClient = require("../bisectClient");

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

module.exports = { Status };
