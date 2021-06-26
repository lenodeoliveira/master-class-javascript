const javascript = Object.create({});
Object.assign(javascript, {
    name: 'Javascript',
    year: 1995,
    paradigm: 'OO and Functional',
}, {
    author: 'Brendan Eich',
    influence: 'Java, Scheme and Self',
});

console.log(javascript);
console.log(Object.keys(javascript)); //retorna as chaves das propriedades
console.log(Object.values(javascript)); //retorna os valores das propriedades
console.log(Object.entries(javascript)); //retorna um array com arrays contendo as chaves e os valores das propriedades
console.log(Object.is(javascript));// compara apenas referências.
