
const number = [45,4,9,16,25];
Array.prototype.myfilter = function (num){
    let newArr = [];
    console.log(this);
    for(let i=0; i< this.length;i++){
        if(this[i] > num)
            newArr.push(this[i]);
    }
    return newArr;
}
const value = number.myfilter(10);
console.log(value);