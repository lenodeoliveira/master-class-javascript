const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: function() {
        return (new Date()).getFullYear() - this.year;   
    }
    /**Arrow function não funciona com this */
   /*  getAge: () => {
        return (new Date()).getFullYear() - this.year;   
    } */
}

console.log(person.getAge())

const sum = function() {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument]
    }
    return total;
}
/* argbuments não funciona com arrow functions */
const sum2 = () => {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument]
    }
    return total;
}

console.log(sum(1,2,3,4,5))
console.log(sum2(1,2,3,4,5))
