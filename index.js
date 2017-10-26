const Discord = require('discord.js');
const request = require('request');
const bot = new Discord.Client();
const cred = require('./cred.json');
const methods = require('./methods.js');

bot.on('ready', () => {
  console.log('Feels bad, man');
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        var channel = message.channel;
        switch(cmd) {
            case 'feel':
            	message.delete();
            	channel.send("Feels bad, man");
            	break;
            case 'btc':
            	message.delete();
            	methods.btcPrice(channel);
            	break;
            case 'bp':
            	message.delete();
            	methods.beautifulPeople(channel);
            	break;
            case 'ultrapurge':
            	channel.fetchMessages().then(messages => channel.bulkDelete(messages));
         }
     }
});

bot.login(cred.token);