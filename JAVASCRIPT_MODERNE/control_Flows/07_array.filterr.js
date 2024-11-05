// filter fonction comme forEach() et map() mais retourne un tableau
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


const tabFiltered = tab.filter((personne, index) =>{
    if(personne.genre === 'homme'){
        return personne;
    }
})
console.log(tabFiltered);