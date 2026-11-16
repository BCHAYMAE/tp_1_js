const i = new Set();
i.add("ali");
i.add("sara");
i.add("ali");
i.add("lina");

console.log("nbr:", i.size);
console.log("sara inscrite ?", i.has("sara"));
console.log("sara inscrite ?", i.has("oumi"));
console.log("sara inscrite ?", i.delete("sara"));

for (const nom of i){
    console.log("participant : ", nom)
}
i.clear();
console.log("apres clear :", i.size);