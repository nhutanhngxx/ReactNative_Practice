// Back to the two gymnastics teams, the Dolphins and the Koalas!
// There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated
// (so one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2. Use the function to calculate the average for both teams
console.log("Avg of Dolphins = " + calcAverage(44, 23, 71));
console.log("Avg of Koalas = " + calcAverage(65, 54, 49));
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
avgDolhins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas ) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgDolhins < avgKoalas ) {
        console.log(`Koalas win (${avgDolhins} vs. ${avgKoalas})`);
    } else {
        console.log(`It's a draw!!!`);
    }
}
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolhins, avgKoalas);
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))
// 5. Ignore draws this time