const nom = 'Amani Bissimwa';
const age = 30;


//Concatenation
console.log('Mon nom est ' + nom + ' et j\'ai ' + 30 +' ans' );

//Template string
const msg = `Mon nom est ${nom} et j'ai ${age} ans`;

let html = `
    <h2>${nom}</h2>
    <span>${age}</span>
`;
console.log(html);

console.log(msg);
console.log(msg.length) //4O

console.log(msg.includes('nom')) // True;  inclucles('nom') verifie si 'nom' est inclu dans msg
console.log(msg.startsWith('Mon')) // True;   startsWith verfie si ça commence avec un 'Mon'
console.log(msg.endsWith('ans'))// true ;    endsWith verifie si ça fini avec un 'ans'

const mot = "Blaise Pascale"
console.log(mot); //Blaise Pascale

//Methode sans arguments ou parametres
console.log(mot.toUpperCase()); //BLAISE PASCALE
console.log(mot.toLowerCase());  //blaise pascale

//Methode sans arguments ou parametres
console.log(mot.indexOf('B')); // 0 (la position de 'B')
console.log(mot.slice(0, 8)); //Blaise P (les caractere quison entre 0 et 8)
console.log(mot.replace('M', 'S'))


const text = '     bonjour le monde     '
console.log(text);
console.log(text.replace(/^\s+|\s+$/gm, ''));  // supprime tous les espaces debut et fin de notre chaine de caracter

const langage = 'javaScript';
for (let x of langage){
    let text2 = '';
    text2 += x + '/';
    console.log(text2);
}

let text3 = '';
for (let x of langage) text3 += x + '-' ; 
console.log(text3);


