/*
Une application souhaite normaliser un nom saisi avec des espaces inutiles.
• Demander un nom avec prompt() (ex. « el amrani »).
• Supprimer les espaces situés au début et à la fin du texte.
• Afficher le nom nettoyé, sa version en majuscules, sa version en minuscules et le nombre de caractères
du nom nettoyé.
Exemple de résultat : « el amrani » ; « EL AMRANI » ; « el amrani » ; longueur = 10.
Indication : Utiliser trim(), toUpperCase(), toLowerCase() et length. Les espaces intérieurs sont conservés.
*/

/*let nom = prompt("Entrez un nom :");
let nomNettoye = nom.trim();
let nomMajuscules = nomNettoye.toUpperCase();
let nomMinuscules = nomNettoye.toLowerCase();
let longueurNom = nomNettoye.length;

console.log(`Nom nettoyé : "${nomNettoye}"`);
console.log(`Version en majuscules : "${nomMajuscules}"`);
console.log(`Version en minuscules : "${nomMinuscules}"`);
console.log(`Longueur du nom nettoyé : ${longueurNom}`); */


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Entrez un nom : ", (nom) => {
    let nomNettoye = nom.trim();
    let nomMajuscules = nomNettoye.toUpperCase();
    let nomMinuscules = nomNettoye.toLowerCase();
    let longueurNom = nomNettoye.length;

    console.log(`Nom nettoyé : "${nomNettoye}"`);
    console.log(`Version en majuscules : "${nomMajuscules}"`);
    console.log(`Version en minuscules : "${nomMinuscules}"`);
    console.log(`Longueur du nom nettoyé : ${longueurNom}`);

    rl.close();
});
