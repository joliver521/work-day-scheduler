// Variables
const saveBtn = $(".saveBtn");
const currentTime = moment().format("HH");
const currentTimeInt = parseInt(currentTime);

// data attributes for the jquery function to set a certain color based on the current time
$('#9Time').attr('timeInfo', moment('9:00 am', 'h:mm a').format('HH'));
$('#10Time').attr('timeInfo', moment('10:00 am', 'h:mm a').format('HH'));
$('#11Time').attr('timeInfo', moment('11:00 am', 'h:mm a').format('HH'));
$('#12Time').attr('timeInfo', moment('12:00 pm', 'h:mm a').format('HH'));
$('#1Time').attr('timeInfo', moment('1:00 pm', 'h:mm a').format('HH'));
$('#2Time').attr('timeInfo', moment('2:00 pm', 'h:mm a').format('HH'));
$('#3Time').attr('timeInfo', moment('3:00 pm', 'h:mm a').format('HH'));
$('#4Time').attr('timeInfo', moment('4:00 pm', 'h:mm a').format('HH'));
$('#5Time').attr('timeInfo', moment('5:00 pm', 'h:mm a').format('HH'));

// JQuery Begins
$(document).ready(function () {

    // shows the date and time in the header
    $("#currentDay").append();

    const newDate = () => {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    }
    setInterval(newDate, 1000);

    // function that operates the saveBtn and triggers data to be stored in local storage
    saveBtn.on("click", function () {
        var hour = $(this).attr("data-time"); // reference to the html doc data-time
        var input = $();

        localStorage.setItem(hour, input); // saves input into local storage
    });
});