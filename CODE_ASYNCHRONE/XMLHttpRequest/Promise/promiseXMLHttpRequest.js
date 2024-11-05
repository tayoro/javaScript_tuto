const getEmployes = (ressource) =>{
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', ressource)
        request.send();
        request.addEventListener('readystatechange', () =>{
            if(request.readyState === 4 && request.status == 200){
                //Transformer en json pour l'utilisation
                const data = JSON.parse(request.responseText)
                resolve(data);
            }else if(request.readyState === 4){
                reject('Oups, quelque chose s\'est mal passée');
            }
        });
    })
}

// obtenirQuelqueChose().then(data => {
//     console.log(data);
// },err =>{
//     console.log(err)
// });

// getEmployes('data/empAmazon.json').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// });


//Enchainement des Promises.
getEmployes('data/empAmazon.json').then(data => {
    console.log('1er promise resolu',data)
    return getEmployes('data/empFacebook.json');
}).then(data => {
    console.log('2er promise resolu',data)
    return getEmployes('data/empGoogle.json');
}).then(data => {
    console.log('3er promise resolu',data)
}).catch(err => {
    console.log(err);
})






