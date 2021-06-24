let regExp = /^[a-z][a-z][a-z][a-z]@gmail\.com$/; // deve iniciar com letras e com quatro letras, terminando com @gmail.com

regExp = /^[a-z]{4}@gmail\.com$/; // definindo que deve ter 4 letras com {4}
regExp = /^[a-z]{3,4}@gmail\.com$/; // no mínimo 3 no máximo 4
regExp = /^[a-z]+@gmail\.com$/; // no mínimo um o mais caracteres
regExp = /^\w+@gmail\.com$/; // metacaracter \w representa um conjunto [a-zA-Z0-9_]
regExp = /^\w+@\w+\.com$/; //depois do barra pode ser qualquer conjunto de [a-zA-Z0-9_] com um caractere ou mais.
regExp = /^\w+@\w+\.\w{2,3}$/; //final pode ser qualquer conjunto de [a-zA-Z0-9_] com no mínimo 2 e n máximo três caracteres
regExp = /^\w+@\w+\.(\w{2,3})+$/; //colocando um quantificador () entorno de um grupo de caracter com um +, o que significa que queremos pelo menos 1
regExp = /^\w+@\w+(\.\w{2,3})+$/; //com o () entorno queremos dizer que esse trecho deve se repetir pelo menos uma ou mais vezes.

//extraindo valores
//vamos separar a primeira parte do email (john) da segunda (.com.br.ce.rl) 

regExp = /^(\w+)@\w+(\.\w{2,3})+$/; // ao colocarmos os parênteses entorno da da primeira parte do regex, estamos extraindo os primeiros valores.
regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/; // ao colocarmos os parênteses entorno da da segunda parte do regex, estamos extraindo o segundo valor.


let result = regExp.exec('john@hotmail.com.br.ce.rl');
console.log(result[0]);
console.log(result[1]); //primeira parte do email
console.log(result[2]); //segunda parte do email