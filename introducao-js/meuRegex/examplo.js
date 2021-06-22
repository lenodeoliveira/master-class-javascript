let regExp = /^[a-z][a-z][a-z][a-z]@gmail\.com$/; // deve iniciar com letras e com quatro letras, terminando com @gmail.com

regExp = /^[a-z]{4}@gmail\.com$/; // definindo que deve ter 4 letras com {4}
regExp = /^[a-z]{3,4}@gmail\.com$/; // no mínimo 3 no máximo 4
regExp = /^[a-z]+@gmail\.com$/; // no mínimo um o mais caracteres
regExp = /^\w+@gmail\.com$/; // metacaracter \w representa um conjunto [a-zA-Z0-9_]
regExp = /^\w+@\w+\.com$/; //depois do barra pode ser qualquer conjunto de [a-zA-Z0-9_] com um caractere ou mais.
regExp = /^\w+@\w+\.\w{2,3}$/; //final pode ser qualquer conjunto de [a-zA-Z0-9_] com no mínimo 2 e n máximo três caracteres
regExp = /^\w+@\w+\.(\w{2,3})+$/; //colocando um quantificador () entorno de um grupo de caracter com um +, o que significa que queremos pelo menos 1
regExp = /^\w+@\w+(\.\w{2,3})+$/; //com o () entorno queremos dizer que esse trecho deve se repetir pelo menos uma ou mais vezes.


let result = regExp.exec('j0asa@h0tm.com.br.ce.rl');
console.log(result[0]);