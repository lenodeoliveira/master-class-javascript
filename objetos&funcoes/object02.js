//compatando objetos 

const book = {
   title: 'Clean Code',
   author: 'Robert C. Martin',
   pages: 464,
   language: 'English',
   available: true,
 };

const book2 = {
   title: 'Clean Code',
   author: 'Robert C. Martin',
   pages: 464,
   language: 'English',
   available: true,
 };

console.log(book2 === book); // resultado é false pois ele compara a referência dos objetos.
//comparando objetos por meio de chaves e valores.
//Essa comparação é superficial
let equal = true;
for(let key in book) {
    if (book[key] !== book2[key]) equal = false;
}

for(let key in book2) {
    if (book[key] !== book2[key]) equal = false;
}

console.log(equal);