const commando = require('discord.js-commando');
const app = require('../../app.js');
const config = require('../../config.json');
const Discord = require('discord.js');

class DMallCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: `dmall`,
            group: 'dms',
            memberName: 'dmall',
            description: 'Sends message provided to all members of the guild.',
            examples: [ 'Hey everyone! This might reach more people than an announcement...' ]
        });
    }

    async run(message, args){
        let dmGuild = message.guild;
        let role = message.mentions.roles.first();
        var msg = message.content;
        let timeout = Math.floor(Math.random() * config.timeout);


        try {
            msg = msg.substring(msg.indexOf("dmall") + 5);
        } catch(error) {
            console.log(error);
            return;
        }

        if(!msg || msg.length <= 1) {
            const embed = new Discord.RichEmbed()
                .addField(":x: Failed to send", "Message not specified")
                .addField(":eyes: Listen up!", "Every character past the command will be sent,\nand apparently there was nothing to send.");
            message.channel.send({ embed: embed });
            return;
        }

        console.log(`Responding to ${message.author}, sending message to all.`)
        dmGuild.members.forEach(member => {
            let timeout = Math.floor(Math.random() * config.timeout);
            setTimeout(function () {
                console.log(`DMing ${member.user.username} now, waited ${timeout}ms.  [${timeout/1000}s]`);
                member.send(`${msg} \n [${Math.floor(Math.random() * 9999)}]`);
            }, timeout);
        });
    }
}

module.exports = DMallCommand;