//Rest Operator
const addition = (...nombres) => {
    return nombres.forEach((nombre)=>{
        console.log(`${nombre} x ${nombre} = ${nombre*nombre}`);
    })
};

addition(10,20,30,40);


//Spread Operator
//Copier les éléments d'un array dans un nouveau array
const eleves4ieme = ['Tayoro', 'Dido', 'Don'];
const eleves5ieme = [...eleves4ieme, 'Romaric', 'Glazahi', 'Kevine'];
console.log(eleves4ieme); //['Tayoro', 'Dido', 'Don']
console.log(eleves5ieme); //['Tayoro', 'Dido', 'Don', 'Romaric', 'Glazahi', 'Kevine']

//Passer les elements d'un array comme parametre d'une fonction
const tousEleves = (lalisteFinal = [...eleves5ieme, 'Hilaire', 'Jonathan']) => {
    lalisteFinal.forEach((eleve, index) => {
        console.log(`${index + 1}) ${eleve}`);
    });
}

tousEleves();