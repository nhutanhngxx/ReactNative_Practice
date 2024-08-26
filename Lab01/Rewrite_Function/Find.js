
const numbers = [45,4,9,16,25];
Array.prototype.myFind = function (num){
    let newArr = [];
    console.log(this);
    for(let i=0; i< this.length;i++){
        if(this[i] == num)
            return this[i];
    }
}
const value = numbers.myFind(45);
console.log(value);