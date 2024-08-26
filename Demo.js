const numbers = [45, 4, 9, 16, 25];
Array.prototype.myFilter = function(callback) {
    let newArray = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i] > 18) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
function callback(value, index, array) {
    return value > 18;
}
let value = numbers.myFilter();
console.log(value);

