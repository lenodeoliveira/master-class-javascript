const v1 = 10;
const fn1 = function() {
    const v1 = 100;
    const fn2 = function() {
        const v1 = 1000;
       console.log(v1);
    }
    fn2();
}
fn1();

const obj1 = {
    p1: 10,
    getP1: function() {
        const that = this;
        const fn1 = function() {
            return that.p1;
        }
        return fn1();
    }
};

console.log(obj1.getP1())