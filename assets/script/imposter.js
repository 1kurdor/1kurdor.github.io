// ===== script.js =====
// ==================== GAME STATE ====================
const gameState = {
    players: [],
    spies: [],
    secretWord: "",
    differentWord: "", // For game mode 2
    gameMode: 1, // 1 = Imposter Game, 2 = Different Word Game
    currentPlayerIndex: 0,
    gameOver: false,
    playerNames: [] // Store player names for replay
};

// Word pairs for Game Mode 2 (Different Word)
const wordPairs = [
    { normal: "پیتزا", different: "بەرگر" },
    { normal: "کۆکا کۆلا", different: "پێپسی" },
    { normal: "ئایفون", different: "ئەندرۆید" },
    { normal: "نایک", different: "ئەدیداس" },
    { normal: "تایۆتا", different: "‌نیسان" },
    { normal: "فەیسبووک", different: "ئیستاگرام" },
    { normal: "مێسی", different: "مەرەدونا" },
    { normal: "رونالدو نازاریو", different: "رونالدیمهو" },
    { normal: "قەهور", different: "چا" },
    { normal: "شەتەڕەنج", different: "دومینە" },
    { normal: "پاس", different: "قیتار" }
];

// Regular words for game mode 1
const kurdishWords = {
    خواردن: ["کەباب", "برنج", "کافی", "نارگیل", "شاورمە", "بەرخ"],
    گیانلەبەران: ["ریڤی", "چێل", "بەراز", "فەرماندە خورشید", "بزن", "سەگ"],
    پیشە: ["مامۆستا", "دختور", "مەهندس", "بازرگان", "فەلاح"],
    وڵات: ["کوردستان", "هیتلەر", "گیڤارا", "خوخ", "سێڤ"],
    ڕەنگ: ["هناروک", "ساحە", "سەیارە", "طەیارە", "مێسی", "حەمدی"]
};

const categories = Object.keys(kurdishWords);

// ==================== GAME DESCRIPTION MODAL ====================
function showGameDescription(mode) {
    gameState.gameMode = mode;
    
    const modal = document.getElementById('game-description-modal');
    const icon = document.getElementById('modal-icon');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    
    if (mode === 1) {
        // Imposter Game description
        icon.textContent = '🕵️';
        title.textContent = 'یارییا سیخوڕی';
        title.className = 'game-modal-title blue';
        text.textContent = 'ڤێ یاریێ سیخوڕ یێ تێدا! سیخور  دزانیت کو ئەو سیخورە.   دڤێت سیخور بهێتە کەشف کرن!';
    } else {
        // Different Word Game description
        icon.textContent = '🎭';
        title.textContent = 'وشەیێن جیاواز';
        title.className = 'game-modal-title red';
        text.textContent = 'دڤێ یارییێدا سیخوڕ نینە!   ئێک کەس دێ وشەییا جیاواز بینیت. دڤێت ئەو کەسە بهێتە کەشفکرن!';
    }
    
    modal.classList.remove('hidden');
}

function closeGameDescription() {
    document.getElementById('game-description-modal').classList.add('hidden');
}

function confirmGame() {
    closeGameDescription();
    
    if (gameState.gameMode === 1) {
        document.getElementById('setup-title').textContent = '⚙️ ڕێکخستنا یارییا سیخوڕی';
    } else {
        document.getElementById('setup-title').textContent = '⚙️ ڕێکخستنا یارییا وشێن جیاواز';
    }
    
    showPage('setup-page');
}

// ==================== UI FUNCTIONS ====================
function showPage(pageId) {
    // Hide all pages
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('setup-page').classList.add('hidden');
    document.getElementById('game-page').classList.add('hidden');
    document.getElementById('reveal-page').classList.add('hidden');
    document.getElementById('results-page').classList.add('hidden');
    
    // Show requested page
    document.getElementById(pageId).classList.remove('hidden');
    
    // Initialize page if needed
    if (pageId === 'setup-page') {
        initializeSetupPage();
    }
    
    // Update reveal title based on game mode
    if (pageId === 'reveal-page') {
        if (gameState.gameMode === 1) {
            document.getElementById('reveal-title').textContent = '🕵️ سیخوڕەکە';
        } else {
            document.getElementById('reveal-title').textContent = '🎭 کەسە جیاوازەکە';
        }
    }
}

// New function to go back to home page from setup
function goBackToHome() {
    showPage('home-page');
}

// New function to go to home page from results (yellow button)
function goToHomePage() {
    showPage('home-page');
}

// ==================== SETUP FUNCTIONS ====================
let currentPlayerCount = 5;

function changePlayerCount(delta) {
    currentPlayerCount = Math.min(10, Math.max(3, currentPlayerCount + delta));
    document.getElementById('player-count').textContent = currentPlayerCount;
    updatePlayerInputs();
}

function updatePlayerInputs() {
    const container = document.getElementById('player-inputs-container');
    let html = '';
    
    for (let i = 1; i <= currentPlayerCount; i++) {
        html += `
            <div style="margin: 8px 0;">
                <input type="text" class="player-input" id="player-name-${i}" 
                       placeholder="یارییکەرێ ${i}">
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function initializeSetupPage() {
    document.getElementById('player-count').textContent = currentPlayerCount;
    updatePlayerInputs();
}

// ==================== GAME FUNCTIONS ====================
function startGame() {
    // Get player names and store them for replay
    const players = [];
    for (let i = 1; i <= currentPlayerCount; i++) {
        const nameInput = document.getElementById(`player-name-${i}`);
        const name = nameInput && nameInput.value.trim() !== '' ? nameInput.value : `یارییکەرێ ${i}`;
        players.push(name);
    }
    
    // Store player names for replay
    gameState.playerNames = [...players];
    
    // Start a new game with current settings
    startNewGameWithNames(players);
}

function startNewGameWithNames(players) {
    // Select words based on game mode
    let secretWord, differentWord, spyIndices = [];
    
    if (gameState.gameMode === 1) {
        // IMPOSTER GAME
        let spyCount = 1;
        if (currentPlayerCount >= 6 && currentPlayerCount <= 8) spyCount = 2;
        if (currentPlayerCount >= 9) spyCount = 3;
        
        // Randomly select spies
        while (spyIndices.length < spyCount) {
            const randomIndex = Math.floor(Math.random() * currentPlayerCount);
            if (!spyIndices.includes(randomIndex)) {
                spyIndices.push(randomIndex);
            }
        }
        
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const categoryWords = kurdishWords[randomCategory];
        secretWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
        differentWord = "";
        
    } else {
        // DIFFERENT WORD GAME (4 pizza, 1 burger)
        // Randomly select ONE person to get different word
        const differentIndex = Math.floor(Math.random() * currentPlayerCount);
        spyIndices = [differentIndex];
        
        // Select random word pair
        const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
        secretWord = randomPair.normal;      // Most players get this
        differentWord = randomPair.different; // One player gets this
    }
    
    // Initialize game state
    gameState.players = players.map((name, index) => ({
        id: index + 1,
        name: name,
        isSpy: spyIndices.includes(index),
        hasDifferentWord: gameState.gameMode === 2 ? spyIndices.includes(index) : false
    }));
    
    gameState.spies = spyIndices.map(index => index + 1);
    gameState.secretWord = secretWord;
    gameState.differentWord = differentWord;
    gameState.currentPlayerIndex = 0;
    gameState.gameOver = false;
    
    // Go to game page
    showPage('game-page');
    showNextCard();
}

function showNextCard() {
    const container = document.getElementById('card-container');
    const progress = document.getElementById('game-progress');
    const nextBtn = document.getElementById('next-player-btn');
    const revealBtn = document.getElementById('reveal-btn');
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    if (!currentPlayer) {
        // All players have seen their cards - show reveal button for both games
        let message = gameState.gameMode === 1 ? 
            'کلیک ل خوارێ بکە بو دییتنا سیخوڕی' : 
            'کلیک ل خوارێ بکە بۆ دییتنا کەسێ جیاواز';
        
        container.innerHTML = `
            <div class="card" style="cursor: default; background: #f0f7ff;">
                <div class="role-icon">🎯</div>
                <div class="role-text" style="color: #0066cc;">هەمی کارت هاتتنە دیتن</div>
                <div style="color: #666; margin-top: 15px;">${message}</div>
            </div>
        `;
        nextBtn.classList.add('hidden');
        revealBtn.classList.remove('hidden');
        
        // Update reveal button text based on game mode
        if (gameState.gameMode === 1) {
            revealBtn.textContent = 'کەشف کرنا سیخوڕی 🔎';
        } else {
            revealBtn.textContent = 'کەشف کرنا کەسێ جیاواز 🔎';
        }
        
        progress.textContent = `${gameState.players.length}/${gameState.players.length} - تەمام`;
        return;
    }
    
    progress.textContent = `یارییکەرێ ${gameState.currentPlayerIndex + 1} ل ${gameState.players.length}`;
    
    // All cards start white before reveal
    container.innerHTML = `
        <div class="card" id="role-card" onclick="revealRole(${currentPlayer.id})">
            <div class="player-name">${currentPlayer.name}</div>
            <div class="tap-message">دەستێ خۆ ڵی بدە بو بینینا رولێ خو</div>
            <div style="color: #999; font-size: 0.9rem; margin-top: 15px;">(بتنێ تو دێ بینی)</div>
        </div>
    `;
    
    nextBtn.classList.add('hidden');
    revealBtn.classList.add('hidden');
}

function revealRole(playerId) {
    const player = gameState.players.find(p => p.id === playerId);
    const container = document.getElementById('card-container');
    const nextBtn = document.getElementById('next-player-btn');
    
    if (!player) return;
    
    if (gameState.gameMode === 1) {
        // IMPOSTER GAME - colors after reveal
        if (player.isSpy) {
            // SPY - RED CARD
            container.innerHTML = `
                <div class="card-spy-revealed">
                    <div class="role-icon">🕵️</div>
                    <div class="role-text" style="color: white; font-size: 2rem; margin-bottom: 15px;">تۆ سیخوڕی!</div>
                    <div style="margin-top: 15px; font-size: 1.1rem; color: white;"> تۆ وشێ نزانی</div>
                    <div style="margin-top: 20px; color: #ffcc00; font-size: 1.1rem;">هەوڵبدە وشێ بزانی!</div>
                </div>
            `;
        } else {
            // CIVILIAN - GREEN CARD
            container.innerHTML = `
                <div class="card-civilian-revealed">
                    <div class="role-icon">👨‍🌾</div>
                    <div class="role-text" style="color: white; font-size: 2rem; margin-bottom: 15px;">تۆ مەدەنی</div>
                    <div style="margin: 15px 0; font-size: 1.1rem; color: white;">وشە:</div>
                    <div class="word-display">${gameState.secretWord}</div>
                </div>
            `;
        }
    } else {
        // DIFFERENT WORD GAME - all white cards after reveal
        const wordToShow = player.hasDifferentWord ? gameState.differentWord : gameState.secretWord;
        
        container.innerHTML = `
            <div class="card-white-revealed">
                <div class="word-display">${wordToShow}</div>
            </div>
        `;
    }
    
    nextBtn.classList.remove('hidden');
}

function nextPlayer() {
    gameState.currentPlayerIndex++;
    
    if (gameState.currentPlayerIndex < gameState.players.length) {
        showNextCard();
    } else {
        showNextCard();
    }
}

function goToRevealPage() {
    showPage('reveal-page');
    
    const container = document.getElementById('reveal-container');
    
    if (gameState.gameMode === 1) {
        // IMPOSTER GAME - show spies
        const spies = gameState.players.filter(p => p.isSpy);
        
        if (spies.length === 1) {
            const imposter = spies[0];
            container.innerHTML = `
                <div class="reveal-card">
                    <div class="role-icon">🕵️</div>
                    <div class="role-text" style="color: #ffcc00;"> سیخوڕ بریتییە ل!</div>
                    <div class="person-name">${imposter.name}</div>
                    <div style="background: #333; padding: 15px; border-radius: 30px; margin-top: 20px; border: 1px solid #ffcc00;">
                        <div style="font-size: 1.1rem; color: #ffcc00;">وشە:</div>
                        <div style="font-size: 2rem; font-weight: 500; margin-top: 5px; color: white;">${gameState.secretWord}</div>
                    </div>
                </div>
            `;
        } else {
            let spiesHtml = '<div style="margin: 15px 0;">';
            spies.forEach(spy => {
                spiesHtml += `<div style="font-size: 1.8rem; margin: 10px 0; background: #333; padding: 12px; border-radius: 30px; border: 1px solid #ffcc00; color: #ffcc00;">${spy.name}</div>`;
            });
            spiesHtml += '</div>';
            
            container.innerHTML = `
                <div class="reveal-card">
                    <div class="role-icon">🕵️🕵️</div>
                    <div class="role-text" style="color: #ffcc00;">سیخوڕ ئەڤەنە!</div>
                    ${spiesHtml}
                    <div style="background: #333; padding: 15px; border-radius: 30px; margin-top: 20px; border: 1px solid #ffcc00;">
                        <div style="font-size: 1.1rem; color: #ffcc00;">وشە:</div>
                        <div style="font-size: 2rem; font-weight: 500; margin-top: 5px; color: white;">${gameState.secretWord}</div>
                    </div>
                </div>
            `;
        }
    } else {
        // DIFFERENT WORD GAME - show the person with different word
        const differentPerson = gameState.players.find(p => p.hasDifferentWord);
        
        container.innerHTML = `
            <div class="reveal-card">
                <div class="role-icon">🎭</div>
                <div class="role-text" style="color: #ffcc00;">کەسێ جیاواز ئەڤەیە!</div>
                <div class="person-name">${differentPerson.name}</div>
                <div style="background: #333; padding: 15px; border-radius: 30px; margin-top: 20px; border: 1px solid #ffcc00;">
                    <div style="font-size: 1.1rem; color: #ffcc00;">وشەییا ئاسایی:</div>
                    <div style="font-size: 1.8rem; font-weight: 500; color: white;">${gameState.secretWord}</div>
                    <div style="font-size: 1.1rem; color: #ffcc00; margin-top: 15px;">وشەییا جیاواز:</div>
                    <div style="font-size: 1.8rem; font-weight: 500; color: #ff6b6b;">${gameState.differentWord}</div>
                </div>
            </div>
        `;
    }
}

function showFinalResults() {
    showPage('results-page');
    
    const container = document.getElementById('results-container');
    
    let playersHtml = '<div class="results-container">';
    
    if (gameState.gameMode === 1) {
        // Imposter game results
        gameState.players.forEach(player => {
            const roleText = player.isSpy ? '<span class="spy-badge">سیخوڕ</span>' : '<span class="civilian-badge">مەدەنی</span>';
            playersHtml += `
                <div class="player-result">
                    <span>${player.name}</span>
                    ${roleText}
                </div>
            `;
        });
        
        playersHtml += '</div>';
        
        // Just show the word
        container.innerHTML = `
            ${playersHtml}
            <div class="word-box">
                <div class="word-value">${gameState.secretWord}</div>
            </div>
        `;
        
    } else {
        // Different word game results
        gameState.players.forEach(player => {
            const badge = player.hasDifferentWord ? 
                '<span class="different-badge">جیاواز</span>' : 
                '<span class="normal-badge">ئاسایی</span>';
            
            playersHtml += `
                <div class="player-result">
                    <span>${player.name}</span>
                    ${badge}
                </div>
            `;
        });
        
        playersHtml += '</div>';
        
        // Show both words
        container.innerHTML = `
            ${playersHtml}
            <div class="word-box">
                <div class="word-value">${gameState.secretWord}</div>
            </div>
            <div class="word-box">
                <div class="word-value-different">${gameState.differentWord}</div>
            </div>
        `;
    }
}

// Play Again now starts a new game with the SAME mode and SAME player names!
function playAgain() {
    // Start a new game with the stored player names
    startNewGameWithNames(gameState.playerNames);
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
    
    // Close modal if clicking outside
    document.getElementById('game-description-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGameDescription();
        }
    });
});
