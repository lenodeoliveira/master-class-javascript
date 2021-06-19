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

//conversor de números
console.log(Number('10'));//10
console.log(Number('10.5'));//10.5
console.log(Number('0xFF'));//255
console.log(Number());//0
console.log(Number('JS'));//not a number

console.log('10' + 0); //concatenação '100'

//método toString para fazer conversão de diferentes tipos de base.
console.log((0xA).toString(10)); //de hexadecimal para conversão para base decimal
console.log((0b1010).toString(16)); //de binário para hexadecimal 

//ParseInt
console.log(parseInt('10', 10)); // conversão de string para base 10
console.log(parseInt('A', 16)); // conversão de string para base 16

//parseFloat
console.log(parseFloat('10')); //10
console.log(parseFloat('2.5')); //2.5
console.log(parseFloat('0xFF')); //0