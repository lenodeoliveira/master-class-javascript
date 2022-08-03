const circles = new WeakSet();

function Circle(radius) {
    circles.add(this)
    this.radius = radius;
}

Circle.prototype.calculateArea = function() {
    if(!circle1.has(this)) throw 'Invalid object';
    return Math.PI * Math.pow(this.radius, 2);
}

const circle1 = new Circle(10);

const circle2 = {
    radius: 4
}


console.log(circle1.calculateArea())
console.log(circle1.calculateArea.call(circle2))
