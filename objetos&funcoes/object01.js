
//criação de objetos.
//notação literal
{}

//função construtora
const object = new Object();

//object API
Object.create(null)

//Atribuindo propriedades com notação literal.
const book = {
   title: 'Clean Code',
   author: 'Robert C. Martin',
  pages: 464,
  language: 'English',
  available: true,
};

console.log(book);

const title =  'Clean Code';
const author  =  'Robert Martin';
const pages = 'pages: 464';
const language = 'English';
const available = true; 

const book2 = {
  title,
  author,
 pages,
 language,
};

console.log(book2);

//É possível computar as chaves em tempo de execução.
const key1 = 'title'; 
const key2 = 'author'; 
const key3 = 'pages'; 
const key4 = 'language'; 
const key5 = 'available'; 

const book3 = {
    [key1]: 'Clean Code',
    [key2]: 'Robert C. Martin',
    [key3]: 464,
    [key4]: 'English',
    [key5]: true,
 };
 console.log(book3);

 //atribuição por referência.
 const book4 = {}; //new Object() // Object.create(null);
 book4.title = 'Clean Code';
 book4.author = 'Roberto C. Martin';
 book4.pages = 464;
 book4.available = true;

 console.log(book4);

 //computando as chaves em tempo de execução por meio de referências.
const refkey1 = 'title'; 
const refkey2 = 'author'; 
const refkey3 = 'pages'; 
const refkey4 = 'language'; 
const refkey5 = 'available'; 
const book5 = {}; 
 book5[refkey1] = 'Clean Code';
 book5[refkey2] = 'Roberto C. Martin';
 book5[refkey3] = 464;
 book5[refkey4] = 'English';
 book5[refkey5] = true;

//Consultando propriedades.
const book6 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true,
};

console.log(book6.title);

//Consultando por meio das computações das chaves.
//usando for in para percorrer propriedades do objeto.

//clonando objetos
const bookClone = {};

for(let key in book6) {
    bookClone[key] = book6[key];
}

console.log('CLONE', bookClone);

for (let key in book6) {
    console.log(key)//imprimindo as chaves
    console.log(book6[key])// acessando os valores das chaves
}

//tipo undefined
const bookUndefined = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true,
};

console.log(bookUndefined.published)//consultado chave que não existe;
//verificando a existencia de uma propriedade com in 
console.log('title' in bookUndefined);
//removendo propriedade
delete bookUndefined.author;

console.log(bookUndefined);
//apagando dinamicamente.
delete bookUndefined['available'];

