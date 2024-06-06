let timerInterval;
let totalSeconds = 0;
 
const startButton =  document.getElementById('start');

const dayInput = document.getElementById('days');
const hourInput = document.getElementById('hours');
const minuteInput = document.getElementById('minutes');
const secondInput = document.getElementById('seconds');

const timer = document.getElementById('countdown');


startButton.addEventListener('click', function(){
    console.log('klick');
    startTimer();
})


function startTimer() {
    clearInterval(timerInterval);


    if(!totalSeconds){
        const days = parseInt(dayInput.value, 10);
        const hours = parseInt(hourInput.value, 10);
        const minutes = parseInt(minuteInput.value, 10);
        const seconds = parseInt(secondInput.value, 10);
        totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
        resetInputFieds();
    }

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Bitte gibt einen validen Input ein');
        return;
    }

    updateTimer();

    timerInterval = setInterval(updateTimer, 1000);
}


function updateTimer() {

    if (totalSeconds <= 0) {
    endTimer();
    return;
    }

    totalSeconds--;

    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    timer.innerText = `${String(d).padStart(2, '0')}:${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function resetInputFieds(){
    dayInput.value = 0;
    hourInput.value = 0;
    minuteInput.value = 0;
    secondInput.value = 0;
}

function endTimer(reset = false){
    clearInterval(timerInterval);
    totalSeconds = 0;
    timer.innerText = '00:00:00:00';
    startButton.inner = 'timer starten';
    alert('Timer ist abgelaufen');
}
