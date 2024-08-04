const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `comando de prueba %name`
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `⏰𝙀𝙨𝙥𝙚𝙧𝙖 : ${msToTime(date - new Date())} `
handler.help = ['Prueba', 'Xd', 'GH']
handler.tags = ['juegos']
handler.command = /^(Date|Prueba|xd)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;
