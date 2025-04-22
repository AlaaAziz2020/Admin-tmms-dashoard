
// Get todays date and time
window.onload = function () { getTime(); }
function getTime() {
    // Find the difference between now and the count down date

    // Time calculations for days, hours, minutes and seconds
    var today = new Date();
    var months = (today.getMonth() + 1);
    var days = today.getDate();
    var hours = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);


    // Output the result
    document.getElementById("months").children[0].innerHTML = months;
    document.getElementById("days").children[0].innerHTML = days;
    document.getElementById("hours").children[0].innerHTML = hours;
    document.getElementById("minutes").children[0].innerHTML = minutes;
    document.getElementById("seconds").children[0].innerText = seconds;



    document.getElementById("months1").children[0].innerText = months;
    document.getElementById("days1").children[0].innerText = days;
    document.getElementById("hours1").children[0].innerText = hours;
    document.getElementById("minutes1").children[0].innerHTML = minutes;
    document.getElementById("seconds1").children[0].innerText = seconds;
  

    document.getElementById("months2").children[0].innerText = months;
    document.getElementById("days2").children[0].innerText = days;
    document.getElementById("hours2").children[0].innerText = hours;



 



    document.getElementById("months3").children[0].innerText = months;
    document.getElementById("days3").children[0].innerText = days;
    document.getElementById("hours3").children[0].innerText = hours;


    document.getElementById("months4").children[0].innerText = months;
    document.getElementById("days4").children[0].innerText = days;
    document.getElementById("hours4").children[0].innerText = hours;


    document.getElementById("months5").children[0].innerText = months;
    document.getElementById("days5").children[0].innerText = days;
    document.getElementById("hours5").children[0].innerText = hours;


    document.getElementById("months6").children[0].innerText = months;
    document.getElementById("days6").children[0].innerText = days;

    document.getElementById("hours6").children[0].innerText = hours;


    document.getElementById("months7").children[0].innerText = months;
    document.getElementById("days7").children[0].innerText = days;
    document.getElementById("hours7").children[0].innerText = hours;


    document.getElementById("months8").children[0].innerText = months;
    document.getElementById("days8").children[0].innerText = days;
    document.getElementById("hours8").children[0].innerText = hours;
    setTimeout(function () { getTime() }, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


