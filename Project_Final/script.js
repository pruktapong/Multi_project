var point = 0;
var check = 1;
var block = document.getElementById("block");
var live = 15;
var img = document.getElementById("background");
var img2 = document.getElementById("block");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var myTime = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } 
  else {
    return valString;
  }
}

setTimeout(function start() {
  block.style.animation = "slide 1.5s infinite";
}, 3000);
block.addEventListener("animationiteration", () => {
  var random_img = Math.floor(Math.random() * 10);
  console.log(random_img);
  if (random_img == 0) {
    img2.src = "img/object1.png";
  }
  if (random_img == 1) {
    img2.src = "img/object2.png";
  }
  if (random_img == 2) {
    img2.src = "img/object3.png";
  }
  if (random_img == 3) {
    img2.src = "img/object4.png";
  }
  if (random_img == 4) {
    img2.src = "img/object5.png";
  }
  if (random_img == 5) {
    img2.src = "img/object6.png";
  }
  if (random_img == 6) {
    img2.src = "img/object7.png";
  }
  if (random_img == 7) {
    img2.src = "img/object8.png";
  }
  if (random_img == 8) {
    img2.src = "img/object9.png";
  }
  if (random_img == 9) {
    img2.src = "img/object10.png";
  }
});
block.addEventListener("animationiteration", () => {//Random block
  var random = Math.floor(Math.random() * 4);
  left = random * 100;
  block.style.left = left + "px";
  //console.log(random);
});

document.addEventListener("keyup", (event) => {//Get event.key
  var check_x = parseInt(//Get Value from block for check condition
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var check_y = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );

  //console.log(event.key);

  if (event.key == "q" && check_x == 0 && check_y <= 600 && check_y > 500) {//Condition Gameplay(main)
    console.log("hit1");
    point++;
    check = 0;
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "w" &&
    check_x == 100 &&
    check_y <= 600 &&
    check_y > 500
  ) {
    console.log("hit2");
    point++;
    check = 0;
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "e" &&
    check_x == 200 &&
    check_y <= 600 &&
    check_y > 500
  ) {
    console.log("hit3");
    point++;
    check = 0;
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "r" &&
    check_x == 300 &&
    check_y <= 600 &&
    check_y > 500
  ) {
    console.log("hit4");
    point++;
    check = 0;
    document.getElementById("score").innerHTML = point;
  } else if (check_y <= 500 && check != 2) {
    console.log("up");
    live--;
    check = 2;
    document.getElementById("score").innerHTML = point;
    document.getElementById("live").innerHTML = "live : " + live;
  }
});

var timer = setInterval(() => {//Condition Gameplay(Check Miss)
  var check_y = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (check == 0 && check_y > 600) {
    console.log("hitttt");
    check = 1;
    document.getElementById("score").innerHTML = point;
  } else if (check == 1 && check_y > 600) {
    console.log("miss");
    live--;
    document.getElementById("score").innerHTML = point;
    document.getElementById("live").innerHTML = "live : " + live;
  } else if (check == 2 && check_y > 600) {
    console.log("upppp");
    check = 1;
    document.getElementById("score").innerHTML = point;
  }
  if (live == 10) {
    img.src = "img/ระดับ2.jpg";
  }
  if (live == 5) {
    img.src = "img/ระดับ3.jpg";
  }
  if (live == 2) {
    img.src = "img/ระดับ4.jpg";
  }
  if (live == -1) {
    document.getElementById("board").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("score2").innerHTML = point;
    document.getElementById("minutes2").innerHTML = pad(parseInt(totalSeconds / 60));
    document.getElementById("seconds2").innerHTML = pad(totalSeconds % 60);
    myStopFunction();
    //location.reload();
    //alert("ขยะเน่าแล้วไอเวรร");
  }
  if (point == 5 && check_y > 600) {
    block.style.animation = "slide 0.95s infinite";
  }
  if (point == 10 && check_y > 600) {
    block.style.animation = "slide 0.85s infinite";
  }
  if (point == 15 && check_y > 600) {
    block.style.animation = "slide 0.70s infinite";
  }
}, 550);

function myStopFunction() {
  clearInterval(myTime);
  clearInterval(timer);
}