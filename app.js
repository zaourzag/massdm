const Discord = require('discord.js');
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);

const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix:'mass!'
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];

bot.on("ready", () => {
    clear();
});


bot.on("error", (error) => {
    bot.login(config.token);
});

bot.registry.registerGroup('dms', 'help');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);


function clear() {
    console.clear();
    console.log(figlet.textSync("MassDM v3.2.0").green);
    console.log("\n\nMass DM bot for Discord. Credit to Gringo(Scammer ALT)!\nSends DMs to selected members of guild.");
    console.log(`\nForked and improved by Alex.\n Random send time set @ 0.01-${config.wait}s`);
    console.log(`Type ${config.prefix}help in a chat.\n\n`);
}
