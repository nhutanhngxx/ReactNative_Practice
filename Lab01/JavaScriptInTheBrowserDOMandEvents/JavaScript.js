// Implement a game rest functionality, so that the player can make a new guess!
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)
// ---------------------------------------------------------------------------------------------------
// Triển khai chức năng nghỉ ngơi trong trò chơi, để người chơi có thể đoán mới!
// 1. Chọn phần tử có class = 'again' và đính kèm trình xử lý sự kiện nhấp chuột
// 2. Trong hàm xử lý, khôi phục các giá trị ban đầu của các biến 'score' và 'secretNumber'
// 3. Khôi phục các điều kiện ban đầu của các trường nhập tin nhắn, số, điểm và đoán
// 4. Cũng khôi phục màu nền ban đầu (#222) và độ rộng số (15rem)
// ---------------------------------------------------------------------------------------------------
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

