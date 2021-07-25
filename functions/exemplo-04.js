const sum = function (a,b) {
    return a + b;
}

console.log(sum(2,2,2))
//passando valor por padrão
const sum2 = function (a,b = 1) {
    return a + b;
}

console.log(sum2(2))