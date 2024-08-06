import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/53dc136ca4fdf6d852d8b.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*BERMUDA*`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `BERMUDA`,
body: `BERMUDA`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/53dc136ca4fdf6d852d8b.jpg', 
sourceUrl: ''}}},
{ quoted: fkontak})
}
handler.tags =['Bermuda'] 
handler.help = ['Bermuda', 'Bermuda', 'Bermuda'] 
handler.command = /^(Bermuda|Bermuda|Bermuda|Bermuda)$/i
export default handler