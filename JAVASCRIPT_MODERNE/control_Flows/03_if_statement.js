//La declaration conditionnelle
let age = 60;

/*
if(age>18){
    console.log('Vous etes adulte')
}else{
    console.log('Vous etes mineurs')
}
*/

//operateur logique [&&] pour la concatenation d'une conditionnelle
if(age>=1 && age<=17){
    console.log('vous etes mineurs');
}else if(age>=18 && age<=50){
    console.log('vous etes adulte')
}else{
    console.log('vous etes vieux')
}

//Operateur Logique [||]
let email='tayoro@gmail.com';
if(email.includes('@') || email.includes('gmail.com')){
    console.log('email est valide')
}else{
    console.log('email est invalide')
}