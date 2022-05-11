const tracker = document.getElementById('stopwatch');
//Initiates variables for each time slot
var hours = 0;
var minutes = 0;
var seconds = 0;
//Creates a boolean "on/ off" switch for the functions
var clickStop = true;

//If clickStop is true the clock stops if clickStop is false
function start() {
  if (clickStop == true) {
        clickStop = false;
        timeClock();
    }
}

//Literally the opposite of the start function
function stop() {
  if (clickStop == false) {
    clickStop = true;
  }
}

//Where the magic happens ;)
function timeClock() {
  //If the clickStop is false the seconds go up, all time is in integers
    if (clickStop == false) {
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    seconds++;

    //There's 60 seconds in a minute
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    //Theres 60 minutes in a hour
    if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
      seconds = 0;
    }
    //Insures we keep the HH:MM:SS time key
    if (seconds < 10 || seconds == 0) {
      seconds = "0" + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutes = "0" + minutes;
    }
    if (hours < 10 || hours == 0) {
      hours = "0" + hours;
    }
    //consistently updates the webpage with the correct time
    tracker.innerHTML = hours + ':' + minutes + ':' + seconds;
    //what causes the time to register per second
    setTimeout("timeClock()", 1000);
  }
}

//resets the whole stopwatch back to 00:00:00
function reset() {
    tracker.innerHTML = '<b>00:00:00</b>';
    clickStop = true;
    hours = 0;
    seconds = 0;
    minutes = 0;
}
