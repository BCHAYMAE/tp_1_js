/*
On dispose de deux variables a = 8 et b = 15.
• Afficher leurs valeurs initiales.
• Permuter les valeurs de a et b à l’aide d’une variable temporaire.
• Afficher les deux valeurs après permutation.
Exemple de résultat : Avant : a = 8, b = 15 ; après : a = 15, b = 8.
*/

let a = 8;
let b = 15;
let c = a;
a=b;
b=c;
console.log(`Avant : a = 8, b = 15 ; après : a = ${a}, b = ${b}.`);
