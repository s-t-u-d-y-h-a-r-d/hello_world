// refresh
function refresh() {
  var refresh = 1000;
  setTimeout("clock()", refresh);
  setTimeout("status()", refresh);
  setTimeout("statusI()", refresh);
  setTimeout("rotate()", refresh);
  setTimeout("rotate2()", refresh);
  setTimeout("verticalMid()", refresh);
  setTimeout("update()", refresh);
}

// main!!!

// current time
function clock() {
  const time = new Date();
  // date
  const month = time.toDateString().substring(4, 7);
  const day = time.getDate();
  const week = time.toDateString().substring(0, 3);
  // time
  const hour = time.getHours();
  const minute = time.getMinutes();
  const sec = time.getSeconds();
  // 12 hour
  const hrr = hour > 12 ? hour - 12 : hour;
  // format
  const hr = hrr < 10 ? "0" + hrr : hrr;
  const min = minute < 10 ? "0" + minute : minute;
  // am & pm
  const ampm = hour < 12 ? "AM" : "PM";
  // format
  const mytime = `${month} ${day} ${week} ${hr}:${min} ${ampm}`;
  // result
  document.getElementById("time").innerHTML = mytime;
  refresh();
}

// wifi, battery, etc
function status() {
  const time = new Date();
  // date
  const week = time.toDateString().substring(0, 3);
  // time
  const min = time.getMinutes();
  const sec = time.getSeconds();

  if (week == "Sat" || week == "Sun") {
    document.getElementById("img1").src = "../img/bar/signal01.png";
  } else {
    document.getElementById("img1").src = "../img/bar/signal02.png";
  }

  if (sec >= 0 && sec < 15) {
    document.getElementById("img2").src = "../img/bar/wifi01.png";
  } else if (sec >= 15 && sec < 30) {
    document.getElementById("img2").src = "../img/bar/wifi02.png";
  } else if (sec >= 30 && sec < 45) {
    document.getElementById("img2").src = "../img/bar/wifi03.png";
  } else {
    document.getElementById("img2").src = "../img/bar/wifi04.png";
  }

  if (min >= 0 && min < 15) {
    document.getElementById("img3").src = "../img/bar/battery01.png";
  } else if (min >= 15 && min < 30) {
    document.getElementById("img3").src = "../img/bar/battery02.png";
  } else if (min >= 30 && min < 45) {
    document.getElementById("img3").src = "../img/bar/battery03.png";
  } else {
    document.getElementById("img3").src = "../img/bar/battery04.png";
  }

  refresh();
}
function statusI() {
  const time = new Date();
  // date
  const week = time.toDateString().substring(0, 3);
  // time
  const min = time.getMinutes();
  const sec = time.getSeconds();

  if (week == "Sat" || week == "Sun") {
    document.getElementById("img1").src = "img/bar/signal01.png";
  } else {
    document.getElementById("img1").src = "img/bar/signal02.png";
  }

  if (sec >= 0 && sec < 15) {
    document.getElementById("img2").src = "img/bar/wifi01.png";
  } else if (sec >= 15 && sec < 30) {
    document.getElementById("img2").src = "img/bar/wifi02.png";
  } else if (sec >= 30 && sec < 45) {
    document.getElementById("img2").src = "img/bar/wifi03.png";
  } else {
    document.getElementById("img2").src = "img/bar/wifi04.png";
  }

  if (min >= 0 && min < 15) {
    document.getElementById("img3").src = "img/bar/battery01.png";
  } else if (min >= 15 && min < 30) {
    document.getElementById("img3").src = "img/bar/battery02.png";
  } else if (min >= 30 && min < 45) {
    document.getElementById("img3").src = "img/bar/battery03.png";
  } else {
    document.getElementById("img3").src = "img/bar/battery04.png";
  }

  refresh();
}

// popup
function popup(event) {
  var x = event.pageX;
  var y = event.pageY;
  var popup = document.getElementById("popup");
  popup.style.left = x - 100 + "px";
  popup.style.top = y + 5 + "px";
  popup.style.visibility = "visible";
  setTimeout(function () {
    popup.style.visibility = "hidden";
  }, 500);
  clickSoundI();
}

// ad close
$(document).ready(function () {
  $("img#xbtn").click(function () {
    $("div#adBox").fadeOut(500);
  });
});

// subpages!!!

// video
var elem;
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function fullScreen() {
  document.getElementById("playbtn").style.display = "none";
  document.getElementById("videoPlayer").style.display = "grid";
  document.getElementById("videoPlayer").style.placeItems = "center";
  elem = document.getElementById("vid");
  openFullscreen(elem);
  elem.play();
}

// widget!!!
// clock : seoul
function rotate() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // hour hand
  const hourHand = document.querySelector(".hour");
  // minute hand
  const minuteHand = document.querySelector(".minute");
  // second hand
  const secondHand = document.querySelector(".second");
  // apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

  refresh();
}

// clock newyork
function rotate2() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours() - 14;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // hour hand
  const hourHand = document.getElementById("nyhour");
  // minute hand
  const minuteHand = document.getElementById("nyminute");
  // second hand
  const secondHand = document.getElementById("nysecond");
  // apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

  refresh();
} // get the hours, minutes and seconds

// quote
function newQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = '"' + quotes[index] + '"';
}
var quotes = [
  "Today it's up to you to create the peacefulness you long for.",
  "A friend asks only for your time not your money.",
  "Don't let yesterday take up too much of today.",
  "If you're going through hell, keep going.",
  "Every man dies. Not every man lives.",
  "Life shrinks or expands in proportion to one's courage.",
  "Nothing is impossible. The word itself says 'I'm possible!'",
  "We need much less than we think we need.",
  "If things go wrong, don't go with them.",
  "Everything has beauty, but not everyone sees it.",
  "Simplicity is the ultimate sophistication.",
  "There is no way to happiness - happiness is the way.",
];

// log popups
function logPopUP(click) {
  var id = click.id;
  id += "_p";
  document.getElementById(id).style.display = "grid";
  clickSound();
}
function logClose() {
  clickSound();
  setTimeout(function () {
    location.href = "log.html";
  }, 500);
}

// gallery popups
function galPopUP(click) {
  var id = click.id;
  var popupId = "popup" + id;
  document.getElementById(popupId).style.display = "grid";
  clickSound();
}
function closePopUp(item) {
  var popup = item.parentNode.id;
  document.getElementById(popup).style.display = "none";
  clickSound();
}
