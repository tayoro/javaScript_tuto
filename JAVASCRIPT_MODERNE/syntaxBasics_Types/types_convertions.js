//Convertion d'un String en Number
let likes = '100';

let resultat =likes + 1;
console.log(resultat); // 1001
console.log(typeof resultat); //string

//1. Premiere medhode
let conversionNumber = +likes ;
console.log(conversionNumber +  1);//101
console.log(typeof conversionNumber);//number

//2. Deuxieme methode
let conversionNumber2 = Number(likes);
console.log(conversionNumber2 + 1); //101
console.log(typeof conversionNumber2);//number


//Convertion de Number en String
let nbre = 30;

let resultat1 =nbre + 1;
console.log(resultat1); // 31
console.log(typeof resultat1); //number

let conversionString = String(nbre);
console.log(conversionString + 1); //301
console.log(typeof conversionString);//string






