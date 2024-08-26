// Hàm tính tiền tip (giả sử đã có hàm này)
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// Mảng chứa các hóa đơn
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Mảng chứa tiền tip và tổng số tiền
const tips = [];
const totals = [];
// Tính toán tiền tip và tổng số tiền cho từng hóa đơn
for (let i = 0; i < bills.length; i++) {
    // Tính tiền tip
    const tip = calcTip(bills[i]);
    tips.push(tip);
    // Tính tổng số tiền
    const total = bills[i] + tip;
    totals.push(total);
}
// Hàm tính giá trị trung bình của một mảng
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// Tính giá trị trung bình của mảng totals
const average = calcAverage(totals);
console.log("Avg bills: ", average);