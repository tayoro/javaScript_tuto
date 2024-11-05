// homme = {
//     nom : 'tayoro',
//     prenom: 'dido',
//     age: 234,
// }

// let compter = 0;
// for (key in homme ){
//     alert(`la clef ${compter + 1} est ${key}`)
//     compter += 1
// }

// for (key in homme){
//     alert(`la valeur de ${key} est : ${homme[key]}`)
// }


// let user = {};
// let entrer = function(key,val){
//     user = {};
//     for(let i = 0 ; i<2 ; i++){
//         let key = prompt("entrer la key ");
//         let val = prompt(" entrer la valeur")
//         user[key]=val;
//     }
//     return user
// }

//const { is } = require("css-select");

// const { keys } = require("regenerator-runtime");



// // new
// let user2 = {}

// function addElement(key,value) {
//     user2[key]=value;
    
// }

// function loopingadd(taille) {
//     for (let index = 0; index < taille; index++) {
//         let key = prompt("entrer la key ");
//         let val = prompt(" entrer la valeur");
//         addElement(key,val);
//     }    
// }

// loopingadd(2);
// allkeys = Object.keys(user2); // rende l'objet une liste
// allkeys.forEach(element => {
//     alert(element);
// });



//***
// add salarie

// let salaries = {
//     john : 100,
//     ann : 160, 
//     Pete : 130,
// }

// function additionSalarie (objet){
//     let sum = 0;
//     for(let element in objet){
//         sum = sum + objet[element] ;
//     }
//     return sum;
// };

// function isVide(objet){
//     for (let key in objet){
//         return false;
//     }
//     return true;
// }

// let comptabilise = (isVide(salaries)==false) ? additionSalarie(salaries) : 0; 
// alert(comptabilise);

// let menu = {
//     width : 200,
//     height: 300,
//     title: "My menu",
// }


// function multplyNumeric(objet){
//     for ( let prop in objet){
//        if (typeof objet[prop] == 'number'){
//            objet[prop] = objet[prop] * 2;
//        }
//     }
// }

//object litteral 
let utilisateur = {
    nom : 'Musole',
    age : 25, 
    email : 'romaric@gmail.com', 
    location : 'DR cote d\'ivoir', 
    blogs : [
        {
            titre : 'Javascript pour debutant',
            likes : 30
        },
        {
            titre : 'Kotlin pour debutant ',
            likes : 70
        }
    ],
    afficherBlogs(){
        console.log('cet utilisateur a écris ces blog: ');
        this.blogs.forEach(blog =>{
            console.log(blog.titre, blog.likes);
        });
    }
};

//Affichage d'un attribut d'un objet 
console.log(utilisateur);
console.log(utilisateur.nom); // Musole
console.log(utilisateur.blogs[0].titre); // Javascript pour debutant

//Réaffectation d'une valeur à un attribut
console.log(utilisateur.nom = 'tayoro') // tayoro

//Une autre manière d'afficher un objet 
console.log(utilisateur['nom']) // tayoro
console.log(utilisateur['email']); // romaric@gmail.com
console.log(utilisateur['email'] = 'tayoro@gmail.com' ); //tayoro@gmail.com
console.log(typeof utilisateur); //Object
console.log(utilisateur.afficherBlogs());
// 


