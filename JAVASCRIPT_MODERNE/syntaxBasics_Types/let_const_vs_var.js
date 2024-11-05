var amies = ['Luis', 'Brice', 'Annet'];

for(let i=0; i<amies.length; i++){
    console.log(i, amies[i]); // 0, 'Luis'   1, 'Brice'  2, 'Annet'
}
console.log(i + 'ok') // erreur 


//NB: "const" ne peut as etre reafecter 
//  "var" on peut l'acceder en dehor des blocks des codes
// "let" on ne peux pas l'acceder en dehor des blocks des codes


const amis = ['Jack', 'Durant', 'Ive'];
//deux facons de boucle for
for (ami of amis) console.log(ami)
