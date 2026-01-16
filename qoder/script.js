document.addEventListener('DOMContentLoaded', () => {
    // Game constants
    const BOARD_SIZE = 16; // 4x4 grid
    const SYMBOLS = ['🍎', '🍌', '🍒', '🍇', '🍊', '🍓', '🍑', '🥝'];
    
    // Game state
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let gameStarted = false;
    
    // DOM elements
    const gameBoard = document.getElementById('game-board');
    const movesDisplay = document.getElementById('moves');
    const restartBtn = document.getElementById('restart-btn');
    const winMessage = document.getElementById('win-message');
    const finalMovesDisplay = document.getElementById('final-moves');
    const playAgainBtn = document.getElementById('play-again-btn');
    
    // Initialize the game
    function initGame() {
        // Reset game state
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        gameStarted = false;
        
        // Update UI
        movesDisplay.textContent = moves;
        winMessage.classList.remove('show');
        
        // Clear the game board
        gameBoard.innerHTML = '';
        
        // Create card pairs
        let cardValues = [];
        for (let i = 0; i < BOARD_SIZE / 2; i++) {
            cardValues.push(SYMBOLS[i]);
            cardValues.push(SYMBOLS[i]); // Add pair
        }
        
        // Shuffle the cards
        shuffleArray(cardValues);
        
        // Create card elements
        cardValues.forEach((value, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.value = value;
            card.dataset.index = index;
            
            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            cardFront.textContent = value;
            
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardBack.textContent = '?';
            
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            
            card.addEventListener('click', () => flipCard(card));
            gameBoard.appendChild(card);
            
            cards.push(card);
        });
    }
    
    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Flip a card
    function flipCard(card) {
        // Don't allow flipping if:
        // - Card is already flipped
        // - Card is already matched
        // - Two cards are already flipped
        // - Game hasn't started yet
        if (
            card.classList.contains('flipped') || 
            card.classList.contains('matched') || 
            flippedCards.length >= 2
        ) {
            return;
        }
        
        // Start the game on first move
        if (!gameStarted) {
            gameStarted = true;
        }
        
        // Flip the card
        card.classList.add('flipped');
        flippedCards.push(card);
        
        // Check for match when two cards are flipped
        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            
            const card1 = flippedCards[0];
            const card2 = flippedCards[1];
            
            if (card1.dataset.value === card2.dataset.value) {
                // Match found
                setTimeout(() => {
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    flippedCards = [];
                    matchedPairs++;
                    
                    // Check for win
                    if (matchedPairs === BOARD_SIZE / 2) {
                        endGame();
                    }
                }, 500);
            } else {
                // No match - flip cards back after delay
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }
    
    // End the game
    function endGame() {
        finalMovesDisplay.textContent = moves;
        setTimeout(() => {
            winMessage.classList.add('show');
        }, 500);
    }
    
    // Event listeners
    restartBtn.addEventListener('click', initGame);
    playAgainBtn.addEventListener('click', initGame);
    
    // Start the game
    initGame();
});