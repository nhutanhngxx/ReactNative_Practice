/**
 * Created by ACER on 8/26/2024.
 * @param myEvery Trả về TRUE nếu tất cả phần tử thỏa điều kiện.
 * Trả về FALSE nếu có ít nhất 1 phần tử không thỏa điều kiện
 * @returns {boolean}
 */

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

let numbers = [43, 35, 24, 245, -5];
// Kiểm tra tất cả các phần tử có lớn hơn 0 không
let result = numbers.myEvery(function (number) {
    return number > 0;
});
console.log('Tất cả phần tử của mảng > 0 ? ' + result);