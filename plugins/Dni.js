javascript
// Definir un array de cartas
const cards = ["Corazón", "Diamante", "Pica", "Trébol"];

// Elegir una carta aleatoria
const randomIndex = Math.floor(Math.random() * cards.length);
const randomCard = cards[randomIndex];

// Adivinar la carta
const playerGuess = prompt("Adivina la carta (Corazón, Diamante, Pica, Trébol):");

// Verificar si la adivinanza es correcta
if (playerGuess.toLowerCase() === randomCard.toLowerCase()) {
    console.log("¡Adivinaste la carta! Era " + randomCard + ".");
} else {
    console.log("Incorrecto. La carta era " + randomCard + ".");
}