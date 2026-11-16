const p = new Set(); //creation de set vide
//add 
p.add("ali");
p.add("sara");
p.add("lina");
p.add("ali");
p.add("omar");
p.add("sara");
//nbr du participant
console.log(p.size);
//demander un prenom et voir si inscrit
let b = prompt("Saisir votre prénom :");

if (b !== null) {
    console.log(p.has(prenomFormate)); 
} else {
    console.log("Saisie annulée.");
}

