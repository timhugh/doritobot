const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

const Status = {
    name: "status",
    data: new SlashCommandBuilder()
        .setName("status")
        .setDescription("Check the status of the game server")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply("Your mother");
    },
};

module.exports = { Status };
