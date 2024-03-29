function sum(a, b) {
    return new Promise(function(resolve, reject){
        if (!a || !b) return reject('Invalid input!')
        setTimeout(function() {
            resolve(a + b)
        }, 1000);
    })

}

(async function() {
    try {
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ]
        const results = []
        for (let fn of functions) {
            const result = await fn;
            results.push(result)
        }
        const [a, b] = results;
        const result = await sum(a, b);
        console.log(result)
    } catch (e) {
        console.log(e)
    }
})()


