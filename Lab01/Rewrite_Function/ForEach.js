/**
 * @param myForEach() trả về giá trị và vị trí của giá trị đó
 */

Array.prototype.myForEach = function(callback) {
    // Kiem tra callback co phai la function hay khong
    // if (typeof callback !== 'function') {
    //     throw new TypeError(callback + ' is not a function');
    // }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [45,4,9,16,25];

numbers.myForEach((item, index, arr) => {
    console.log(item, index, arr);
});
