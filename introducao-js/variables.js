// VAR
var pi = 3.141595;
console.log(pi);
//reatribuição com var

pi = 3
//redeclaração;
var pi = 4;
console.log(pi);

//bloco if com var
if(true) {
    var teste = 0;
}

console.log(teste);

//LET

//declaração de variável com LET
// chamando antes a variável com let acontece um erro
//console.log(number); 
let number = 1500;
console.log(number);

//redeclaração
//let number = 90 // erro não é possível redeclarar mesma variável
if(true) {
    let teste2 = 'teste';
}
//console.log(teste2) não é possível pegar variável com let quando declarada dentro de um bloco

//CONST 
const numberConst = 'const';

//respeita o bloco assim como o Let
//só é inicializada posteriormente.
//assim como o let respeita o bloco.
//uma vez atribuido não pode ser redeclara nem reatribuída.


/*
OBS: ao declar uma váriavel sem var, let ou const ela fica no escopo global
*/