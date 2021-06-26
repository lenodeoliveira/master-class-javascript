const functionalLanguage = {
    paradigm: 'Functional',
};
 
//criando o objeto e indicando o protótipo
const scheme = Object.create(functionalLanguage);
scheme.name = 'Scheme';
scheme.year = 1975;


const javascript = Object.create(functionalLanguage);
javascript.name = 'JavaScript';
javascript.year = 1995;
/*
caso a mesma propriedade exista tanto no mesmo objeto quanto no seu protótipo,
 a propriedade do próprio objeto é retornada, fazendo sombra à propriedade do protótipo.
*/
javascript.paradigm = 'OO';
for (let key in javascript) {
    console.log(javascript[key]);
}

console.log(javascript.__proto__.paradigm); //pegando a propriedade do protótipo
console.log(Object.getPrototypeOf(javascript).paradigm); //pegando a propriedade do protótipo
