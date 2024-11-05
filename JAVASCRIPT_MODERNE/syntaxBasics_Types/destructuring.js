const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
const chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//********Destructuring d'un tableau ********* 
//NB: respecte les position 
//const [a] = alphabets
//console.log(a); // accès a A

//const [a, b] = alphabets
//console.log(a, b); // accès à A et B

//const [a,,c] = alphabets;
//console.log(a, c) // accès à A et C

//const [a,, ...rest] = alphabets
//console.log(a, rest) // a et [C,D,E,F]

//Spread operator pour combiner deux tableaux 
const alphaNumeriques = [...alphabets, ...chiffres];
console.log(alphaNumeriques); //  ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const sommeEtMultiplication = (a, b) => [a+b, a*b]
console.log(sommeEtMultiplication(2, 3)) // [5, 6]

const [somme, multiplication] = sommeEtMultiplication(2, 3);
console.log(somme); // 5
console.log(multiplication); // 6



// ******Destructuration d'un objet******
// NB: les varriable identique 

const personne1 = {
    nnom: 'Tayoro',
    aage: 30,
    aadresse: {
        ville: 'avu',
        province: 'nord-kivu'
    }
}


const {nnom, aadresse:{vville, pprovince}} = personne1;
console.log(pprovince); // sud-kivu
console.log(nnom); // Tayoro


// affecter un nouvel element dans un objet qui "prenom"
const {pprenom='dido', aage }=personne1;
console.log(pprenom) // dido
console.log(aage) // 30

//concatener deux objets 
const personne = {
    nom: 'isac',
    age: 40,
    adresse: {
        ville: 'Bukavu',
        province: 'sud-kivu'
    }
}


const updatePersonne = {
    postnom: 'don',
    enfants:['Gloria', 'Yvette'],
}
const {prenom='israel',   ...rest} = personne;
const personne3 = {...personne, ...updatePersonne}
console.log(personne3)

// avec les fonctions 
const afficherUtilisateur = ({nom, age}) => `le nom est ${nom} et l'age est ${age}`
console.log(afficherUtilisateur(personne));









 
