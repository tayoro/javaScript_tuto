//Callback en Js c'est une fonction passé en paramentre
const myFun = (callbackFunc) =>{
    //implementation d'une suite d'instruction 
    let num = 100
    callbackFunc(num);
}

myFun((numero) => {  
    //implementer une suite d'instruction
    console.log(numero + 5) ;
});

//ForEach est utlisé pour interragir avec les elements d'une collection de données
let etudiants = ['Tayoro', 'Dido' ,'Romaric'];
etudiants.forEach((etudiant, index) => {console.log(index, etudiant)})

//ForEach avec un callback séparer
let composanteVoitures = ['siege', 'volant', 'vitre', 'capo']
const ListComposante = (composant, index) =>{console.log(`${index} salut ${composant}`)}
composanteVoitures.forEach(ListComposante);