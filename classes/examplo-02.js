class Square {
    constructor(side) {
        this.side = side
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area))
    }
}

// const square = Square.fromArea(16)
// console.log(square.calculateArea())
// console.log(square.toString())
// console.log(square)

// function construtora

function Quadrado(side) {
    this.side = side    
}

Quadrado.prototype.calculateArea = function() {
    return Math.pow(this.side, 2)
}

Quadrado.prototype.toString = function() {
    return `side: ${this.side}`
}

Quadrado.fromArea = function (area) {
    return new Quadrado(Math.sqrt(area))
}

const quadrado = new Quadrado(4)
console.log(quadrado.calculateArea())
console.log(quadrado.toString())