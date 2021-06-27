
//preventExtensions:  impede que objeto tenha novas propriedades, 
//mas permite remover ou modificar as propriedades existentes.

const javascript = {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and Functional',
}

Object.preventExtensions(javascript);
javascript.name = 'ECMAScript';
javascript.author = 'Brendon Eich'; //ignorado
//delete javascript.year; possível
//javascript.year = 2000; ; //possível
console.log(javascript);
console.log(Object.isExtensible(javascript)); //testando se o preventExtensios foi ativado.

/*
seal: impede que o objeto tenha novas propriedades ou apague propriedades existentes, 
mas permite a modificação de propriedades existentes.
*/

const javascript2 = {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and Functional',
}

Object.seal(javascript2);
javascript2.name = 'ECMAScript';
//javascript2.author = 'Brendon Eich'; //ignorado
//delete javascript.year; // ignorado
//javascript.year = 2000; ; //possível
console.log(javascript2);
console.log(Object.isExtensible(javascript2)); //testando se o preventExtensios foi ativado.
console.log(Object.isSealed(javascript2)); //testando se o seal foi ativado.

/*
freeze: impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes.
 */

const javascript3 =  {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and Functional',
};

Object.freeze(javascript3);

javascript2.name = 'ECMAScript'; //ignorado
//javascript2.author = 'Brendon Eich'; //ignorado
//delete javascript.year; // ignorado
//javascript.year = 2000; ; //ignorado

console.log(Object.isFrozen(javascript3));







