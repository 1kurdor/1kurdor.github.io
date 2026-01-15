const canvas = document.getElementById('wordCanvas');
const ctx = canvas.getContext('2d');
let words = [];
const wordList = ["Kurdor", "KurdorDev", "Rashid Farhad", "کوردور", "رەشید فەرهاد", "Developer", "Web Dev", "Frontend", "Backend", "Fullstack", "Coder"];

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    words = [];
    for (let i = 0; i < 50; i++) {
        words.push({
            text: wordList[Math.floor(Math.random() * wordList.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            fontSize: Math.random() * 5 + 14,
            speed: Math.random() * 0.15 + 0.05,
            opacity: Math.random() * 0.12 + 0.03 
        });
    }
}

function draw() {
    // This clears the screen so the words move smoothly
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    words.forEach(word => {
        // USE BACKTICKS ` BELOW
        ctx.font = `500 ${word.fontSize}px 'Rabar_021', sans-serif`;
        ctx.fillStyle = `rgb(0, 0, 0, ${word.opacity})`;
        
        ctx.fillText(word.text, word.x, word.y);
        word.y -= word.speed;
        
        if (word.y < -50) {
            word.y = canvas.height + 50;
            word.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(draw);
}

// Start only when fonts are ready
document.fonts.ready.then(() => {
    init();
    draw();
});

window.addEventListener('resize', init);
// This forces the browser to wait for the Rabar font file before starting the animation
document.fonts.load("12px 'Rabar 021'").then(() => {
    console.log("Rabar font is now active!");
    init();
    draw();
});
const audio = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');
const statusIcon = document.getElementById('statusIcon');

// Define your icon paths clearly
const soundOnImg = "assets/image/sound-on.png";
const soundOffImg = "assets/image/sound-off.png";

muteBtn.addEventListener('click', () => {
    if (audio.muted) {
        // ACTION: Turn Sound ON
        audio.muted = false;
        audio.play(); 
        statusIcon.src = soundOffImg; // Show "Off" icon now so they can mute it later
        console.log("Music Unmuted - Playing now");
    } else {
        // ACTION: Turn Sound OFF
        audio.muted = true;
        statusIcon.src = soundOnImg; // Show "On" icon again
        console.log("Music Muted");
    }
});