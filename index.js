var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  console.log(second)
  minute = d.getMinutes() * 6;
  console.log(minute)
  hour = d.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("seconds").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("minutes").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hours").style.transform =
    "rotate(" + hour + "deg)";
}, 1000);