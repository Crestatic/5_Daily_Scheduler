
// var timeBlockEl =  $('time-block')

var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do YYYY'));


window.onload = currentTime();
// setInterval(currentTime, 1000);

function currentTime() { 
    // var currentHourEl = 13 (Test variable)
    var currentHourEl = moment().hour();
    console.log(currentHourEl);

    if (currentHourEl > 8) {
        $('#8am').addClass('past');
    } else if (currentHourEl == 8) {
        $('#8am').addClass('present');
    } else $('#8am').addClass('future');

    if (currentHourEl > 9) {
        $('#9am').addClass('past');
    } else if (currentHourEl == 9) {
        $('#9am').addClass('present');
    } else $('#9am').addClass('future');

    if (currentHourEl > 10) {
        $('#10am').addClass('past');
    } else if (currentHourEl == 10) {
        $('#10am').addClass('present');
    } else $('#10am').addClass('future');

    if (currentHourEl > 11) {
        $('#11am').addClass('past');
    } else if (currentHourEl == 11) {
        $('#11am').addClass('present');
    } else $('#11am').addClass('future');

    if (currentHourEl > 12) {
        $('#12pm').addClass('past');
    } else if (currentHourEl == 12) {
        $('#12pm').addClass('present');
    } else $('#12pm').addClass('future');

    if (currentHourEl > 13) {
        $('#1pm').addClass('past');
    } else if (currentHourEl == 13) {
        $('#1pm').addClass('present');
    } else $('#1pm').addClass('future');

    if (currentHourEl > 14) {
        $('#2pm').addClass('past');
    } else if (currentHourEl == 14) {
        $('#2pm').addClass('present');
    } else $('#2pm').addClass('future');

    if (currentHourEl > 15) {
        $('#3pm').addClass('past');
    } else if (currentHourEl == 15) {
        $('#3pm').addClass('present');
    } else $('#3pm').addClass('future');

    if (currentHourEl > 16) {
        $('#4pm').addClass('past');
    } else if (currentHourEl == 16) {
        $('#4pm').addClass('present');
    } else $('#4pm').addClass('future');

    if (currentHourEl > 17) {
        $('#5pm').addClass('past');
    } else if (currentHourEl == 17) {
        $('#5pm').addClass('present');
    } else $('#5pm').addClass('future');
}    

// var saveBtnEl = $('.saveBtn');


