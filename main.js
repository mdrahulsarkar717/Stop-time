/*const hour = document.querySelector('.hour');
const minit = document.querySelector('.minit');
const sec = document.querySelector('.sec');*/



const endBtn = document.querySelector('.end');
const playBtn = document.querySelector('.play-stop');
const resetBtn = document.querySelector('.reset');

const displayTime = document.querySelector('.displayTime');

let [hour, minit, sec] = [0, 0, 0];
let timer = null;



function endTime() {
    sec++;
    if (sec = 60) {
        sec = 0;
        minit++;
        if (minit = 60) {
            minit = 0;
            hour++;
        } 
    }
   let rejult =  displayTime.innerHTML = sec + " : " + minit +" : "+ hour;
}
function startTime() {
    
    if (timer != null) {
        clearInterval(timer);
    }
    setInterval(endTime, 1000);
    
}


const rejTime = document.querySelector('.rej-time');

function EndTime() {
    rejTime.innerHTML = "End Time - " + rejult;
    displayTime.innerHTML = "";
}