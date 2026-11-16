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

//delete omar if exist
console.log("omar existe ?", p.delete("omar"));

for (const nom of p){
    console.log("list : ", nom)
}

//ex2
//1:
const stock = new Map();
stock.set("stylo", 12);
stock.set("cahier", 8);
stock.set("gomme", 5);

//2:
stock.set("stylo", 15);

//3:
if (stock.get("cahier") >= 3) {
    stock.set("cahier", stock.get("cahier") - 3);
} else {
    console.log("Stock insuffisant pour vendre 3 cahiers.");
}
//4:
for (const [produit, quantite] of stock.entries()){
        console.log(produit, ":" , quantite)
    }
//5:
console.log(stock);

//6:
console.log(sum(stock));