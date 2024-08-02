//CÓDIGO CREADO POR elias1524 : https://github.com/elias1524 actualizar todo el dia

const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `Las cuentas de hoy no está disponible debes de preguntar al dueño .enable cuentas` 
const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `,⌛ *Espera* : ${msToTime(date- new Date())} para volver a tener tu cuenta`
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(`⚠️ *No tenes money rey*`)
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000) 
const exp = Math.floor(Math.random() * 8500)
const diamond = Math.floor(Math.random() * 130)
const money = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`Que buena rey te ganaste una cuenta de Disney* melissafox73@gmail.com 
Jorbbie01 Disfruta!!`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`*Estás de mala suerte broth Perdiste una cuenta de neflix (⁠ᗒ⁠ᗩ⁠ᗕ⁠)*`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'kick').catch(m.reply(`QUE MALA SUERTE REY PERDISTE UNA CUENTA DE HBO MAX`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'Kick').catch(m.reply(`BUENA ESA AMIGO ACABASTE DE GANAR UN CRUNCHYROLL darwin.menacho.c@hotmail.com
darwin19. *No cambiar nada*`)) 
if (ruleta === 'text5') return m.reply(`Felicidades ahora vas a saber hablar en otra idioma Te ganaste Duolingo worldjurassic08@gmail.com
Billiya5 disfruta no cambiar nada!!`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`ohhh whaos te ganaste el premio mayor felicitaciones estás de suerte hoy deberías de jugar el casinote ganaste HBO Max Mpholosho9388ivanroli@hotmail.com
Roli2064 Espero que lo disfrutes no cambies nada!!`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['cuentas', 'cuenta', 'Cuentaa']
handler.tags = ['Cuentas']
handler.command = /^(Cuentas|cuenta|Cuentaa)$/i
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
}