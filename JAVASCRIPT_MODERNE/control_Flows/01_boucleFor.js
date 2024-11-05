//Boucle [loop] : c'est un structure de controle
// qui permet de répéter un bloque de code 

//Boucle [for]
for(let i=0; i<5; i++){
    console.log('Interaction en boucle', i)
}
console.log("une instruction en dehors de la boucle")

//Parcourir les elements de la liste avec la boucle [for]
let noms = ['tayoro', 'Dido', 'Don', 'Romaric']
for(let i=0; i<noms.length; i++){
    console.log(i, noms[i]);
}