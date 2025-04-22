

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
        document.getElementById("timer").innerText = "the tender is closed"; 
        clearInterval(countdown);
        years=0,
        months = 0,
            days = 0, hours = 0, minutes = 0, seconds = 0;
    }

    // Output the result
 
    document.getElementById("months").children[0].innerText = months;
    document.getElementById("days").children[0].innerText = days;
    document.getElementById("hours").children[0].innerText = hours;
    document.getElementById("minutes").children[0].innerText =minutes;
    document.getElementById("seconds").children[0].innerText =seconds;

    document.getElementById("months1").children[0].innerText = months;
    document.getElementById("days1").children[0].innerText = days;
    document.getElementById("hours1").children[0].innerText = hours;
    document.getElementById("minutes1").children[0].innerText =minutes;
    document.getElementById("seconds1").children[0].innerText =seconds;


    document.getElementById("months2").children[0].innerText = months;
    document.getElementById("days2").children[0].innerText = days;
    document.getElementById("hours2").children[0].innerText = hours;
    document.getElementById("minutes2").children[0].innerText =minutes;
    document.getElementById("seconds2").children[0].innerText =seconds;



    document.getElementById("months3").children[0].innerText = months;
    document.getElementById("days3").children[0].innerText = days;
    document.getElementById("hours3").children[0].innerText = hours;
    document.getElementById("minutes3").children[0].innerText =minutes;
    document.getElementById("seconds3").children[0].innerText =seconds;


    document.getElementById("months4").children[0].innerText = months;
    document.getElementById("days4").children[0].innerText = days;
    document.getElementById("hours4").children[0].innerText = hours;
    document.getElementById("minutes4").children[0].innerText =minutes;
    document.getElementById("seconds4").children[0].innerText =seconds;


    document.getElementById("months5").children[0].innerText = months;
    document.getElementById("days5").children[0].innerText = days;
    document.getElementById("hours5").children[0].innerText = hours;
    document.getElementById("minutes5").children[0].innerText =minutes;
    document.getElementById("seconds5").children[0].innerText =seconds;


    document.getElementById("months6").children[0].innerText = months;
    document.getElementById("days6").children[0].innerText = days;
    document.getElementById("hours6").children[0].innerText = hours;
    document.getElementById("minutes6").children[0].innerText =minutes;
    document.getElementById("seconds6").children[0].innerText =seconds;


    document.getElementById("months7").children[0].innerText = months;
    document.getElementById("days7").children[0].innerText = days;
    document.getElementById("hours7").children[0].innerText = hours;



    document.getElementById("months8").children[0].innerText = months;
    document.getElementById("days8").children[0].innerText = days;
    document.getElementById("hours8").children[0].innerText = hours;
    

    document.getElementById("months10").children[0].innerText = months;
    document.getElementById("days10").children[0].innerText = days;
    document.getElementById("hours10").children[0].innerText = hours;
    document.getElementById("minutes10").children[0].innerText =minutes;
    document.getElementById("seconds10").children[0].innerText =seconds;

}, 1000);


