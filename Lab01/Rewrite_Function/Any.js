/**
 * Created by ACER on 8/26/2024.
 * @param myAny() Trả về TRUE nếu có ít nhất một phần tử thõa điều kiện. <br/>
 * Trả về FALSE nếu không có phần tử nào thõa điều kiện
 */

Array.prototype.myAny = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}
const numbers = [1, 3, 3, 3, 5];
// Kiểm tra xem mảng có phần tử chẵn không
let result1 = numbers.myAny(function (number) {
    return number % 2 === 0;
});
console.log('Mảng có phần tử chẵn ? ' + result1);
// Kiểm tra xem mảng có phần tử > 4 không
let result2 = numbers.myAny(function (number) {
    return number > 4;
});
console.log('Mảng có phần tử > 4 ?' + result2);