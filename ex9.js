/*
On connaît une durée de 7 385 secondes. On veut l’exprimer en heures, minutes et secondes.
• Déclarer la durée totale en secondes.
• Calculer les heures entières, puis les minutes restantes et les secondes restantes.
• Afficher le résultat dans une phrase.
Exemple de résultat : 7 385 secondes = 2 h 3 min 5 s.
Indication : Utiliser Math.floor() pour la division entière et l’opérateur % pour le reste.
*/
let dureeTotale = 7385;
let heures = Math.floor(dureeTotale / 3600);
let minutes = Math.floor((dureeTotale % 3600) / 60);
let secondes = dureeTotale % 60;
console.log(`${dureeTotale} secondes = ${heures} h ${minutes} min ${secondes} s.`);