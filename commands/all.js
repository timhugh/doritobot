const ServerCommands = require("./server");
const { buildCommand } = require("../commands");

const commands = Object.values(ServerCommands);
const commandDictionary = new Map(commands.map((c) => [c.name, c]));

commandDictionary.set(
    "help",
    buildCommand("help", "display all available commands", (interaction) => {
        interaction.reply(
            `Here's a list of available commands: \`\`\`${commands
                .map(
                    (command) => `${command.name} - ${command.data.description}`
                )
                .join("\n")}
                \`\`\``
        );
    })
);

module.exports = commandDictionary;
