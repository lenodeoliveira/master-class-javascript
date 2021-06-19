//tipo Number é primitivo e imutável.
//representado internamente pelo padrão IEEE 754
//JAVASCRIPT suporta quatro sistemas de numeração: decimal, hexadecimal, binário e octal.
//encapsulando o tipo primitivo em um objeto number
//colocando um numero primitivo no objeto Number podemos utilizar algumas operações do objeto.
// como toExponential toFixed etc...

// console.log(new Number(10));
// console.log(new Number(0xFF));

// let n = new Number(123.4);
// console.log(n.toExponential(10));
// console.log(n.toFixed(2));
// console.log(n.toPrecision(10));

//operadores binários.

//console.log(4 | 3); // 7
//convertendo para binário os números 4 e 3.
// console.log((4).toString(2).padStart(32,0));
// console.log((2).toString(2).padStart(32,0));

// console.log(3 & 1); //1
// console.log((3).toString(2).padStart(32,0));
// console.log((1).toString(2).padStart(32,0));


// console.log(5 ^ 2); 7
// console.log((5).toString(2).padStart(32,0));
// console.log((2).toString(2).padStart(32,0));

// // console.log(~2); -3
// console.log((2).toString(2).padStart(32,0));
// console.log((-3 >>> 0).toString(2).padStart(32,0));

// console.log(4 << 2); // 16
// console.log(128 >> 1); // 64
// console.log(-2 >>> 1); //2147483647
console.log((-2 >>> 0).toString(2).padStart(32,0));
console.log((2147483647).toString(2).padStart(32,0));





