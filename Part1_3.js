console.log("Part1 - Coding Challenge #3");

var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

function calcAverage(score) {
  return score.reduce((a, b) => a + b) / score.length;
}

var dolphinsAverage = calcAverage(dolphins).toFixed(2);
var koalasAverage = calcAverage(koalas).toFixed(2);

console.log("Dolphins Average: " + dolphinsAverage);
console.log("Koalas Average: " + koalasAverage);

