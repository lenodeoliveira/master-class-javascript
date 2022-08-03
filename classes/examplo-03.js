class Shape {
    toString() {
        return `area: ${this.calculateArea()}`
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }

    toString() {
        return `side: ${this.side} area: ${super.toString()}`
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area))
    }
}

class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    toString() {
        return `Radius: ${this.radius} Area: ${super.toString()}`
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area/Math.PI))
    }
}

const circle = Circle.fromArea(314.1592653589793)

console.log(circle)
console.log(circle.toString())
console.log(circle.calculateArea())