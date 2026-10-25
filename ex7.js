/*
Un étudiant a obtenu 12/20, 14/20 et 17/20, avec les coefficients 2, 3 et 1.
• Déclarer trois notes et leurs trois coefficients.
• Calculer la somme pondérée, puis la somme des coefficients.
• Calculer la moyenne pondérée et l’afficher avec deux chiffres après la virgule.
Exemple de résultat : Moyenne = 13.83/20.
Indication : La méthode toFixed(2) sert à formater l’affichage.
*/

let n1=12;
let n2=14;
let n3=17;
let c1=2;
let c2=3;
let c3=1;
let somme_ponderee = (n1*c1)+(n2*c2)+(n3*c3);
let somme_coeff = c1+c2+c3;
let moyenne_ponderee = somme_ponderee/somme_coeff;
console.log(`Moyenne = ${moyenne_ponderee.toFixed(2)}/20.`);