// arrays
var snslink = [
  "https://www.youtube.com/",
  "https://twitter.com/",
  "https://www.instagram.com/instagram/",
  "https://www.facebook.com/facebook/",
];
var navimg = [];
var navlink = [];

function btnclk(btn) {
  // get id and num of clicked elements
  var btnId = btn.id;
  var idNum = Number(btnId.substring(6)) - 1;

  // change img
  var img = btn.src;
  img = img.replace("01", "02");
  btn.src = img;

  // click sound
  const sound = new Audio("src/click.mp3");
  sound.volume = 0.25;
  sound.play();

  // delay and move
  var link = snslink[idNum];
  setTimeout(function () {
    location.href = link;
  }, 1000);
}

function clickSoundI() {
  const sound = new Audio("src/click.mp3");
  sound.volume = 0.25;
  sound.play();
}
function clickSound() {
  const sound = new Audio("../src/click.mp3");
  sound.volume = 0.25;
  sound.play();
}

function hoverSound() {
  const sound = new Audio("src/hover.mp3");
  sound.volume = 1;
  sound.play();
}

// hover sound
function hover(item) {
  item.style.transform = "translateY(-5px)";
  item.style.boxShadow = "0 5px 7.5px 0.5px rgb(0, 255, 125)";
}
function unhover(item) {
  item.style.transform = "translateY(0px)";
  item.style.boxShadow = "0 0 7.5px 0.5px rgb(0, 255, 125)";
}
