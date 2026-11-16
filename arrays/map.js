const stock = new Map();
stock.set("stylo", 12);
stock.set("cahier", 8);
stock.set("gomme", 5);
stock.set("stylo", 15); //mise a jour
console.log("stylos :" , stock.get("stylo"));
console.log("stylo existe ?", stock.has("stylo"))
console.log("produit :", stock.size);
for (const cle of stock.keys()) console.log("cle :", cle)
for (const valeur of stock.values()) console.log("valeur :", valeur)

    for (const [produit, quantite] of stock.entries()){
        console.log(produit, ":" , quantite)
    }

console.log("gome supprimer ?", stock.delete("gomme"));
console.log("apres suprression:", stock.size)
stock.clear();
console.log("apres clear :", stock.size);


