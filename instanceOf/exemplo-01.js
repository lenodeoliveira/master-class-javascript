/*
    operador instanceOf é possível verificar se um objeto foi criado por meio de una determinada função
    construtora analisando a sua cadeia de protótipos.
*/

// const date = new Date();

// console.log(date instanceof Date);
// console.log(date instanceof Object);
// console.log(date instanceof Array);

/*
 Diferença entre typeof e instanceof
*/

//console.log(typeof date); //revela o tipo de dado

const _instanceof = function(obj, fn) {
    if(obj === fn.prototype) return true;
    if(obj === null) return false
    return _instanceof(obj.__proto__, fn)

};

const date = new Date();

console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);

console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));