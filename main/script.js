var count = 0;

function moveLeft() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left -= 100;
  if(left >= 0){
  button.style.left = left + "px";
  }
}

function moveRight() {
  var left = parseInt(
    window.getComputedStyle(button).getPropertyValue("left"));
  left += 100;
  if(left < 400){
  button.style.left = left + "px";
  }
}


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
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
  }
  if (count%5 == 0) {
    console.log("Next Level!!!");
    clearInterval();
  }
  if (count == 6) {
    document.getElementById("block").style.animation = "slide 1s infinite";
  }
  if (count == 21) {
    document.getElementById("block").style.animation = "slide 0.7s infinite";
  }
  if (count == 31) {
    document.getElementById("block").style.animation = "slide 0.3s infinite";
  }
}, 100);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
