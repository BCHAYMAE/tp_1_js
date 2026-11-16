let phrase = prompt("entrer une phrase");
phrase = phrase.toLowerCase().replaceAll(" ","");
let i=0;
let j= phrase.length-1;
let palindrome= true ;
while(i<j){
    if(phrase[i] === " "){
        i++;
        continue;
    }
    if(phrase[j] === " "){
        j--;
        continue;
    }
    if (phrase[i] !== phrase[j]){
        palindrome = false;
        break;
    }
    i++;
    j--;
}
if(palindrome){
    console.log(true);
} else {
    console.log(false)
}