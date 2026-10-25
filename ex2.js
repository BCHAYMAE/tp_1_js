/*
Créer un court message de présentation à partir de variables.
• Déclarer nom = « Amine », filiere = « Informatique » et niveau = 1.
• Construire une phrase à l’aide de la concaténation ou d’un modèle de chaîne.
• Afficher : « Je suis Amine, étudiant en Informatique, niveau 1. »
Exemple de résultat : Je suis Amine, étudiant en Informatique, niveau 1.
*/

let nom = "Amine";
let filiere = "Informatique";
let niveau = 1;
const message = `je suis ${nom},etudiant en ${filiere},niveau ${niveau}`;
console.log(message);