function sum(a, b, callback) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

function async(fn) {
    const gen = fn()
    asyncR(gen)
}

function asyncR(gen, result) {
    const obj = gen.next(result)
    if(obj.done) return;
    obj.value.then(function(result){
        asyncR(gen, result)
    })
}

async((function* () {
    const resultA = yield sum(2, 2);
    const resultB = yield sum(4, 4);
    const total = yield sum(resultA, resultB)
    console.log(total)
}))

