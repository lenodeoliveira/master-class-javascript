class Square {
    constructor(side) {
        this.side = side
    }
    toString() {
        return `side: ${this.side}`
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }
}

const square = new Square(4)
console.log(square.calculateArea())
console.log(square.toString())