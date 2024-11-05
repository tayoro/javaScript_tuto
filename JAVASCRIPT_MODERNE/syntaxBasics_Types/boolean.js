/*Le type de données de nos jour parmet de faire la manipulaition 
de la valeur fausse ou vrai */

console.log(true, false);

// methode pourvant nous retourner un boulean
let email = 'email@gmail.com'

console.log(email.includes('@')); //true
console.log(email.includes('X')) //false

//Les operateurs de comparaison [==, !=, >, <, >=, <=]
let age = 25;
let nom = 'Musole'

console.log(age == 25); //true
console.log(age != 25); //false 
console.log(age > 25); //false
console.log(age < 25); //false
console.log(age >= 25); //true 
console.log(age <= 25); //true
console.log(nom == 'musole'); //false
console.log(nom != 'musole'); //true

//Unse fausse implementation
console.log(age == '25'); //true
console.log(age != '25'); //false 

// voici une meilleure approche pour la comparaison
console.log(age === '25'); //false
console.log(age !== '25'); //true
console.log(age === 25); //true
