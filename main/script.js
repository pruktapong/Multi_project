var count = 0;

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left = 0;
  button.style.left = left + "px";

}
function moveRight() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left = 100;
  button.style.left = left + "px";
}
function moveUp() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left = 200;
  button.style.left = left + "px";
}
function moveDown() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left = 300;
  button.style.left = left + "px";
}


document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    moveLeft();
  }
  if (event.key === "e")  {
    moveUp();
  }
  if (event.key === "r") {
    moveDown();
  }
  if (event.key === "w") {
    moveRight();
  }
});

var block = document.getElementById("block");
block.addEventListener('animationiteration', () => {
  var random = Math.floor(Math.random() * 4);
  left = random * 100;
  block.style.left = left + "px";
  console.log(random);
  count++;
});

setInterval(() => {
  var buttonLeft = 
  parseInt(window.getComputedStyle(button).getPropertyValue("left"));
  var blockLeft = 
  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var blockTop = 
  parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (buttonLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    //alert("Game over, Score: " + count);
    //block.style.animation = "none";
    //window.location.reload();
    console.log("hit");
    document.getElementById("score").innerHTML = count;
  }
  if (count%5 == 0) {
    console.log("Next Level!!!");
    clearInterval();
  }
  if (count == 6) {
    document.getElementById("block").style.animation = "slide 1s infinite";
  }
  if (count == 21) {
    document.getElementById("block").style.animation = "slide 0.8s infinite";
  }
  if (count == 31) {
    document.getElementById("block").style.animation = "slide 0.5s infinite";
  }
}, 100);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
