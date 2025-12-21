const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const drawBtn = document.getElementById('drawBtn');

let currentEmoji = '';

// Draw meme text
drawBtn.addEventListener('click', () => {
    // Clear canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // Background (light gray)
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // Text
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(topText.value, canvas.width/2, 50);
    ctx.fillText(bottomText.value, canvas.width/2, canvas.height - 30);
});

// Emoji Painter
const emojiButtons = document.querySelectorAll('.emoji-btn');
emojiButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentEmoji = btn.textContent;
    });
});

canvas.addEventListener('click', (e) => {
    if(currentEmoji){
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.font = '40px Arial';
        ctx.fillText(currentEmoji, x, y);
    }
});
