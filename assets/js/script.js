// Variables
const saveBtn = $(".saveBtn");
const currentTime = moment().format("HH");
const currentTimeInt = parseInt(currentTime);

// JQuery Begins
$(document).ready(function () {

    // shows the date and time in the header
    $("#currentDay").append();

    const newDate = () => {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    }
    setInterval(newDate, 1000);
});