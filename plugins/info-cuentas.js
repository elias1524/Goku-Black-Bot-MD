import fs from "fs"
let handler = async (m, { conn, command }) => {
let estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : 2023, status: 1, surface : 1, message: 'By Ivan ©', orderTitle: 'Bang', thumbnail: fs.readFileSync('./storage/logos/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
let foto = './storage/logos/Ins.jpg'
let texto = `*Sígueme en ig Cuenta oficial* *Que tenga un Buen dia*
${ivan}`
await conn.sendFile(m.chat, foto, 'Curiosity.jpg', texto, estilo)}

handler.tags = ['main']
handler.command = /^Cuentaig|Cuentaoficial|Cuentaofc$/i
handler.exp = 35
handler.register = true
export default handler