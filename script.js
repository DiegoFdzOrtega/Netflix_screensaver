let timeLeft = 5; // Tiempo inicial
let countdownTimer;
let idleTimer;

const countdownDisplay = document.getElementById('countdown');
const saver = document.getElementById('netflix-screensaver');
const audio = document.getElementById('tudum');

function startNetflixMode() {
    saver.classList.add('active');
    audio.currentTime = 0;
    audio.play().catch(() => console.log("Interacciona para habilitar audio"));
}

function runCountdown() {
    timeLeft--;
    countdownDisplay.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        startNetflixMode();
    }
}

function resetAll() {
    // 1. Ocultar salvapantallas y parar audio
    saver.classList.remove('active');
    audio.pause();

    // 2. Resetear variables y visualización
    timeLeft = 5;
    countdownDisplay.innerText = timeLeft;

    // 3. Limpiar intervalos anteriores
    clearInterval(countdownTimer);
    clearTimeout(idleTimer);

    // 4. Iniciar cuenta atrás de nuevo
    countdownTimer = setInterval(runCountdown, 1000);
}

// Escuchar interacciones
['mousemove', 'keydown', 'click'].forEach(e => {
    window.addEventListener(e, resetAll);
});

// Iniciar por primera vez
countdownTimer = setInterval(runCountdown, 1000);