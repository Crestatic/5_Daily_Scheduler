
var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do YYYY'));

window.onload = currentTime();

function currentTime() {
    var currentHourEl = moment().hour();
    var timeBlockEl =  $('time-block')
    console.log(currentHourEl);
}
