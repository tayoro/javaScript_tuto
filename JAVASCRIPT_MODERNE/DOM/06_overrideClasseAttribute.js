const contenu = document.querySelector('p')
console.log(contenu.classList);

//Ajouter et retirer une classe 
contenu.classList.add('error')
contenu.classList.add('roma')

contenu.classList.remove('roma')
contenu.classList.replace('error', 'roma')

contenu.classList.remove('roma')
