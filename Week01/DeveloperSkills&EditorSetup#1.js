const printForecast = (arr) => {
    let string = "... ";
    for (let i = 0; i < arr.length; i++) {
        string += `${arr[i]}ºC in ${i+1} days ... `;
    }
    return string;
}

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const forecast1 = printForecast(temp1);
const forecast2 = printForecast(temp2);

console.log(forecast1);
console.log(forecast2);