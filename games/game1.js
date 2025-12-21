const board = document.getElementById('gameBoard');
const movesDisplay = document.getElementById('moves');
const message = document.getElementById('message');

let moves = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Card symbols (offline)
const symbols = ['🐶','🐱','🦊','🐸','🐵','🐼','🦁','🐷'];
const cardsArray = [...symbols, ...symbols]; // Duplicate for pairs

// Shuffle function
function shuffle(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create game board
function createBoard(){
    shuffle(cardsArray);
    cardsArray.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = '';
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.textContent = this.dataset.symbol;
    this.classList.add('flipped');

    if(!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesDisplay.textContent = `Moves: ${moves}`;

    checkMatch();
}

function checkMatch(){
    if(firstCard.dataset.symbol === secondCard.dataset.symbol){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        checkWin();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard(){
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkWin(){
    const flippedCards = document.querySelectorAll('.card.flipped');
    if(flippedCards.length === cardsArray.length){
        message.textContent = `🎉 You won in ${moves} moves!`;
    }
}

// Initialize
createBoard();
