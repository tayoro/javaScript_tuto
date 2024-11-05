// 1) Les nombres réguliers en JavaScript sont stockés au format 64 bits IEEE-754 , 
// également connu sous le nom de « nombres à virgule flottante double 
// précision ». Ce sont des nombres que nous utilisons la plupart du 
// temps, et nous en parlerons dans ce chapitre.

// Les nombres BigInt représentent des entiers de longueur arbitraire. 
// Ils sont parfois nécessaires car un nombre entier régulier ne peut 
// pas être supérieur ou inférieur à , comme nous l'avons mentionné 
// précédemment dans le chapitre Types de données . 
// Comme les bigints sont utilisés dans quelques domaines particuliers,
// nous leur consacrons un chapitre spécial BigInt .(253-1)-(253-1)

//Plus de façons d'écrire un nombre

let billion = 1000000000;
let billionn = 1_000_000_000;


let billionnn = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)


1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000


let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1


//En d'autres termes, un nombre négatif après "e"signifie une division par 1 avec le nombre donné de zéros :
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


//Nombres hexadécimaux, binaires et octaux
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides




//toString(base)




//La méthode num.toString(base)renvoie une représentation sous forme de chaîne numdans le système numérique avec le base.
let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

//Le basepeut varier de 2à 36. Par défaut c'est 10.

alert( 123456..toString(36) ); // 2n9c
//Veuillez noter que deux points dans 123456..toString(36)
//n'est pas une faute de frappe. Si nous voulons appeler une 
//méthode directement sur un nombre, comme toStringdans l'exemple ci-dessus, 
//nous devons placer deux points ..après.
(123456).toString(36)



//Arrondi




Math.floor
//Arrondit à l'inférieur : 3.1devient 3, et -1.1devient -2.

Math.ceil
//Arrondit au supérieur : 3.1devient 4, et -1.1devient -1.

Math.round
//Arrondit à l'entier le plus proche : 3.1devient 3, 3.6devient 4, 
//la casse médiane : 3.5arrondit à 4trop.

Math.trunc
//Supprime tout ce qui se trouve après la virgule décimale sans arrondi : 3.1devient 3, -1.1devient -1.


let numm = 1.23456;
alert( Math.round(numm * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

let nummm = 12.34;
alert( nummm.toFixed(1) ); // "12.3"

let numx= 12.36;
alert( numx.toFixed(1) ); // "12.4"

let numb = 12.34;
alert( numb.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits



//Tests : isFinite et isNaN
//il existe donc des fonctions spéciales pour les vérifier :
//isNaN(value)convertit son argument en nombre puis le teste pour être NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

//isFinite(value)convertit son argument en nombre et retourne true si c'est un nombre normal, 
//pas NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

//Parfois isFinite est utilisé pour valider si une valeur de chaîne est un nombre normal :
let numa = +prompt("Enter a number", '');
// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(numa) );


//Les méthodes Number.isNaN et Number.isFinite sont les versions 
//les plus « strictes » des fonctions isNaNet isFinite. Ils ne convertissent 
//pas automatiquement leur argument en nombre, mais vérifient s'il appartient 
//au numbertype à la place.

//Number.isNaN(value)renvoie true si l'argument appartient au numbertype 
//et s'il est NaN. Dans tous les autres cas, il revient false.
alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true
lert( Number.isNaN("str") ); // false, car "str" ​​appartient au type de chaîne, pas au type de nombre
alert( isNaN("str") ); // true, car isNaN convertit la chaîne "str" ​​en un nombre et obtient NaN à la suite de cette conversion

//Number.isFinite(value)renvoie true si l'argument appartient 
//au numbertype et qu'il ne l'est pas NaN/Infinity/-Infinity. Dans tous les autres cas, il revient false.
alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); //false
alert( Number.isFinite(2 / 0) ); // false

// Note the difference:
alert( Number.isFinite("123") ); // false, parce que "123" appartient au type chaîne, pas au type nombre
alert( isFinite("123") ); // true, car isFinite convertit la chaîne "123" en un nombre 123

//Comparaison avecObject.is
//Il existe une méthode intégrée spéciale Object.is qui compare des valeurs telles que ===, mais qui est plus fiable 
//Dans tous les autres cas, Object.is(a, b)est identique à a === b.



//parseInt et parseFloat



//Mais dans la vraie vie, nous avons souvent des valeurs en unités, 
//comme "100px"ou "12pt"en CSS. De plus, dans de nombreux pays, 
//le symbole monétaire vient après le montant, nous avons donc "19€"et 
//aimerions en extraire une valeur numérique.
//C'est à cela que servent parseIntet parseFloat.

//La fonction parseIntrenvoie un entier, tandis que parseFloatrenverra 
//un nombre à virgule flottante :
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

//The parseInt() function has an optional second parameter. 
//It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456



//Other math functions



Math.random()
//Returns a random number from 0 to 1 (not including 1).
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

Math.max(a, b, c)
Math.min(a, b, c)
//Returns the greatest and smallest from the arbitrary number of arguments.
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1


Math.pow(n, power)
//Returns n raised to the given power.
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024