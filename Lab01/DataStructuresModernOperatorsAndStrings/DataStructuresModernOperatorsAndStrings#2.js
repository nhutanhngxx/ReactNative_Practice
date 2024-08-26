/**
 * Created by ACER on 8/25/2024.
 */

const game = {
    scored: ['Gnarby', 'Hummels', 'Lewandowski', 'Lewandowski'],
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }
};
// 1. In danh sách cầu thủ ghi bàn và số bàn thắng
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
// 2. Tính toán tỷ lệ cược trung bình
const oddsArray = Object.values(game.odds);
const averageOdd = oddsArray.reduce((sum, odd) => sum + odd, 0) / oddsArray.length;
console.log('Average odd:', averageOdd);
// 3. In tỷ lệ cược theo định dạng đẹp
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// 4. Tạo đối tượng 'scorers'
const scorers = {};
game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);