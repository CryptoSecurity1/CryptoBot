const Discord = require("discord.js");



exports.run = async (client, message, level) => {
    message.channel.send('**Welcome to Crypto Security Team!**').then(async msg => {
    setTimeout(() => {
      msg.edit('***ENJOY***');
    }, 500);
    setTimeout(() => {
      msg.edit('***RAPING***');
    }, 1000);
    setTimeout(() => {
      msg.edit('***THE ASSHOLES***');
    }, 1000);
    setTimeout(() => {
      msg.edit('***THAT CALL***');
    }, 1000);
    setTimeout(() => {
      msg.edit('***THEMSELVES***');
    }, 1000);
    setTimeout(() => {
      msg.edit('***THE MOTHERFUCKING***');
    }, 1000);
    setTimeout(() => {
      msg.edit(`***!!!!!!!!!!!!GOVERNMENT!!!!!!!!!!!!***`);
    }, 4000).then(msg => msg.delete(1000));
  });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "welcome",
    category: "Fun",
    description: "Governement :dab:",
    usage: "welcome"
  };