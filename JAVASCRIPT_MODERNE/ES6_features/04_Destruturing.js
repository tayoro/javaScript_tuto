//Destruturing assignment : La destruturation d'affectation
const alphabet = ['A', 'B', 'C', 'D', 'E'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Destructuration
const [a, ...rest] = alphabet;
console.log(a, rest)


//Destructuration pour la fonction 
const operationArthmetic = (x, y) =>{
    return[
        `${x} + ${y} = ${x+y}`,
        `${x} - ${y} = ${x-y}`,
        `${x} * ${y} = ${x*y}`,
        `${x} / ${y} = ${x/y}`
    ];
};

const [addition, soustration, multiplication, division] = operationArthmetic(5, 8);
console.log(addition);
console.log(soustration);
console.log(multiplication);
console.log(division);