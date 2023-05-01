const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

const buildCommand = (name, description, action) => {
    return {
        name: name,
        data: new SlashCommandBuilder()
            .setName(name)
            .setDescription(description)
            .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
            .setDMPermission(false),
        execute: action,
    };
};

module.exports = { buildCommand };
