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
            'کلیک ل خوارێ بکە ب
