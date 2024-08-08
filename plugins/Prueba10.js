const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = 'TU_TOKEN_DE_BOT_AQUI'; // Reemplaza con tu token de bot

// Baraja de cartas
const suits = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
const values = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Función para obtener una carta aleatoria
function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return `${value} de ${suit}`;
}

// Evento cuando el bot está listo
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Maneja los mensajes entrantes
client.on('messageCreate', message => {
    if (message.content.startsWith('!jugar')) {
        const card = getRandomCard();
        
        // Crea una carta (embed)
        const cardEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('¡Tu Carta!')
            .setDescription(`La carta que sacaste es: ${card}`)
            .setFooter('¡Buena suerte en tu juego!')
            .setTimestamp();

        // Envía la carta al canal donde se ejecutó el comando
        message.channel.send({ embeds: [cardEmbed] });
    }
});

// Inicia el cliente
client.login(TOKEN);
