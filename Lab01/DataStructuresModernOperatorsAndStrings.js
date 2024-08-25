/**
 * Created by ACER on 8/25/2024.
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Chúng tôi đang xây dựng một ứng dụng cá cược bóng đá (bóng đá dành cho những người bạn Mỹ của tôi)!
// Giả sử chúng ta lấy dữ liệu từ một dịch vụ web về một trò chơi nhất định (variable is 'game' ở trang tiếp theo).
// Trong thử thách này, chúng ta sẽ làm việc với dữ liệu đó.
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Tạo một mảng cầu thủ cho mỗi đội (biến 'players1' và 'players2')
// 2. Cầu thủ đầu tiên trong bất kỳ mảng cầu thủ nào là thủ môn và những cầu thủ khác là cầu thủ trên sân.
//    Đối với Bayern Munich (đội 1), hãy tạo một biến ('gk') với tên thủ môn và một mảng ('fieldPlayers') với tất cả 10 cầu thủ trên sân còn lại
// 3. Tạo một mảng 'allPlayers' chứa tất cả cầu thủ của cả hai đội (22 cầu thủ)
// 4. Trong suốt trận đấu, Bayern Munich (đội 1) đã sử dụng 3 cầu thủ dự bị.
//    Vì vậy, hãy tạo một mảng mới ('players1Final') chứa tất cả các cầu thủ team1 ban đầu cộng với 'Thiago', 'Coutinho' và 'Perisic'
// 5. Dựa trên đối tượng game.odds, hãy tạo một biến cho mỗi số lẻ (gọi là 'team1', 'draw' và 'team2')
// 6. Viết một hàm ('printGoals') nhận một số lượng tên cầu thủ tùy ý (không phải là một mảng) và in từng tên vào bảng điều khiển,
//    cùng với tổng số bàn thắng được ghi (số tên cầu thủ được truyền vào)
// 7. Đội có số lẻ thấp hơn có nhiều khả năng chiến thắng hơn.
//    In ra bảng điều khiển đội nào có nhiều khả năng chiến thắng hơn mà không cần sử dụng câu lệnh if/else hoặc toán tử ba ngôi.
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Giả sử dữ liệu từ dịch vụ web được lưu trữ trong biến game
const game = {
    odds: {
        team1: 1.33,
        draw: 5.12,
        team2: 6.85,
    },
};
// 1. Tạo mảng cầu thủ cho mỗi đội
const players1 = ['Neuer', 'Davies', 'Alaba', 'Boateng', 'Kimmich', 'Goretzka', 'Coman', 'Gnabry', 'Lewandowski', 'Müller'];
const players2 = ['Oblak', 'Hermoso', 'Felipe', 'Savic', 'Trippier', 'Koke', 'Lemar', 'Joao Felix', 'Morata', 'Llorente'];
// 2. Xử lý thông tin thủ môn và cầu thủ trên sân của Bayern Munich
const gk = players1.shift(); // Lấy thủ môn ra khỏi mảng
const fieldPlayers = players1;
// 3. Tạo mảng tất cả cầu thủ
const allPlayers = [...players1, ...players2];
// 4. Cập nhật danh sách cầu thủ đội 1 sau khi thay người
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5. Tạo biến cho các tỷ lệ cược
const { team1, draw, team2 } = game.odds;
// 6. Hàm in danh sách cầu thủ ghi bàn
function printGoals(...players) {
    console.log(players.join(', '));
    console.log(`Tổng số bàn thắng: ${players.length}`);
}
// 7. Xác định đội có khả năng thắng cao hơn
const winningTeam = ['team1', 'draw', 'team2'].reduce((prev, curr) => game.odds[prev] < game.odds[curr] ? prev : curr);
console.log(`Đội có khả năng thắng cao hơn: ${winningTeam}`);