//Obtenir l'element pa ID
const titre = document.getElementById('titre_de_page');
console.log(titre);// <h1 id = "titre_de_page">Apprenons javascript moderne</h1>

//Obtenir les elements par le nom d'une class
const errors = document.getElementsByClassName('error');
console.log(errors); //U²ne HTMLCollection

/*HTMLCollection est un peu different de NodeList
car il ne prend pas en charge la methode [forEach]*/

//pour acceder a errors
console.log(errors[0]);
console.log(errors[1]); // <p class="error">Je suis un message d'erreur</p>

//Obtenir un element par le nom de la balise
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0])

