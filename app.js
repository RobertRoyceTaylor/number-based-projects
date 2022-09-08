// App switcher for Desktop
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

//App Switcher for Mobile

for (let appMobile of apps ) {
    document.querySelector(`.${appMobile}-switch-mobile`).addEventListener("click", function (){
        for (let appMobile2 of apps) {
            const elementMobile = document.querySelector(`.${appMobile2}`);

            if (appMobile2 === appMobile) {
                elementMobile.classList.remove("hidden")
            } else {
                elementMobile.classList.add("hidden");
                document.querySelector("title").innerText = `${appMobile} by Robert`
            }
        }
    })
}

//Dark Mode



document.querySelector(".dark-mode-switch").addEventListener("click", function () {
    document.querySelector(".body").classList.toggle("dark-mode")
    document.querySelector(".header").classList.toggle("dark-mode-header")
    document.querySelector(".link-icons").classList.toggle("icon-dark")
})


//Clock JavaScript
let clockInterval = null;

function clock() {
    let date = new Date();
    let dateHours = date.getHours();
    let dateMin = date.getMinutes();
    let dateSec = date.getSeconds();
    let dateWeekday = date.toLocaleString("default", { weekday: "long" });
    let dateMonth = date.toLocaleString("default", { month: "long" });
    let dateDate = date.getDate();
    let dateYear = date.getFullYear();
    let amPm = " AM"
    if (dateHours > 12) {
        dateHours = dateHours - 12;
        amPm = " PM"
    }
    if (dateHours === 0) {
        dateHours = dateHours + 12;
        amPm = " AM"
    }
    if (dateMin < 10) {
        dateMin = "0" + dateMin;
    }
    if (dateSec < 10) {
        dateSec = "0" + dateSec;
    }
    document.getElementById("clock-time").innerText = dateHours + ":" + dateMin + ":" + dateSec + amPm;
    //date.toLocaleTimeString(); exists as well!
    document.getElementById("clock-date").innerText = dateWeekday + " " + dateMonth + " " + dateDate + ", " + dateYear

}

function updateClock() {
    clock();
    clearInterval(clockInterval);
    setInterval(clock, 1000);
    console.log("updated time")
}

updateClock();

//Counter JavaScript

const displayCounter = document.querySelector("#num-display-counter")
const negHundredCounter = document.querySelector("#neg-hundred-counter")
const negTenCounter = document.querySelector("#neg-ten-counter")
const negOneCounter = document.querySelector("#neg-one-counter")
const resetCounter = document.querySelector("#reset-counter")
const posOneCounter = document.querySelector("#pos-one-counter")
const posTenCounter = document.querySelector("#pos-ten-counter")
const posHundredCounter = document.querySelector("#pos-hundred-counter")

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


//StopWatch Controls

const stopwatchStartButton = document.getElementById("start-stopwatch");
const stopwatchStopButton = document.getElementById("stop-stopwatch");
const stopwatchResetButton = document.getElementById("reset-stopwatch");

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

stopwatchStartButton.addEventListener("click", stopwatchStart);
stopwatchStopButton.addEventListener("click", stopwatchStop);
stopwatchResetButton.addEventListener("click", stopwatchReset);

//Countdown Timer Script

//Timer Global Variables
const timerHrsDisplay = document.getElementById("timer-hrs"); //Selects the Hours
const timerMinDisplay = document.getElementById("timer-min"); //Selects the Minutes
const timerSecDisplay = document.getElementById("timer-sec"); //Selects the Seconds

let timerSeconds = 0;
let timerInterval = null;


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

const countdownTimerStart = document.getElementById("start-timer");
const countdownTimerStop = document.getElementById("stop-timer");
const countdownTimerReset = document.getElementById("reset-timer");
//Make something when it hits 0

countdownTimerStart.addEventListener("click", function () {
    if (timerInterval) {
        return
    }
    if (timerSeconds === 0) {
        return
    } else {
        timerInterval = setInterval(timerCountdown, 1000);

    }
})

countdownTimerStop.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
})

countdownTimerReset.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    timerDisplayUpdate();
});



//Countdown Timer Increase Controls
const timerUnitControls = ["hrs", "min", "sec"];

if (timerSeconds <= -1) {
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

//Countdown Timer Decrease Controls
for (let unitOfTime2 of timerUnitControls) {
    document.querySelector(`.${unitOfTime2}-decrease`).addEventListener("click", function () {
        if (timerSeconds > 0) {
            if (`${unitOfTime2}` === "hrs") {
                timerSeconds = timerSeconds - 3600;
                if (timerSeconds <= -1) {
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

const beatsPerMinDisplay = document.getElementById("metronome-bpm-display");
const metronomeClickHi = new Audio("audio/Perc_MetronomeQuartz_hi.wav");
const metronomeClickLo = new Audio("audio/Perc_MetronomeQuartz_lo.wav");
const metronomeDot = document.getElementById("metronome-inner");

let metronomeInterval = null;
let metronomeOn = false;
let beatsPerMin = 60;


//Metronome function
function metronome() {

    let milSecondsMetronome = 60000 / beatsPerMin
    metronomeInterval = setInterval(function () {
        metronomeClickHi.play();
        metronomeDot.classList.toggle("float-right");
        metronomeOn = true;
        if (metronomeOn === true) {
            clearInterval(metronomeInterval);
            metronome();
        }
    }, milSecondsMetronome)
}


//Metronome Controls
const metronomeStart = document.getElementById("metronome-start");
const metronomeStop = document.getElementById("metronome-stop");
const metronomeMinusTen = document.getElementById("metronome-minus-ten");
const metronomeMinusOne = document.getElementById("metronome-minus-one");
const metronomePlusOne = document.getElementById("metronome-plus-one");
const metronomePlusTen = document.getElementById("metronome-plus-ten");
const metronomeReset = document.getElementById("metronome-reset");

function updateMetronomeDisplay() {
    beatsPerMinDisplay.innerText = beatsPerMin;
}

//Metronome Buttons
metronomeStart.addEventListener("click", metronome)

metronomeStop.addEventListener("click", function () {
    metronomeOn = false;
    clearInterval(metronomeInterval);
})

metronomeMinusTen.addEventListener("click", function () {
    beatsPerMin = beatsPerMin - 10;
    if (beatsPerMin <= 30) {
        beatsPerMin = 30;
    }
    updateMetronomeDisplay();
})
metronomeMinusOne.addEventListener("click", function () {
    beatsPerMin = beatsPerMin - 1;
    if (beatsPerMin <= 30) {
        beatsPerMin = 30;
    }
    updateMetronomeDisplay();
})
metronomePlusOne.addEventListener("click", function () {
    beatsPerMin = beatsPerMin + 1;
    if (beatsPerMin >= 220) {
        beatsPerMin = 220;
    }
    updateMetronomeDisplay();
})
metronomePlusTen.addEventListener("click", function () {
    beatsPerMin = beatsPerMin + 10;
    if (beatsPerMin >= 220) {
        beatsPerMin = 220;
    }
    updateMetronomeDisplay();
})
metronomeReset.addEventListener("click", function () {
    beatsPerMin = 60;
    updateMetronomeDisplay();
})




