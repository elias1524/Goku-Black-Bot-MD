let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `PARA LOS QUE QUIERAN PATROCINARNOS EN SUS PROYECTOS

*✨ HOLA BIENVENIDO/A TE PRESENTO OLYMPUS-HOST*

*¿QUE ES OLYMPUS-HOST*
_PLATAFORMA DONDE PUEDES ALOJAR MÚLTIPLES PROYECTOS A LARGO ALCANZE CON MUCHOS IDIOMAS Y CUSTOMIZADO_

*¿QUE VENTAJAS TIENE Y QUE DIFERENCIA DE OTROS HOTS?*
_LA DIFERENCIA ES QUE LA MAYORIA DE HOST MANTIENEN SOLO LOS LENGUAJES DE PROGRAMACION HABITUALES COMO "JAVASCRIPT" - "HTML" - "PYTHON" ADEMAS DE QUE ESTOS PUEDEN COSTAR UN CIERTO COSTO Y/O ALCANCE ADEMAS DE QUE NO PUEDES ALOJAR TANTOS DEBIDO A ALGUNA LIMITACIÓN O SU DEBIDO DINERO._

_OLYMPUS-HOST ES UN LUGAR GRATUITO DONDE TAMBIÉN ADEMAS DE QUE TENGAS UNA CUENTA, PUEDES CONECTAR TUS PROYECTOS PRIVADOS/PUBLICOS DE GITHUB, AMPLIO SISTEMA DE SOPORTE Y CUSTOMIZACION_

_🌟 CONTAMOS CON SOPORTE GARANTIZADO Y EXTRA_

_CONTAMOS CON AMPLIA VARIEDAD DE FORMATOS O LENGUAJES COMO PHP / PYTHON / JAVA / JAVASCRIPT / TYPESCRIPT / REACT / ANGULAR / ETC_

*¿PUEDO LLEGAR A PAGARLO O OBTENER OTRAS FUNCIONES?*
_SI, CONTAMOS CON UNA VERSION "VIP" O "PRO" EL CUAL PERMITE AL USUARIO  USAR LENGUAJES PERZONALIZADOS O DIRECTAMENTE CARGAR SU PROPIO SISTEMA DE LENGUAJE Y UN PROPIO LUGAR DONDE PODRAS TENER TUS PROYECTOS Y SISTEMA PRIVADOS CON MAS FUNCIONES._

*¿COMO PUEDO INICIAR?*
_INICIAS O ALOJAS DE FORMA GRATUITA CON 4GB DE ESPACIO PARA CUALQUIER ESPECIALIDAD Y SI QUIERES AUMENTARLO ES PAGANDO DE FORMA VIP O EN SORTEOS OFICIALES_

*_CANAL DE WHATSAPP_*
_https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J_

*_CREADOR_*
_wa.me/593979133620_

*_PAGOS PARA EL VIP_*
_wa.me/593979133620_
*\`🍁 Te presentamos un nuevo server: "OLYMPUS-HOST"\`*

*¿Muy lento tu Samsung J1 y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para que tengas activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*PRECIOS*

• 1GB, 100CPU = 1 dólar

• 2GB, 120CPU = 2,50 dólares

• 3GB, 140CPU = 3,50 dólares

• 4GB, 175CPU = 4,50 dólares

• 5GB, 200CPU = 5,50 dólares

🔵 \`\`\`Información del Server\`\`\`

💻 *Página:*


💙 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J

📱 *Contacto*
wa.me/593979133620`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `✨ OLYMPUS-HOST ✨`,
body: `✔️ Servidor de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: '', 
sourceUrl: 'https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J'}}},
{ quoted: fkontak})
}
handler.tags =['info'] 
handler.help = ['olympus', 'host', 'Obte'] 
handler.command = /^(olympus|servidor|Hostt|server)$/i
export default handler
