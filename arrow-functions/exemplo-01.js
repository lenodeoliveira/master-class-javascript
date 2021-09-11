const sum = function (a, b)  {
    return a + b;
}

const subtract = function (a, b)  {
    return a - b;
}

const calculator = function (fn)  {
    return function(a, b) {
        return fn(a, b);
    }
}

/* console.log(calculator(sum)(2,2))
console.log(calculator(subtract)(2,2)) */

/* com arrow function */

const sumArrow =  (a, b) =>  a + b

const subtractArrow = (a, b) => a - b;

const calculatorArrow = fn => (a, b) => fn(a, b);

console.log(calculator(sum)(2,2))
console.log(calculator(subtract)(2,2))