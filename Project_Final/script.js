var count = 0;
var point = 0;
var check = 1;
var block = document.getElementById("block");

function start() {
    block.style.animation = "slide 1.5s infinite";
}

var block = document.getElementById("block");
block.addEventListener('animationiteration', () => {
  var random = Math.floor(Math.random() * 4);
  left = random * 100;
  block.style.left = left + "px";
  console.log(random);
  count++;
});

  document.addEventListener("keyup", (event) => {
    var element = document.getElementById("block");
    var check_x = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var check_y = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (event.key == "q" && check_x == 0 && check_y <= 600 && check_y > 500) {
      console.log("hit1");
      check = 0
    }
    else if (event.key === "w" && check_x == 100 && check_y <= 600 && check_y > 500) {
      console.log("hit2");
      check = 0
    }
    else if (event.key === "e" && check_x == 200 && check_y <= 600 && check_y > 500)  {
      console.log("hit3");
      check = 0
    }
    else if (event.key === "r" && check_x == 300 && check_y <= 600 && check_y > 500) {
      console.log("hit4");
      check = 0
    }
    else if (check_y <= 500){
      console.log("up");
      point--;
      element.style.animation = 'none';
      element.offsetWidth;
      element.style.animation = 'slide 1.5s infinite';
      document.getElementById("score").innerHTML = point;
    }


  });
  setInterval(() => {
    var check_y = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (check == 0 && check_y > 600){
      console.log("hitttt");
      check = 1;
      point++;
    }
    else if (check == 1 && check_y > 600){
      console.log("miss");
      point--;
    }
    document.getElementById("score").innerHTML = point;
  },500)