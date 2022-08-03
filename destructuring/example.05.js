const sum = ([a, b]) => {
    return a + b;
}

const subtract = ({a, b}) => {
    return a - b;
} 

console.log(sum([2,2]))
console.log(subtract({a: 10, b: 5}))