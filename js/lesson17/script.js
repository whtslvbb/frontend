const getS = (selector) => document.querySelector(selector);

const todayDate = getS(".todayDate");
const time = getS(".time");

const date = new Date();

const newData = date.getTimezoneOffset();

const sec = getS(".sec");
const content = getS(".content");
const timeForm = document.forms["time"];

const timerForm = document.forms["timer"];
const plus = getS(".plus");
const minus = getS(".minus");
const numberTimer = getS(".numberTimer");
const thirdTimer = getS(".thirdTimer");

plus.addEventListener("click", () => {
  if (+numberTimer.textContent < 60) {
    numberTimer.textContent = +numberTimer.textContent + 1;
    minutesTimer = +numberTimer.textContent;
  }
});

minus.addEventListener("click", () => {
  if (+numberTimer.textContent > 1) {
    numberTimer.textContent = +numberTimer.textContent - 1;
    minutesTimer = +numberTimer.textContent;
  }
});

const clockNum = (num) => {
  if (num < 10) {
    const newNum = "0" + num;
    return newNum;
  }
  return num;
};

const clockSec = (num) => {
  if (num < 100) {
    let newNum = 0;
    if (num < 10) {
      newNum = "0" + "0" + num;
      return newNum;
    }
    newNum = "0" + num;
    return newNum;
  }
  return num;
};

const currentTime = () => {
  setInterval(() => {
    const date = new Date();
    const ms = date.getTime() + -date.getTimezoneOffset() * 60 * 1000;
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    time.textContent = `${clockNum(hours)}:${clockNum(minutes)}:${clockNum(
      seconds
    )}`;
  });
};

const getDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  todayDate.textContent = `${clockNum(day)}.${clockNum(month)}.${year}`;
};

let hours = 0;
let minutes = 0;
let seconds = 0;
let milSec = 0;
const startTime = () => {
  event.target.disabled = true;
  intervalID = setInterval(() => {
    if (milSec > 999) {
      milSec = 0;
      seconds++;
    }
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes > 59) {
      minutes = 0;
      hours++;
    }
    milSec += 4;
    sec.textContent = `${clockNum(hours)}:${clockNum(minutes)}:${clockNum(
      seconds
    )}:${clockSec(milSec)}`;
  }, 4);
};

const stopTime = () => {
  clearInterval(intervalID);
  timeForm.start.disabled = false;
};

const loopTime = () => {
  content.innerHTML += `<div>${clockNum(hours)}:${clockNum(minutes)}:${clockNum(
    seconds
  )}:${clockSec(milSec)}</div>`;
};

const resetTime = () => {
  timeForm.start.disabled = false;
  clearInterval(intervalID);
  content.innerHTML = ``;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milSec = 0;
  sec.textContent = "00:00:00:000";
};

timeForm.start.addEventListener("click", startTime);
timeForm.stop.addEventListener("click", stopTime);
timeForm.loop.addEventListener("click", loopTime);
timeForm.reset.addEventListener("click", resetTime);

let minutesTimer = +numberTimer.textContent;
let secondTimer = 0;
const setTimer = () => {
  plus.disabled = true;
  minus.disabled = true;
  event.target.disabled = true;
  intervalTimer = setInterval(() => {
    thirdTimer.textContent = `${clockNum(minutesTimer)}:${clockNum(
      secondTimer
    )}`;
    if (secondTimer == 0) {
      secondTimer = 59;
      secondTimer++;
    }
    secondTimer--;
    if (secondTimer == 59) {
      minutesTimer--;
    }

    if (minutesTimer == 0 && secondTimer == 0) {
      resetTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalTimer);
  timerForm.start.disabled = false;
};

const resetTimer = () => {
  secondTimer = 0;
  minutesTimer = +numberTimer.textContent;
  clearInterval(intervalTimer);
  thirdTimer.textContent = "00:00";
  timerForm.start.disabled = false;
  plus.disabled = false;
  minus.disabled = false;
};

timerForm.start.addEventListener("click", setTimer);
timerForm.stop.addEventListener("click", stopTimer);
timerForm.reset.addEventListener("click", resetTimer);

getDate(date);

currentTime();
