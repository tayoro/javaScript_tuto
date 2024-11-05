/* Map : fonctionne comme un objet literal
c'est un enesemble de données paires [clé-valeur]
mais la [clé] doit etre unique
*/

//La declaration d'un Map
let map = new Map();

//La methode [set()] pour faire l'ajout ou l'affectation
map.set('nom', 'tayoro');
map.set('age', 30);

//Affichage du Map en console
console.log(map);


//clé unique 
map.set('nom', 'Darken Raal')
console.log(map);

/*Si on affecte une donnée paire avec une clé qui existe deja dans le map 
alors il ya une modification de valeur */


//Pour obtenir le nombre d'element d'un Map
console.log(map.size); //2

//Pour obtenir un element du Map
console.log(map.get('nom')); //Darken raal
console.log(map.get('age')); //30

//Verification si un element fait partie de Map
console.log(map.has('nom'));// true

//Obtenir les [clés] ou [valeurs]
console.log(map.keys()); //nom, age
console.log(map.values()); //Darken raal, 30

//La methode forEach
map.forEach(element => console.log(element));

//supression d'un elements du Map
map.delete('nom');

//supression de tous les elements du Map
map.clear();
console.log(map); // vide 

