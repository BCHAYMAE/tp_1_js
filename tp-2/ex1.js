let valeur=32;
let unite="F";

let convert;
switch (unite){
    case "C":{
        let F=valeur*9/5+32;
        console.log(F);
        break;
    }
    case "F":
        let C=(valeur-32)*5/9.
        console.log(C);
        break;

    default:
        console.log("Erreur");
        break;
}