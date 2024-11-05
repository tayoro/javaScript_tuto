const getEmployes = (ressource, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', ressource);
    request.send();
    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status == 200){
            //Transformer en json pour l'utilisation
            const data = JSON.parse(request.responseText);
            callback(data);
        }else if(request.readyState === 4){
            callback('Impossible de trouver les données', undefined);
        }
    });
}

//Retrouver tous les données disponibles
getEmployes('data/empAmazon.json', data =>{
    console.log(data);
    getEmployes('data/empFacebook.json', data =>{
        console.log(data);
        getEmployes('data/empGoogle.json', data =>{
            console.log(data);
        });
    });
})

