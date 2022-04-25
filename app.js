// App switcher
const apps = ["clock", "counter", "stopwatch", "timer", "metronome"]; //List of all apps

for (let app of apps) { //Selcts the elements in the array
    document.querySelector(`.${app}-switch`).addEventListener("click", function () { //Based on the user input of the array, changes the app
        for (let app2 of apps) {
            const element = document.querySelector(`.${app2}`);

            if (app2 === app) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
                document.querySelector("title").innerText = `${app} by Robert`
            }

        }
    });
}

//Dark Mode

document.querySelector(".dark-mode-switch").addEventListener("click", function(){
    document.querySelector(".body").classList.toggle("dark-mode")
    document.querySelector(".header").classList.toggle("dark-mode-header")
})


//Clock JavaScript
let clockInterval = null;

function clock() {
    let date = new Date();
    let dateHours = date.getHours();
    let dateMin = date.getMinutes();
    let dateSec = date.getSeconds();
    let dateWeekday = date.toLocaleString("default", {weekday: "long"});
    let dateMonth =  date.toLocaleString("default", {month: "long"});
    let dateDate = date.getDate();
    let dateYear = date.getFullYear();
    let amPm = " AM"
    if(dateHours > 12) {
      dateHours = dateHours - 12;
      amPm = " PM"
    }
    if(dateMin < 10) {
        dateMin = "0" + dateMin;
    }
    if(dateSec < 10) {
        dateSec = "0" + dateSec;
    }
    document.getElementById("clock-time").innerText = dateHours + ":" + dateMin + ":" + dateSec + amPm;
    //date.toLocaleTimeString(); exists as well!
    document.getElementById("clock-date").innerText = dateWeekday + " " + dateMonth + " " + dateDate + ", " + dateYear
    
  }
  
function updateClock(){
    clock();
    clearInterval(clockInterval);
    setInterval(clock, 1000);
    console.log("updated time")
}

updateClock();

//Counter JavaScript

//To Do: Update and clean up code using functions()
let displayCounter = document.querySelector("#num-display-counter")
let negHundredCounter = document.querySelector("#neg-hundred-counter")
let negTenCounter = document.querySelector("#neg-ten-counter")
let negOneCounter = document.querySelector("#neg-one-counter")
let resetCounter = document.querySelector("#reset-counter")
let posOneCounter = document.querySelector("#pos-one-counter")
let posTenCounter = document.querySelector("#pos-ten-counter")
let posHundredCounter = document.querySelector("#pos-hundred-counter")

let numDisplayCounter = 0; //Default value for the counter

function updateDisplayCounter() { //Allows the display to update
    displayCounter.innerHTML = numDisplayCounter;
}


negHundredCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter - 100;
    updateDisplayCounter();
});

negTenCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter - 10;
    updateDisplayCounter();
});

negOneCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter - 1;
    updateDisplayCounter();
});

resetCounter.addEventListener("click", function () {
    numDisplayCounter = 0;
    updateDisplayCounter();
});

posOneCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter + 1;
    updateDisplayCounter();
});

posTenCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter + 10;
    updateDisplayCounter();
});

posHundredCounter.addEventListener("click", function () {
    numDisplayCounter = numDisplayCounter + 100;
    updateDisplayCounter();
});


//Stopwatch Script

const stopwatchHrsDisplay = document.getElementById("stopwatch-hour") 
const stopwatchMinDisplay = document.getElementById("stopwatch-minute") 
const stopwatchSecDisplay = document.getElementById("stopwatch-second") 

let stopwatchSeconds = 0;
let stopwatchInterval = null;

function stopwatchTimerFunction() {

    stopwatchSeconds++

    let stopwatch_hrs = Math.floor(stopwatchSeconds / 3600);
    let stopwatch_min = Math.floor((stopwatchSeconds - stopwatch_hrs * 3600) / 60);
    let stopwatch_sec = stopwatchSeconds % 60;

    if (stopwatch_hrs < 10) {
        stopwatch_hrs = "0" + stopwatch_hrs
    }
    if (stopwatch_min < 10) {
        stopwatch_min = "0" + stopwatch_min
    }
    if (stopwatch_sec < 10) {
        stopwatch_sec = "0" + stopwatch_sec
    }
    stopwatchHrsDisplay.innerText = `${stopwatch_hrs}`;
    stopwatchMinDisplay.innerText = `${stopwatch_min}`;
    stopwatchSecDisplay.innerText = `${stopwatch_sec}`;
}

// function stopwatchDisplayUpdate() {
//     stopwatchTimerFunction();
// }

function stopwatchStart() {
    if (stopwatchInterval) {
        return
    }
    stopwatchInterval = setInterval(stopwatchTimerFunction, 1000);

}
function stopwatchStop() {
    clearInterval(stopwatchInterval)
    stopwatchInterval = null;
}
function stopwatchReset() {
    stopwatchStop()
    stopwatchSeconds = 0;
    stopwatchHrsDisplay.innerText = "00";
    stopwatchMinDisplay.innerText = "00";
    stopwatchSecDisplay.innerText = "00";
}

document.getElementById("start-stopwatch").addEventListener("click", function(){
    if (stopwatchInterval) {
        return
    }
    
    stopwatchInterval = setInterval(stopwatchTimerFunction, 1000);
});
document.getElementById("stop-stopwatch").addEventListener("click", function(){
    clearInterval(stopwatchInterval)
    stopwatchInterval = null;
});
document.getElementById("reset-stopwatch").addEventListener("click", function(){
    stopwatchStop()
    stopwatchSeconds = 0;
    stopwatchHrsDisplay.innerText = "00";
    stopwatchMinDisplay.innerText = "00";
    stopwatchSecDisplay.innerText = "00";
});

//Countdown Timer Script

//Timer Global Variables
const timerHrsDisplay = document.getElementById("timer-hrs"); //Selects the Hours
const timerMinDisplay = document.getElementById("timer-min"); //Selects the Minutes
const timerSecDisplay = document.getElementById("timer-sec"); //Selects the Seconds
let timerSeconds = 0;
let timerInterval = null;
// let timer_hrs = Math.floor(timerSeconds / 3600);
// let timer_min = Math.floor((timerSeconds - timer_hrs * 3600) / 60);
// let timer_sec = timerSeconds % 60;


function timerLengthFunction() {
    let timer_hrs = Math.floor(timerSeconds / 3600);
    let timer_min = Math.floor((timerSeconds - timer_hrs * 3600) / 60);
    let timer_sec = timerSeconds % 60;


    if (timer_hrs < 10) {
        timer_hrs = "0" + timer_hrs
    }
    if (timer_min < 10) {
        timer_min = "0" + timer_min
    }
    if (timer_sec < 10) {
        timer_sec = "0" + timer_sec
    }
    //Default Display for Timer
    timerHrsDisplay.innerText = `${timer_hrs}`;
    timerMinDisplay.innerText = `${timer_min}`;
    timerSecDisplay.innerText = `${timer_sec}`;
}

//Timer Display Update
function timerDisplayUpdate() {
    timerLengthFunction();
}

// Timer Control Functions

function timerCountdown() {
    timerSeconds--
    timerDisplayUpdate();
    if (timerSeconds === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}



// Timer Control Buttons
//Make something when it hits 0

document.getElementById("start-timer").addEventListener("click", function(){
    if (timerInterval) {
        return
    }
    if (timerSeconds === 0) {
        return
    } else {
        timerInterval = setInterval(timerCountdown,1000);

    }
})

document.getElementById("stop-timer").addEventListener("click", function(){
    clearInterval(timerInterval);
    timerInterval = null;
})

document.getElementById("reset-timer").addEventListener("click", function(){
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    timerDisplayUpdate();
});



//Timer Increase Controls
const timerUnitControls = ["hrs", "min", "sec"];

if (timerSeconds <= -1){
    timerSeconds = 0;
}
for (let unitOfTime of timerUnitControls) {
    document.querySelector(`.${unitOfTime}-increase`).addEventListener("click", function () {
        if (`${unitOfTime}` === "hrs") {
            timerSeconds = timerSeconds + 3600;
            timerDisplayUpdate();
        }
        if (`${unitOfTime}` === "min") {
            timerSeconds = timerSeconds + 60;
            timerDisplayUpdate();
        }
        if (`${unitOfTime}` === "sec") {
            timerSeconds++;
            timerDisplayUpdate();
        }

    });
}

//Timer Decrease Controls
for (let unitOfTime2 of timerUnitControls) {
    document.querySelector(`.${unitOfTime2}-decrease`).addEventListener("click", function () {
        if (timerSeconds > 0 ) {
            if (`${unitOfTime2}` === "hrs") {
                timerSeconds = timerSeconds - 3600;
                if (timerSeconds <= -1){
                    timerSeconds = 0;
                }
                timerDisplayUpdate();
            }
            if (`${unitOfTime2}` === "min") {
                timerSeconds = timerSeconds - 60;
                timerDisplayUpdate();
            }
            if (`${unitOfTime2}` === "sec") {
                timerSeconds--;
                timerDisplayUpdate();
            }
        }
        

    });
}


//Metronome Script

//How to convert BPM to Milliseconds
// 60,000 / BPM = MS

let beatsPerMin = 60;
let milSecondsMetronome = 60000 / beatsPerMin