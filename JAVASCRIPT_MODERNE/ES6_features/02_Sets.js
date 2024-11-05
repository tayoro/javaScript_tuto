/*Set ; fonctionne comme un array (tableau)
mais avec des valeurs uniques 
C'est le meilleur moyen de retirer les doublons dans un array
*/

const noms = ['Tayoro', 'Dido', 'Don', 'Tayoro', 'Dido'];
console.log(noms);//['Tayoro', 'Dido', 'Don', 'Tayoro', 'Dido'];

//Declaration du Set
const set = new Set(['Tayoro', 'Dido', 'Don', 'Tayoro', 'Dido'])
console.log(set); //{'Tayoro', 'Dido', 'Don'}

//Ajout d'un element dans le Set 
set.add('Gloria');
console.log(set); //{'Tayoro', 'Dido', 'Don', 'Gloria'}

//Supression d'un elment
set.delete('Don');
console.log(set); //{'Tayoro', 'Dido', 'Gloria'}

//Verification si un element fait partie de Set
console.log(set.has('Tayoro')); // true   car tayoror exite

//Obtenir les [valeurs]
console.log(set.values());//{'Tayoro', 'Dido', 'Gloria'}

//La methode forEach
set.forEach(element => console.log(element))

//supression de tous les elements du Set
set.clear();
