/// Gives the month and day methods a string to connect to instead of
/// returning a number
var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", 
            "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
            "Friday", "Saturday"];

/// Bundling of the Date() object and its methods    
var dateNow = new Date();
var month = months[dateNow.getMonth()];
var day = days[dateNow.getDay()];
var curDate = dateNow.getDate();
var hour = dateNow.getHours();
var minute = dateNow.getMinutes();
var halfDay = 0;

/// Fixes the missing 0 problem thrown up when the minutes is
/// Less than 10
if (minute < 10)  {
    minute = "0" + minute;
}

/// Changes time from 24hr format to 12hr period format
if (hour <= 12)  {
    halfDay = 'AM'
}
if (hour > 12)  {
   halfDay = 'PM'
    hour = hour - 12;
}
var time = hour + ":" + minute + halfDay;

/// Collecting and bundling Stamps together for debugging
var timeStamp = "Time: " + time + "<br>";
var dayStamp = "Day: " + day + "<br>";
var monthStamp = "Month: " + month + "<br>";
var dateStamp = "Date: " + curDate + "<br>";

var answer = "It is currently: " + time + " on a " + day + ", "
            + month + curDate + "."; 

/// Checking Stamps for Debugging
/// document.write(timeStamp);
/// document.write(dayStamp);
/// document.write(monthStamp);
/// document.write(dateStamp);

/// Requested Output
document.write(answer.bold().italics())
