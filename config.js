/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['595972157130', '⺪⃢łV₳₦🇵🇾⃢乂', true],
['51929972576', 'Axx', true],
['5491168758497', '༊⃢ＳＩＣＫ•ᴇɴᴢᴏ ᴍᴀᴛɪᴀꜱ༃⃢🇦🇷', true],
['5493794297363', 'Gabriel Ofc', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['595972157130']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = '🌸 Goku-Black-Bot-MD🐼'
global.author = '⺪⃢łV₳₦🇵🇾⃢乂'
global.wm = ' ✨ 𝐆𝐨𝐤𝐮-𝐁𝐥𝐚𝐜𝐤-𝐁𝐨𝐭-𝐌𝐃 💥'
global.wm2 = '☄️ 𝑮𝒐𝒌𝒖-𝑩𝒍𝒂𝒄𝒌-𝑩𝒐𝒕-𝑴𝑫 🌟'
global.jxtxn = '⺪⃢łV₳₦🇵🇾⃢乂'
global.cb = '🍧 𝙶𝚘𝚔𝚞-𝙱𝚕𝚊𝚌𝚔-𝙱𝚘𝚝-𝙼𝙳 🍭'
global.fakename = '𝑮𝒐𝒌𝒖-𝑩𝒍𝒂𝒄𝒌-𝑩𝒐𝒕-𝑴𝑫'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'BY ⺪⃢łV₳₦🇵🇾⃢乂'
global.devnum = '+595972157130'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
