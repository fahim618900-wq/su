const light = document.getElementById('light');
const clickBtn = document.getElementById('clickBtn');
const timeDisplay = document.getElementById('timeDisplay');
const message = document.getElementById('message');

let startTime;
let timeout;

// Start the game
function startGame(){
    // Reset
    light.className = 'light red';
    clickBtn.disabled = true;
    message.textContent = '';
    timeDisplay.textContent = 'Your time: 0 ms';

    // Random delay before green light
    const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 sec
    light.className = 'light yellow';

    timeout = setTimeout(() => {
        light.className = 'light green';
        clickBtn.disabled = false;
        startTime = new Date().getTime();
    }, delay);
}

// Handle click
clickBtn.addEventListener('click', () => {
    const endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    timeDisplay.textContent = `Your time: ${reactionTime} ms`;
    message.textContent = reactionTime < 250 ? '⚡ Amazing!' : reactionTime < 500 ? 'Good!' : 'Try Faster!';
    startGame(); // restart automatically
});

// If user clicks too early
clickBtn.addEventListener('mousedown', (e) => {
    if(clickBtn.disabled){
        clearTimeout(timeout);
        message.textContent = 'Too soon! Wait for green.';
        startGame();
    }
});

// Initialize game
startGame();
