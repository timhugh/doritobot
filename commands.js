const { Status } = require("./commands/server");

const commands = [Status];
const commandDictionary = new Map(commands.map((c) => [c.name, c]));

module.exports = commandDictionary;
