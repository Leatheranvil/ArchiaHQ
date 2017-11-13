const Discord = require("discord.js")
const settings = require("../settings.json")
module.exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle('General Rules')
  .setColor(0xADD8E6)
  .addField("Rule 1","Present an appropriate and respectful attitude.")
  .addField("Rule 2","Racial, sexual, abhorrent, or any negative degrading remarks will result in a permanent mute or even a ban from our Discord.")
  .addField("Rule 3","Do not send links to scam websites, websites containing pornography, phishing websites or anything that can cause harm or are considered inappropriate.")
  .addField("Rule 4","Do not advertise any other external discord server, website, etc. Indirect advertisement, such as private message advertisement, is also prohibited.")
  .addField("Rule 5","All messages must be relevant to their text channel, any off-topic discussion must occur in #chat")
  .addField("Rule 6","Do not beg for any specifics, whine over not winning a giveaway; please understand we are a giveaway server and we give everyone a chance.")
  .addField("Rule 7","Do not perform or promote the intentional use of glitches, hacks, bugs, and other exploits that will cause an incident within the community and other players.")
  .addField("Rule 8","Do not cause a nuisance in the community, repeated complaints from several members will lead to administrative action.")
  .addField("Rule 9","Do not attempt to copy or steal any aspects of ArchiaHQ")
  .addField("Rule 10","Do not argue with staff. Decisions are final.")
  .addField("Rule 11","Do not use voice changers or any form of modification that may cause a disturbance, annoyance, or harm.")
  .addField("Rule 12","Do not surf or switch channels repeatedly.")
  .addField("Rule 13","Soundboards and/or voice changers are not allowed.")
  message.channel.send(embed)
    }

module.exports.help = {
    name: "rules"
   
}