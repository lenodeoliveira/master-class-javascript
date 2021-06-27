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


//defineProperty
const objectJs = {};

Object.defineProperty(objectJs, 'name', {
    value: 'Javascript',
});

console.log(objectJs); // não mostra a propriedade, pois quando definimos apenas o value todo o resto é considerado falso
console.log(Object.keys(objectJs));// aparece a chave
console.log(Object.values(objectJs));
console.log(Object.entries(objectJs));

//Definindo um objeto enumerábel com defineProperty
const objectJs2 = {};
Object.defineProperty(objectJs2, 'name', {
    enumerable: true,
    value: 'Javascript',
});

console.log(objectJs2);
console.log(Object.entries(objectJs2));

//Definindo se podemos ou não alterar valor de alguma propriedade.
const objectJs3 = {};
Object.defineProperty(objectJs3, 'name', {
    enumerable: true,
    writable: true,
    value: 'Javascript',
});

objectJs3.name = 'ECMAScript';

console.log(objectJs3);

//Configurable: por padrão vem como falso, para apagar uma propriedade precisamos configurar para true
const objectJs4 = {};
Object.defineProperty(objectJs4, 'name', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 'Javascript',
});

objectJs4.name = 'ECMAScript';
delete objectJs4.name;
console.log(objectJs4);


