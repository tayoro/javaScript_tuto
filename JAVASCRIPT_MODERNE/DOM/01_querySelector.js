//Sauvergarde la reference d'element dans un variable 
const para = document.querySelector('p');
console.log(para); //<p>Bonjour le monde</p>

//Selection d'un element avec reference par  (ID)
const titre = document.querySelector('#titre_de_page')
console.log(titre);

//Selection d'un element avec reference par  (class)
const para2 = document.querySelector('.error');
console.log(para2)

//Selection complexe d'un element 
const divError = document.querySelector('div.error')
console.log(divError);

//Obetenir la reference d'une reference a partir naviagteur 
const refNav = document.querySelector('body > h1');
console.log(refNav);

//Selectionne multiples elements 
const paras = document.querySelectorAll('p');
console.log(paras)

//Pour selectionner un element dans le NodeList
console.log(paras[0]);

//Utilisons [forEach] pour faire parcourrir le NodeList
paras.forEach((para) => {console.log(para)});

//Selectionner toutes les classes qui ont le meme nom (class)
const errors = document.querySelectorAll('.error');
console.log(errors);