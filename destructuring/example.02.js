//definindo valores padrão

const langue = "C;Dennis Ritchie".split(";");
const [languageName = "-", author = "-", year = "-"] = langue;
console.log(languageName, author, year)