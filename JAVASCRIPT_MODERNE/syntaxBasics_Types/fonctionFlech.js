//ES5
var addition = function(x, y){
    return x + y
}
console.log(addition(2, 3));



//ES6
// une seul ligne de code 
var add = (x, y) => x + y ;
console.log(add(2, 3));

//plusieurs lignes de code 
var soust = (x , y) => {
    console.log('voici la soustration de deux nombre');
    return x - y ;
}
console.log(soust(2, 3)); 

// un seul paramettre
const ditBonjour = nom => console.log(`bonjour ${nom}`);
ditBonjour('tayoro') // bonjour tayoro

//NB: - ajouter les accolade {} pour une fonction qui a plus d'une seule ligne de code
//    - on peut supprimer les parenthese () s'il a un seul parametre 

//Parametre par defaut 
const multiplicationPar2 = (x, y=2) => x * y
console.log(multiplicationPar2(4)) // 4*2 = 8
console.log(multiplicationPar2(4, 3)) // 4*3 = 12
