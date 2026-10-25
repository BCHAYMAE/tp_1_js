/*
Exercice 6 — Conversion de température
Récupérer une température en degrés Celsius saisie par l’utilisateur.
• Utiliser prompt() pour demander la température et Number() pour la convertir en nombre.
• Calculer sa valeur en degrés Fahrenheit avec F = C × 9 / 5 + 32.
• Afficher la température initiale et la température convertie.
Exemple de résultat : Pour 25 °C : 77 °F.
Indication : La valeur renvoyée par prompt() est une chaîne de caractères.
*/

let celsius  = Number(prompt("Entrez la température en degrés Celsius :"));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`Pour ${celsius} °C : ${fahrenheit} °F.`);