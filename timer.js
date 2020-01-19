const minSelect = document.getElementById('minSelect');
const secSelect = document.getElementById('secSelect');
const minSelectList = document.getElementById('minSelectList');
const secSelectList = document.getElementById('secSelectList');
const minDisplay = document.getElementById('minDisplay');
const secDisplay = document.getElementById('secDisplay');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let time = 0;
let isPaused = false;
let myTimer;

document.addEventListener('DOMContentLoaded', init);

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

function init() {
    _populateSelect(minSelectList);
    _populateSelect(secSelectList);
}

function resetTimer() {
    isPaused = false;
    clearInterval(myTimer);
    minDisplay.textContent = '00';
    secDisplay.textContent = '00';
}

function startTimer() {
    
    if(!isPaused) {
        let minutes = minSelect.value
        let seconds = secSelect.value;
        time = _getTotalTime(minutes, seconds);
    }
    if(time > 0) {
        isPaused = false;
        myTimer = setInterval(timer, 1000);
    }
}

function stopTimer() {
    isPaused = true;
    clearInterval(myTimer);
}

function timer() {
    time--;
    if(time <= 0) {
        resetTimer();
    }
    let min = Math.floor(time / 60);
    let sec = time % 60;
    minDisplay.textContent = _formatTime(min);
    secDisplay.textContent = _formatTime(sec);
}

function _convertMinToSec(minutes) {
    return minutes * 60;
}

function _formatTime(time) {
    return ('0' + time).slice(-2);
}

function _getTotalTime(m, s) {
    let a = _convertMinToSec(m);
    this.time = a + Number(s);
    return this.time;
}

function _populateSelect(selectElem) {
    for(var i=0; i< 60; i++) {
        let opt = document.createElement('OPTION');
        opt.value = i;
        selectElem.appendChild(opt);
    }
}