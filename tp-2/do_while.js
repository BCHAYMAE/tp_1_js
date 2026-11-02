do {
  x = Number(prompt("saisir un nombre entre 1 et 10 :"), 10);
} while (x < 1 || x > 10 || !Number.isFinite(x));

console.log("Nombre valide saisi : " + x);