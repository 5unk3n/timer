const $hoursInput = document.querySelector("#hours");
const $minutesInput = document.querySelector("#minutes");
const $secondsInput = document.querySelector("#seconds");
const $startPauseBtn = document.querySelector("#startPause");
const $resetBtn = document.querySelector("#reset");

let timerState = false;

function startPauseTimer() {
  if (timerState) {
    clearInterval(timer);
    timerState = false;
    $startPauseBtn.style.backgroundImage = "url(src/button/start-default.svg)";
  } else {
    timer = setInterval(decrementSeconds, 1000);
    timerState = true;
    $startPauseBtn.style.backgroundImage = "url(src/button/pause.svg)";
  }
}

// TODO: 한자리 수 두자리료 표시하기
function decrementSeconds() {
  if ($secondsInput.value > 0) {
    $secondsInput.value -= 1;
  } else if ($minutesInput.value > 0) {
    $secondsInput.value = 59;
    $minutesInput.value -= 1;
  } else if ($hoursInput.value > 0) {
    $secondsInput.value = 59;
    $minutesInput.value = 59;
    $hoursInput.value -= 1;
  } else {
    $secondsInput.value = 0;
    $minutesInput.value = 0;
    $hoursInput.value = 0;
    clearInterval(timer);
    timerState = false;
    $startPauseBtn.style.backgroundImage = "url(src/button/start-default.svg)";
    alert("끝~");
  }
}

function reset() {
  $hoursInput.value = 0;
  $minutesInput.value = 0;
  $secondsInput.value = 0;
  $startPauseBtn.style.backgroundImage = "url(src/button/start-default.svg)";
  clearInterval(timer);
}

function inputValidHandler() {
  if (this.value.length > 2) {
    if (this === $hoursInput) {
      this.value = this.value.slice(0, 2);
    } else {
      this.value = 59;
    }
  }
}

$hoursInput.addEventListener("input", inputValidHandler);
$minutesInput.addEventListener("input", inputValidHandler);
$secondsInput.addEventListener("input", inputValidHandler);

$startPauseBtn.addEventListener("click", startPauseTimer);
$resetBtn.addEventListener("click", reset);
