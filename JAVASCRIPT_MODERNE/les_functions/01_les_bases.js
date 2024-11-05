//Declaration d'une fonction 
function salutation(){
    console.log('Bonjour le monde !');
}

//Appeletion d'une fonction
salutation(); //Bonjour le monde !

//Expression fonctionnelle
const salutation2 = function(){
    console.log('Bonjour les amis');
}

salutation2(); //Bonjour les amis

//fonction avec [argument ou paramettre]
const addition = function(a, b){
    const resutat = a + b;
    console.log(`${a} + ${b} = ${resutat}`)
}
addition(4,5); //9

//fonction avec [argument ou paramettre] qui retourne une valeur
const addition2 = function(a,b,c){
    const somme = a + b + c;
    return somme;
}
const resutat = addition2(1, 4, 9)
console.log(resutat); //14

//Default parameter [parametre par defaut]
const multiplicationPar2 = function(x, y=2){
    console.log(`${x} mutiplié par 2 est : ${x*y}`);
}
multiplicationPar2(5); //10

//Arrow function [fonction flèchée] sans parametre
const arrowFunction1 = () => console.log('Fonction flechée sans parametre');
arrowFunction1(); //Fonction flechée sans parametre

//Arrow function avec un seul parametre

const arrowFunction2 = nom => console.log('Bonjour ' + nom);
arrowFunction2('tayoro'); //Bonjour tayoro

// Arrow function avec plusieurs parametre et plusieurs lignes de code 
const arrowFunction3 = (a, b) =>{
    const res = a*b;
    console.log(`${a} multiplié par ${b} est: ${res}`)
}
arrowFunction3(6, 10); //16