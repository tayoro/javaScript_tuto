// la function map fontionne comme forEach et qui s'utilise sur un tableau
// c'est une methode qui permet de creer et qui retourne un nouveau tableau 

/*
const tab = ["Chien", "Chat", "Gorille", "Zebre"];

tab.map((animal, index) =>{
    if (index<2){
        console.log(index + ' '+ animal)
    }
})
*/

const tab = [
    {
        nom: "Antony",
        age: 27, 
        genre: "homme"
    },
    {
        nom: "julie",
        age: 24, 
        genre: "femme"
    },
    {
        nom: "Max",
        age: 17, 
        genre: "homme"
    }
]

//Syntaxe arry.map((element, index )=>{})
tab.map((personne, index) =>{
    if(personne.age>=18){
        console.log(personne.nom);
    }
})