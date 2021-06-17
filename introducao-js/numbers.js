//tipo Number é primitivo e imutável.
//representado internamente pelo padrão IEEE 754
//JAVASCRIPT suporta quatro sistemas de numeração: decimal, hexadecimal, binário e octal.
//encapsulando o tipo primitivo em um objeto number
//colocando um numero primitivo no objeto Number podemos utilizar algumas operações do objeto.
// como toExponential toFixed etc...

console.log(new Number(10));
console.log(new Number(0xFF));

let n = new Number(123.4);
console.log(n.toExponential(10));
console.log(n.toFixed(2));
console.log(n.toPrecision(10));


