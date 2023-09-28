const countdownElement = document.querySelector(".countdown");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
let hours = 6;
let minutes = 0;
let seconds = 0;
let totalSeconds = hours * 3600 + minutes * 60 + seconds;
let intervalId = null;

const createCountdown = () => {
  if (totalSeconds <= 0) {
    clearInterval(intervalId);
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    countdownElement.innerHTML = `
    <div>
    <p class="expired">Countdown expired!</p>
    </div>
    `;
  } else {
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
    let shownHours = hours < 10 ? "0" + hours : hours;
    let shownMinutes = minutes < 10 ? "0" + minutes : minutes;
    let shownSeconds = seconds < 10 ? "0" + seconds : seconds;

    countdownElement.innerHTML = `
    <div class="countdown_wrapper">
      <div class="countdown_hours">
        <p class="timer">${shownHours}</p>
        <p>Hours</p>
      </div>
      <div class="countdown_minutes">
        <p class="timer">${shownMinutes}</p>
        <p>Minutes</p>
      </div>
      <div class="countdown_seconds">
        <p class="timer">${shownSeconds}</p>
        <p>Seconds</p>
        </div>
        </div>
        `;
    totalSeconds--;
  }
};
startBtn.addEventListener("click", () => {
  intervalId = setInterval(createCountdown, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  createCountdown();
  startBtn.disabled = true;
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.disabled = true;
  clearInterval(intervalId);
  startBtn.disabled = false;
});

createCountdown();
