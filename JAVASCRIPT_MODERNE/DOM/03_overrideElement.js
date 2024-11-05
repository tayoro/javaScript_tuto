// acceter a la balise p 
const para = document.querySelector('p');
var contenu_e = para.innerHTML; 
console.log(contenu_e); // Bonjour tout le monde !

//Modification du contenu d'un paragraphe
para.innerHTML = 'Nous decolons deja avec Js';
 
//Ajouter du text a un paragraphe existant
para.innerHTML += ' , Merci Dr tayoro';

//Modification de tous les paragraphes
const paras = document.querySelectorAll('p');

paras.forEach(para => para.innerHTML = 'ok c\'est compris')

paras.forEach(para => para.innerHTML += ' Nouveau text ajouter')



//Modificarion de la balise HTML
let contenu = document.querySelector('.contenu');
console.log(contenu);

//Modification
contenu.innerHTML += '<h2>Ravis d\'apprendre Js</h2>'

//Similation des données 
let noms = ['Tayoro', 'Dido', 'Romaric']
noms.forEach(nom =>{
    contenu.innerHTML += `<h3>${nom}</h3>` ;
})

