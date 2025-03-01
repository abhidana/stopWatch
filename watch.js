let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (!running) {
    running = true;
    startTime = performance.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function stopTimer() {
  if (running) {
    running = false;
    elapsedTime = performance.now() - startTime;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  running = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(0, 0, 0, 0);
}

function updateTime() {
  if (running) {
    elapsedTime = performance.now() - startTime;
    let time = new Date(elapsedTime);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(elapsedTime % 1000);
    displayTime(hours, minutes, seconds, milliseconds);
  }
}

function displayTime(hours, minutes, seconds, milliseconds) {
  display.innerHTML =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    "." +
    (milliseconds < 100 ? "0" : "") +
    (milliseconds < 10 ? "0" : "") +
    milliseconds;
}
