//const [name, author, year] = "C;Dennis Ritchie;1972".split(";");
//console.log(name, author, year);


//pegando apenas os dois últimos resultados
const [, author, year] = "C;Dennis Ritchie;1972".split(";");
console.log(author, year);