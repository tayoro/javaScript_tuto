const ages = [32, 33, 16, 40];

ages.every(checkAge) // FAUX

function checkAge(age) {
  return age > 18;
}

// Retourne un Booléen vrai si tous les éléments réussissent le test, sinon faux.
/*
La méthode Every() exécute une fonction pour chaque élément du tableau.

La méthode Every() renvoie true si la fonction renvoie true pour tous les éléments.

La méthode Every() renvoie false si la fonction renvoie false pour un élément.

La méthode Every() n'exécute pas la fonction pour les éléments vides.

La méthode Every() ne modifie pas le tableau d'originey */