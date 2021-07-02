//PARSE JSON, CONVERTE DE JSON PARA UM DETERMINADO TIPO DE DADO
console.log(JSON.parse('10')); //converte para 10

console.log(JSON.parse('"Javascript"'));// precisa colocar dentro de aspas simples depois em aspas duplas para poder interpretar que de fato é um string.
console.log(JSON.parse('true'));
console.log(JSON.parse('false'));
console.log(JSON.parse('{"name": "Self", "paradigm": "OO"}'));
console.log(JSON.parse('[1,2,3,4,5,6,7,8,9]'));
console.log(JSON.parse('null'));

//comparando objetos em json

const book1 = {
    name: 'Refactoring',
    author: 'Martin Fowler',
};

const book2 = {
    name: 'Refactoring',
    author: 'Martin Fowler',
};

console.log(JSON.stringify(book1) === JSON.stringify(book2));

//copiando referência

const book3 = JSON.parse(JSON.stringify(book2));

console.log(book3)
