//this.
// const rectangle = {
//     x: 10,
//     y: 2,
//     calculateArea: function(){
//         return this.x * this.y
//     }
// }

// console.log(rectangle.calculateArea())

//simplificação
// const rectangle = {
//     x: 10,
//     y: 2,
//     calculateArea() {
//         return this.x * this.y
//     }
// }

// console.log(rectangle.calculateArea())

const calculateArea = function () {
    return this.x * this.y
}

const rectangle = {
    x: 10,
    y: 2,
    calculateArea
}

console.log(rectangle.calculateArea())