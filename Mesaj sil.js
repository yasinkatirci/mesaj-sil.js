aba Arkadaşlar Bugün Sizlere Discordda !temizle <Mesaj Miktarı> Yazınca Botunuzun Belirttiğiniz mesaj Kadarını Silmesi kodunu gösteriyim.

Kod:
const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(`${client.emojis.get("551565844191117328")}**Lütfen Silinicek Mesaj Miktarını Yazın.!**`);
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${client.emojis.get("551565732853579778")} ${args[0]} Adet Mesajı Sildim. `).then(msg => msg.delete(10000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizle','süpür'],
  permLevel: 2,
};

exports.help = {
  name:'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
