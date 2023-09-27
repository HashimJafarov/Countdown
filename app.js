const countdownElement = document.getElementById("countdown");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let hours = 6;
let minutes = 0;
let seconds = 0;
let totalSeconds = hours * 3600 + minutes * 60 + seconds;
let intervalId = null;

const createCountdown = () => {
  if (totalSeconds <= 0) {
    clearInterval(intervalId);
    countdownElement.innerHTML = "Countdown expired!";
  } else {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let shownHours = hours < 10 ? "0" + hours : hours;
    let shownMinutes = minutes < 10 ? "0" + minutes : minutes;
    let shownSeconds = seconds < 10 ? "0" + seconds : seconds;

    countdownElement.innerHTML = `
    
    ${shownHours}h ${shownMinutes}m ${shownSeconds}s`;
    totalSeconds--;
  }
};

startBtn.addEventListener("click", () => {
  intervalId = setInterval(createCountdown, 1000);
  startBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  createCountdown();
  startBtn.disabled = false;
});

createCountdown();
