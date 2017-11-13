const Discord = require("discord.js")
const settings = require("../settings.json")
module.exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle('ArchiaHQ')
  .setColor(0xADD8E6)
  
  message.channel.send(embed)
    }

module.exports.help = {
    name: "title"
}