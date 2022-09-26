let displayDayOfWeek = document.getElementById("display-day-of-week");
let displayDay = document.getElementById("display-day");
let displayHour = document.getElementById("display-hour");
let displayMinutes = document.getElementById("display-minutes");
let displaySeconds = document.getElementById("display-seconds");
let displayMonth = document.getElementById("display-month");

let currentDate = new Date();

let dayOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
let monthOfYear = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "OCT", "NOV", "DEC"]

displayDayOfWeek.innerHTML = dayOfWeek[currentDate.getDay()];
displayDay.innerHTML = currentDate.getDate();
displayHour.innerHTML = currentDate.getHours();
displayMinutes.innerHTML = currentDate.getMinutes();
displaySeconds.innerHTML = currentDate.getSeconds();
displayMonth.innerHTML = monthOfYear[currentDate.getMonth()];

setInterval(updateSeconds , 1000);
function updateSeconds() {
    let seconds = currentDate.getSeconds() + 1;
    currentDate.setSeconds(seconds);

    if (seconds < 10 && seconds > 0) {
        displaySeconds.innerHTML = "0" + seconds;
    } else if (seconds == 60)
        displaySeconds.innerHTML = "00";
    else {
        displaySeconds.innerHTML = seconds;
    }
    
}
setInterval(updateMinutes, 1000*60);
function updateMinutes() {
    let minutes = currentDate.getMinutes() + 1;
    currentDate.setMinutes(minutes);
    if (minutes < 10) {
        displayMinutes.innerHTML = "0" + minutes;
    } else if (minutes == 60)
        displayMinutes.innerHTML = "00";
    else {
        displayMinutes.innerHTML = minutes;
    }
}
