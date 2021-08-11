// const person1 = {
//     name: "Linus Torvalds",
//     city: "Helsinki",
//     year: 1969,

//     getAge() {
//         return (new Date()).getFullYear() - this.year;
//     }
// }

// const person2 = {
//     name: "Bill Gates",
//     city: "Seattle",
//     year: 1955,
//     getAge() {
//         return (new Date()).getFullYear() - this.year;
//     }
// }

// console.log(person1)
// console.log(person1.getAge())

// console.log(person2)
// console.log(person2.getAge())


// const personPrototype = {
//     getAge() {
//         return (new Date()).getFullYear() - this.year;
//     }
// };

// const createPerson = function(name, city, year) {
//     const person = {
//         name,
//         city,
//         year,
//     }
//     Object.setPrototypeOf(person, personPrototype);
//     return person;
// };


// const person1 = createPerson("Bill Gates", "Seattle", 1955)
// const person2 = createPerson("Linus Torvalds", "Helsinki", 1969)

// const Person = function(name, city, year) {
//     this.name = name;
//     this.city = city;
//     this.year = year;
// }

// Person.prototype.getAge = function() {
//     return (new Date()).getFullYear() - this.year;
// }

// const person1 = new Person("Bill Gates", "Seattle", 1955)
// const person2 = new Person("Linus TorTorvalds", "Helsinki", 1969)


const _new = function(fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params);
    return obj;
}

const Person = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
}

Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year;
}

const person1 = _new(Person, "Bill Gates", "Seattle", 1955)
const person2 = _new(Person, "Linus TorTorvalds", "Helsinki", 1969)



console.log(person1);
console.log(person1.getAge());
console.log(person1.__proto__);
console.log(person2);
console.log(person2.getAge());
console.log(person2.__proto__);
