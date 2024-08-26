
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// Tạo một mảng events chứa các sự kiện đã xảy ra (không trùng lặp)
const events = [new Set(gameEvents.values())];
console.log(events);
// Xóa sự kiện xảy ra ở phút 64 vì bị vé vàng
gameEvents.delete(64);
console.log('- Đã XÓA THÀNH CÔNG sự kiện xảy ra ở phút 64');
let totalEvent = gameEvents.size;
let averageEvent = 90 / totalEvent;
console.log(`- Trung bình mỗi trận đấu có ${averageEvent} sự kiện`);
// In các trận Hiệp 1 & Hiệp 2
for (let [minute, event] of gameEvents) {
    if (minute < 45) {
        // console.log(`[FIRST HALF]  ${gameEvents.keys()}: ${gameEvents.values()}`);
        console.log(`[FIRST HALF] ${minute}: ${event}`);
    } else {
        console.log(`[SECOND HALF] ${minute}: ${event}`);
    }
}