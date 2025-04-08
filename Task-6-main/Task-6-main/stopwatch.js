let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let running = false;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('time').textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (running) return;
  running = true;
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  running = false;
}

function resetTimer() {
  clearInterval(interval);
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
