let t = [10, 20, 30, 40, 50];
console.log("tableau initial:", t);
console.log("Nombre d element:", t.length);

//t.length: nbr of elements in the array
//t[0]: the indexes 0 for the first element in the array


//Ajouter et supprimer:
t.push(60); //add in the end of the array
console.log("apres push:", t);

t.pop();
console.log("apres pop:", t); //delete from the end of the array

t.unshift(5);
console.log("apres unshift:", t);//add in the begining of the array

t.shift();
console.log("apres shift", t);//delete from the begining of the array


//rechercher un element
console.log(t.includes(30)); //true cause it does exist in t
console.log(t.includes(100)); //false does not exist in t 
console.log(t.indexOf(30)); //2 placed in the third place
console.log(t.indexOf(100)); //-1 


//extraire et remplacer
let partie = t.slice(1, 4);
console.log("Partie extraite:", partie);
console.log("tableau original :", t);

//t.splice(2, 1, 99);
//t.splice(2, 2, 99);
t.splice(2, 0, 99);
//t.splice(2, 1);

console.log("apres splice:",t);

//trier et inverser :
t.sort((a, b) => a-b);
console.log("tri croissant :", t);
t.sort((a, b) => b-a);
console.log("tri decroissant :", t);
t.reverse();
console.log("apres reverse :", t);


//transformer et filtrer
let doubles = t.map(x => x*2);
console.log("")


let ts = [4, 8, 2, 6]
//calculer, parcourir et convertir
let somme = ts.reduce((s, x) => s+x, 0);
console.log("somme :", somme);
ts.forEach(x => console.log("valeur:", x))
let texte = t.join("-");
console.log("chaine obtenue :", texte);

//1. que represente : 
//s store la valeur accumuler
//x la valeur ajouter
//0 la valeur unitiale de x

//synthese:
// push(): add element in the end of the array
//pop(): delete element in the end of the array
//unshift(): add element in the begining of the array
//shift(): delete element from the begining of the array
//includes(): true if does exist false if not
//indexOf(): its place 
//slice(): copier une partie sans modifier
//splice():
//sort():order 
//reverse(): 
//map(): parcourir 
//filter(): selectionner
