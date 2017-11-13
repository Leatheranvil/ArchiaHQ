const Discord = require("discord.js")
const settings = require("../settings.json")
module.exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor(9807270)
  .addField("Ip","play.archiahq.com")


  message.channel.send(embed)
    }

module.exports.help = {
    name: "ip"
}