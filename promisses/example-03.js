function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input!")
        setTimeout(function () {
            resolve(a + b)
        }, 1000);
    });
}

Promise.all([
    sum(2,2),
    sum(4,4),
    sum(10,45),
    sum(4,5),
]).then(function(values){
    const [a, b, c, d] = values
    console.log(`${a}, ${b}, ${c}, ${d}`)
    return sum(a,b).then(function(result){
        return sum(c, d).then(function(result2){
            return sum(result, result2).then(function(res){
                console.log(res)
            })
        })
    })
}).catch(function(e){
    console.log(e)
})