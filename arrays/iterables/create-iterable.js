function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let i = 0
            return {
                next() {
                    if(i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    }
        
                    return {
                        value: undefined,
                        done: true
                    }
                }
            };
        }
    }
}

const iterable = createIterable('Fortran', 'Lisp', 'Cobol')

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let language of iterable) {
    console.log(language)
}