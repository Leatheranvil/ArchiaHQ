const settings = require("./settings.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

//Load commands from the cmds folder
client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }
  
  jsfiles.forEach((f, i) => {
  let props = require(`./commands/${f}`);
  //console.log(`${i + 1}: ${f} loaded!`)
  client.commands.set(props.help.name, props);
  });
  console.log('-------------------------------')
  console.log(`Loaded ${jsfiles.length} commands!`)
});
//what happends when bot goes online
client.on("ready", () => {
    console.log("Serving in " + client.guilds.size + " guilds");
    console.log(client.users.size + " users use " + client.user.username)
});
//message handler
client.on('message', function(message) {
  if (message.author.bot) return; // always ignore bots!
  //console.log(client.commands);
  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);
  if (!command.startsWith(settings.prefix)) return;
  let cmd = client.commands.get(command.slice(settings.prefix.length));
  if (cmd) cmd.run(client, message, args);
}); // message handler
client.on("ready", () => {
    client.user.setGame("ArchiaHQ");
    client.user.setStatus('online');
	});
	client.login(settings.token);