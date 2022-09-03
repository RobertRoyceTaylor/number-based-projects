# Number Projects

Number Projects is a collection of 5 web apps created using HTML, CSS, and JavaScript to practice my skills within JavaScript.

## Table of Contents
* [General Information](#general-information)
* [Clock App](#clock-app)
* [Counter App](#counter-app)
* [Stopwatch App](#stopwatch-app)
* [Countdown App](#countdown-app)
* [Metronome App](#metronome-app)
* [Planned Features](#planned-features)

## General Information

The Number Projects App started as a test of my skills working with numbers inside of JavaScript and expanded into several different apps all within the same file. Each app can run while the other apps are running and are independent of each other. All the apps can be selected from the top menu bar along with a dark mode button for easier viewing in lower light.

## Clock App

This app takes the local time from your computer and displays the time. No input from the user required.

![Clock App Image](https://imgur.com/bBpVdmb.jpg)

## Counter App

This app allows the user to increment / decrement a counter by 1, 10, and 100. The controls are straightforward and allow for the user to reset the counter back to zero at anytime.

![Counter App Image](https://imgur.com/6NIFiMb.jpg)

## Stopwatch App

This app will count up by 1 second every second until stopped, reset, or the user refreshes the window. 

![Stopwatch App](https://imgur.com/gBPZYsY.jpg)

## Countdown App

This app allows the user to set a custom timer in the format of [hours : minutes : seconds] that will count down 1 seconds every second until the timer hits zero. The controls of this app are more involved than previous apps. Above and below each field is an up arrow and a down arrow button that will incriment each field by 1(hour, minute, or second depending) when pressed up and decrement its respective field by 1(hour,minute,second).

![Countdown Timer Controls](https://imgur.com/Qwnhnfj.jpg)

![Countdown Timer Example Timer](https://imgur.com/cEais9N.jpg)

There is more to the decrement however. If the hour field is populated (example 01:00:00) and you decrement the second button, it will drop the time from (01:00:00) to (00:59:59). The same works for the minute button dropping it down to (00:59:00). If the timer is below 1 hour and you decrement the hour field by 1. It will reset the timer to 00:00:00.

Once the timer is set, the user can start, stop, and reset (00:00:00) the countdown timer.

![Countdown Timer Start Stop Reset](https://imgur.com/3uqs2By.jpg)

## Metronome App

This app create a click sound and a visual based on the current beats per minute (BPM) set by the user. The default is 60 BPM (1 beat per second) but can be increased and decreased by a value of 1 or 10, displayed by the [ < > ] brackets within the buttons.

![Metronome Increase/Decrease Controls](https://imgur.com/Whd9Wmp.jpg)

The metronome ranges from 30 BPM to 220 BPM in 1 BPM intervals. The user can control the speed while running and can stop it anytime. The reset button returns the metronome to 60 BPM.

![Metronome Controls](https://imgur.com/Ka19Tt6.jpg)


## Planned Features

<Text Here>












To do for mobile experience:
- Fix the header scaling
- Fix the metronome scaling
- Fix the buttons for the applications scaling
- Impliment a better solution for the dark mode button on mobile

To do: 
- Add a sound or animation to the Countdown app
- Fix the Metronome app from moving the increase buttons when the BPM > 100
- Fix the Metronome app visual not moving
- Fix the desync with the metronome app (current version is a proof of concept)
