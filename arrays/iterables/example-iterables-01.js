// const classicLanguages = ['Fortran', 'Lisp', 'Cobol']

// const modernLanguages = ['Python', 'Ruby', 'Javascript']

// const languages = [...classicLanguages, ...modernLanguages]

// console.log(languages)

 
// for (let i in languages) {
//     console.log(languages[i])
// }

//for of
// for (let language of languages) {
//     console.log(language)
// }


const languages = new Map([['Fortran', 1957], ['Lisp', 1958, ], ['Cobol', 1959]])

// for(let [language, year] of languages) {
//     console.log(language, - year)
// }

const cobol = 'COBOL'

for (let char of cobol) {
    console.log(char)
}

const arString = [...cobol]

console.log(arString )

// acessando o protocolo de iteração de um array

const oldLanguages = ['Fortran', 'Lisp', 'Cobol']

const iterator = oldLanguages[Symbol.iterator]();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
