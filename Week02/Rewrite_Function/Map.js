/**
 * Created by ACER on 8/26/2024.
 * @param myMap() tạo ra một mảng mới bằng cách áp dụng
 * một hàm lên từng phần tử của một mảng hiện có.
 */

Array.prototype.myMap = function(callback) {
    const result = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const numbers = [45, 35, 36, 43, 8];

// Nhân đôi giá trị của mỗi phần tử trong mảng
const doubled = numbers.myMap(function(num) {
    return num * 2;
});

console.log(doubled);
