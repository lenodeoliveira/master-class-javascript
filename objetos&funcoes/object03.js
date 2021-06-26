//Herança 

const functionalLanguage = {
    paradigm: 'Functional',
};

const scheme = {
   name: 'Scheme',
   year: 1975,
   __proto__: functionalLanguage
};

const javascript = {
    name: 'JavaScript',
    year: 1995,
    __proto__: functionalLanguage
};

// console.log(functionalLanguage);
// console.log(scheme);
// console.log(javascript.paradigm);

//MÉTODO hasOwnProperty
//Esse método pode ser utilizado para determinar se uma propriedade pertence a um objeto.

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key)); // paradigm não é uma propriedade por estar no protótipo
}