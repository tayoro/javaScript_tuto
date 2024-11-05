//Déclaration

let arr = new Array();
//ou
let arra = [];

let fruit = ["Apple", "Orange", "Plum"];

//Les éléments du tableau sont numérotés, en commençant par zéro.
//On peut obtenir un élément par son numéro entre crochets :
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

//On peut remplacer un élément :
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

//… Ou ajoutez-en un nouveau au tableau :
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

//Le nombre total d'éléments dans le tableau est son length:
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3

//Nous pouvons également utiliser alertpour afficher l'ensemble du tableau.
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum

//Un tableau peut STOCKER des éléments de N'IMPORTE QUEL TYPE.
// mix of values
let arrb = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arrb[1].name ); // John

// get the function at index 3 and run it
arrb[3](); // hello




//Obtenir les derniers éléments avec "at"

//Disons que nous voulons le dernier élément du tableau.
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

        //deuxieme façons 
//Heureusement, il existe une syntaxe plus courtefruits.at(-1) :
let fruits = ["Apple", "Orange", "Plum"];
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

        //Méthodes qui fonctionnent avec la fin du tableau :
//Extrait le dernier élément du tableau et le renvoie
pop()
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

//Ajoutez l'élément à la fin du tableau
push() 
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear
//L'appel fruits.push(...)est égal à fruits[fruits.length] = ....


        //Méthodes qui fonctionnent avec le début du tableau :
//Extrait le premier élément du tableau et le renvoie
shift()
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear


//Ajoutez l'élément au début du tableau
unshift()
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear


//Concatener deux tableaux
concat()
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruit.concat(['romaric', 'dido'])); //["Apple", "Orange", "Pear", 'romaric', 'dido']


//Boucles

let arrc = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arrc.length; i++) {
  alert( arrc[i] );
}

//Mais pour les tableaux ,il existe une autre forme de boucle for..of:
let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}




//new Array()

let arrd = new Array("Apple", "Pear", "etc");

//Si new Arrayest appelé avec un seul argument qui est un nombre, 
//il crée un tableau sans éléments, mais avec la longueur donnée .
let arre = new Array(2); // will it create an array of [2] ?
alert( arre[0] ); // undefined! no elements.
alert( arre.length ); // length 2





//Tableaux multidimensionnels

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  alert( matrix[1][1] ); // 5, the central element

//Les tableaux ont leur propre implémentation de toStringméthode qui renvoie 
//une liste d'éléments séparés par des virgules.
let arrf = [1, 2, 3];
alert( arrf ); // 1,2,3
alert( String(arrf) === '1,2,3' ); // true

//autre 
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
//pareil
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"