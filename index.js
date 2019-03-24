require('dotenv').config()
// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Ready to Doot`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

var Active = false;
var specialTarget = "";

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

	if(message.author.id == 147453766910607369 || message.author.id == 290193372688154624) {

      if(message.content.toUpperCase().includes('FLIPSWITCH')) {
        Active = !Active;

        if(Active) {
          return message.channel.send("Tiji-Bot has been activated")
          client.user.setActivity('Looking for commands')
        }
        else {
          return message.channel.send("Tiji-Bot has been activated")
          client.user.setActivity('Taking a break')
        }
      }

	  /*
      if(message.content.includes('BaconMode toggle')) {
        BaconMode = !BaconMode;

        if(BaconMode) {
          return message.channel.send("DootDootBot has initiated Bacon Mode. Watch what you post!")
          client.user.setActivity('Terrorizing Bacon')
        }
        else {
          return message.channel.send("DootDootBot has disabled Bacon Mode. You may now post recklessly!")
          client.user.setActivity('Ready to Doot')
        }
      }
	  */

      var mentions = message.mentions;

	  /*
      if(message.content.includes('doot doot attack')) {
        console.log(mentions)
        console.log(mentions["users"])
        specialTarget = mentions["users"].values().next()['value'].id
        console.log(specialTarget)
      }

      if(message.content.includes('doot doot stop')) {
        specialTarget = ""
      }
	  */
    }

  if(message.content.includes('o <oYT')) {

        author = ctx.message.author
        voice_channel = author.voice_channel
        vc = await client.join_voice_channel(voice_channel)

        player = await vc.create_ytdl_player(`https://www.youtube.com/watch?v=qexSRrXTc-A`)
        player.start()

       return message.channel.send(`This is a test of the YT sound system IN`);
   };
   
   if(message.content.includes('- <-YT')) {

        server = ctx.message.server
		voice_client = client.voice_client_in(server)

       await voice_client.disconnect()

       return message.channel.send(`This is a test of the YT sound system OUT`);
   };



});

/*
client.on("messageUpdate", (message) => {
  if(BaconMode) {
    if(message.author.id == 147453766910607369 || message.author.id == 290193372688154624) {
      return message.channel.send(`${message.author.username} tried to edit: ${message.content}`)
    }
  }
  if(JoshMode) {
    if(message.author.id == 230124931461939200) {
      return message.channel.send(`${message.author.username} tried to edit: ${message.content}`)
    }
  }
  if(specialTarget != "") {
    if(message.author.id == specialTarget) {
      return message.channel.send(`${message.author.username} tried to edit: ${message.content}`)
    }
  }
})


client.on("messageDelete", (message) => {

  if(BaconMode) {
    if(message.author.id == 147453766910607369 || message.author.id == 290193372688154624) {
      return watchDelete(message);
    }
  }
  if(JoshMode) {
    if(message.author.id == 230124931461939200) {
      return watchDelete(message);
    }
  }
  if(specialTarget != "") {
    if(message.author.id == specialTarget) {
      return watchDelete(message);
    }
  }

});

function watchDelete(message) {
  files = [];

  if(message.attachments) {
    console.log(message.attachments)

    message.attachments.forEach((attachment) => {
      files.push(attachment.proxyURL);
    });
  }

  message.channel.send(`${message.author.username} tried to delete: ${message.content}`);
  return message.channel.send(files);
}
*/

if (process.env.token) {
  client.login(process.env.token);
}
else {
  client.login(config.token)
}

require('http').createServer().listen(3000)
