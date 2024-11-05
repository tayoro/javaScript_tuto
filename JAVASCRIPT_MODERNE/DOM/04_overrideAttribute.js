//Affectation a la reference 
const lien = document.querySelector('a')
console.log(lien.getAttribute('href'));

//Modification de l'attribut
lien.setAttribute('href', 'https://www.facebook.com');
lien.innerHTML='consulter facebook';

//Pour le paragraphe error
const errosMsg = document.querySelector('p');
errosMsg.setAttribute('class', 'success');
errosMsg.setAttribute('style', 'color: red ; background:black;')
errosMsg.innerHTML="success";

