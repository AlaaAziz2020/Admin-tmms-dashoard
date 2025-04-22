function updateTimers() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("1991-03-30 00:00:00");
  now     = new Date();
  diff    = now - past;

  years  = Math.floor( diff / (1000*60*60*24*30*12) );
  months = Math.floor( diff / (1000*60*60*24*30) );
  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  y = years;
  M = months - years  * 12;
  d = days   - months * 30;
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  document.getElementById("timers")
    .innerHTML =
      '<div>' + M + '<span>months</span></div>' +
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimers()', 1000 );
function updateTimers1() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("1991-03-30 00:00:00");
  now     = new Date();
  diff    = now - past;

  years1  = Math.floor( diff / (1000*60*60*24*30*12) );
  months1 = Math.floor( diff / (1000*60*60*24*30) );
  days1   = Math.floor( diff / (1000*60*60*24) );
  hours1  = Math.floor( diff / (1000*60*60) );
  mins1   = Math.floor( diff / (1000*60) );
  secs1   = Math.floor( diff / 1000 );

  y = years1;
  M = months1 - years1  * 12;
  d = days1   - months1 * 30;
  h = hours1  - days1   * 24;
  m = mins1   - hours1  * 60;
  s = secs1   - mins1   * 60;
  document.getElementById("timers1")
    .innerHTML =
      '<div>' + M + '<span>months</span></div>' +
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimers1()', 1000 );
function updateTimers2() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("1991-03-30 00:00:00");
  now     = new Date();
  diff    = now - past;

  years2  = Math.floor( diff / (1000*60*60*24*30*12) );
  months2 = Math.floor( diff / (1000*60*60*24*30) );
  days2   = Math.floor( diff / (1000*60*60*24) );
  hours2  = Math.floor( diff / (1000*60*60) );
  mins2   = Math.floor( diff / (1000*60) );
  secs2   = Math.floor( diff / 1000 );

  y = years2;
  M = months2 - years2  * 12;
  d = days2   - months2 * 30;
  h = hours1  - days2   * 24;
  m = mins2   - hours2  * 60;
  s = secs1   - mins2   * 60;
  document.getElementById("timers2")
    .innerHTML =
      '<div>' + M + '<span>months</span></div>' +
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimers2()', 1000 );



