const ServerCommands = require("./commands/server");

const commands = Object.values(ServerCommands);
const commandDictionary = new Map(commands.map((c) => [c.name, c]));

module.exports = commandDictionary;
