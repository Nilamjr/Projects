console.log("Count Down Project");

const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minsElem = document.getElementById('mins');
const secondsElem = document.getElementById('sec');

const newYears = "1 Jan 2022";

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60; 

    daysElem.innerHTML = days;
    hoursElem.innerHTML = formatTime(hours);
    minsElem.innerHTML = formatTime(minutes);
    secondsElem.innerHTML = formatTime(seconds);

    console.log(days, hours, minutes, seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


// initial call  
countDown();
setInterval(countDown, 1000);