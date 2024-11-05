// Symbole de point d'interrogation en js (?)


let classe;
const compteBancaire = 1000 ;

//condition if (normale)
if (compteBancaire > 100) {
    classe = 'riche'
}else{
    classe = 'pauvre'
}
console.log(classe)

//1. Condition (ternary) opertor (operateur conditionnel (ternaire))
//condition ? exprIfTrue : exprIfFalse
const situationFinanciere = compteBancaire > 100 ? 'riche' : 'pauvre';
console.log(situationFinanciere)

// utilisation dans fonction
const poche = (argent) => {
    console.log(argent > 50 ? 'je peux acheter': 'je ne peux pas acheter ');
}
poche(3)

const rabais = (estMembre) => (estMembre>3 ? '2.00$':'10.00');
console.log(rabais(3));


//2. Optionnal chaining (?.) (l'achainement facultatif)
const personne = {
    nom: 'Amani',
    adresse:{
        ville: 'divo'
    }
}


if (personne.age) {
    age = personne.age
    console.log(age)
}else{
    console.log('age n\'exsite ');
}

console.log(personne?.age)


//3. Nullish coalescing (??) False (null, undefined)
const foo = null ?? 'par defaut '; // par defaut
const foa = undefined ?? 'merci'; // merci 
const fou = 'c\'est ok ' ?? 'par defaut'; // c'est ok 
console.log(fou);






