
const numbers = [45,4,9,16,25];
Array.prototype.myForEach = function(sum) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
