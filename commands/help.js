const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `.`)
        .addField("Moderation", `**Auto Filter :** Words that are usually not allowed on servers.\n**Set prefix :** Make the bot have any prefix you desire\n<prefix><setprefix> <whatever you want>\n**Ban :** It will __ban__ any user as long the bot has a higher role\n<prefix><ban> <user> <reason>\n**Kick :** It will __kick__ any user as long the bot has a higher role\n<prefix><kick> <user> <reason>\n**Mute :** it will __mute__ an user for which ever amount of time you want\n<prefix><mute> <user> <HH:mm:ss>\n**Add Role :**It will give the any user an specific role, as long as the bot has a higher **Permissions**,\n<prefix><addrole> <user> <rolename>\n**Remove Role :** It will remove  any  role an user have, as long as the bot has higher **Permissions**,\n<prefix><removerole> <user> <rolename>\n**Say :** It will say anything you want, have in mind this is onlgt for Admin's\n<prefix><say> <what you want to say>\n**Clear :** it will clear up 100 messages no older than 14 days\n<prefix><clear> <amount of messages>`)
        .addBlankField()
        .addField("Guild Commands", `**Server Info :** It wil show the server's info\n<prefix><serverinfo>\n**User Info : ** It will show you the bot's information\n<prefix><userinfo>\n**Bot Info :** it will show you the bot's information\n<prefix><serverinfo>\n** Lockdown :** it will lockdown any channel as long as the bot has the proper permissions\n<prefix><lockdown hh-mm-ss>\n if you wish to unlock the channel before the cooldown is done you could do **<prefix><lockdown release or unlock** `)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}