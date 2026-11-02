let w = Number(prompt("Saisir un nbr supérieur ou égal à 2 :"));
let estPremier = true;

if (w < 2) {
    estPremier = false;
} else {
    for (let i = 2; i < w; i++) {
        if (w % i === 0) {
            estPremier = false;
            break; 
        }
    }
}
if (estPremier) {
    console.log(w + " est premier");
} else {
    console.log(w + " n'est pas premier");
}
