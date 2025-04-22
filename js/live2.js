

// Set the date we're counting down to
var countDownDate = new Date("oct 30, 2024 10:00:00").getTime();  // CHANGE DATE AND TIME HERE

// Update the count down every 1 second
var countdown = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var diff = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((diff  % (1000 * 60 * 60 * 24 * 30 )) / (1000 * 60 * 60* 24));
    var hours = Math.floor((diff  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff  % (1000 * 60)) / 1000);
    // If the difference is less than 0, stop countdown
    
    if (diff < 0) {
        document.getElementById("timer3").innerText = "the tender is closed"; 
        clearInterval(countdown);
        years=0,
        months = 0,
            days = 0, hours = 0, minutes = 0, seconds = 0;
    }

    // Output the result
 
    document.getElementById("months20").children[0].innerText = months;
    document.getElementById("days20").children[0].innerText = days;
    document.getElementById("hours20").children[0].innerText = hours;
 



}, 1000);


