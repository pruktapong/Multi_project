var point = 0;
var check = 1;
var block = document.getElementById("block");
var livee = document.getElementById("live");
var live = 15;
var img = document.getElementById("background");
var img2 = document.getElementById("block");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var countdown = document.getElementById("countdown");
var sec_count = 3;
var hit1 = document.getElementById("button1");
var hit2 = document.getElementById("button2");
var hit3 = document.getElementById("button3");
var hit4 = document.getElementById("button4");
var hit5 = document.getElementById("button5");
var hit = document.getElementById("hitt");
var plus = document.getElementById("plus");
var diff = document.getElementById("diff");
document.getElementById("sea").play();
document.getElementById("sea").loop = true;
document.getElementById("sea").volume = 0.5;
function reload() {
  click();
  location.reload();
}
function click () {
  document.getElementById("click").play();
}
function count(){
  document.getElementById("321").play();
}
function backtowebsite() {
  click();
  document.getElementById("menu").style.display = "block";
  document.getElementById("howtoplay").style.display = "none";
  document.getElementById("board").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("knowledge").style.display = "none";
}
function howtoplay() {
  click();
  document.getElementById("menu").style.display = "none";
  document.getElementById("howtoplay").style.display = "block";
}
function knowledge() {
  click();
  document.getElementById("menu").style.display = "none";
  document.getElementById("knowledge").style.display = "block";
}
function setTime() {
  if (sec_count > 1){
    sec_count--;
    countdown.innerHTML = sec_count
  }
  else{
    countdown.style.fontSize = "0";
  }
  setTimeout(function () {
    ++totalSeconds;
    secondsLabel.innerHTML = ": " + pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    
  }, 3000);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function website() {
  click();
  window.open("https://gracious-minsky-279da1.netlify.app/", "_blank");
}
function first() {
  count();
  click();
  document.getElementById("theme").play();
  document.getElementById("theme").loop = true;
  document.getElementById("theme").volume = 0.25;
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";
  setInterval(setTime, 1000);
  setTimeout(function start() {
    block.style.animation = "slide 2s infinite";
  }, 3000);
}
block.addEventListener("animationiteration", () => {
  var random_img = Math.floor(Math.random() * 13);
  console.log("random" + random_img);
  if (random_img == 0) {
    img2.src = "img/object1.png";
    block.style.left = "200px";
  }
  if (random_img == 1) {
    img2.src = "img/object2.png";
    block.style.left = "300px";
  }
  if (random_img == 2) {
    img2.src = "img/object3.png";
    block.style.left = "300px";
  }
  if (random_img == 3) {
    img2.src = "img/object4.png";
    block.style.left = "200px";
  }
  if (random_img == 4) {
    img2.src = "img/object5.png";
    block.style.left = "200px";
  }
  if (random_img == 5) {
    img2.src = "img/object6.png";
    block.style.left = "100px";
  }
  if (random_img == 6) {
    img2.src = "img/object7.png";
    block.style.left = "0px";
  }
  if (random_img == 7) {
    img2.src = "img/object8.png";
    block.style.left = "400px";
  }
  if (random_img == 8) {
    img2.src = "img/object14.png";
    block.style.left = "400px";
  }
  if (random_img == 9) {
    img2.src = "img/object10.png";
    block.style.left = "100px";
  }
  if (random_img == 10) {
    img2.src = "img/object11.png";
    block.style.left = "0px";
  }
  if (random_img == 11) {
    img2.src = "img/object12.png";
    block.style.left = "100px";
  }
  if (random_img == 12) {
    img2.src = "img/object13.png";
    block.style.left = "100px";
  }
});

document.addEventListener("keyup", (event) => {
  //Get event.key
  var check_x = parseInt(
    //Get Value from block for check condition
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var check_y = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );

  //console.log(event.key);
  if (event.key == "a" && check_x == 0 && check_y <= 600 && check_y > 500 && check == 1) {
    //Condition Gameplay(main)
    console.log("hit1");
    point++;
    check = 0;
    document.getElementById("hitt").innerHTML = "PERFECT";
    document.getElementById("plus").innerHTML = "+1";
    hit.style.color = "yellow";
    hit.style.left = "44%";
    plus.style.animation = "plus 1.25s linear";
    hit1.style.animation = "hit 0.15s alternate";
    document.getElementById("hit").play();
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "s" &&
    check_x == 100 &&
    check_y <= 600 &&
    check_y > 500 &&
    check == 1
  ) {
    console.log("hit2");
    point++;
    check = 0;
    document.getElementById("hitt").innerHTML = "PERFECT";
    document.getElementById("plus").innerHTML = "+1";
    hit.style.color = "yellow";
    hit.style.left = "44%";
    plus.style.animation = "plus 1.25s linear";
    hit2.style.animation = "hit 0.15s alternate";
    document.getElementById("hit").play();
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "j" &&
    check_x == 200 &&
    check_y <= 600 &&
    check_y > 500 &&
    check == 1
  ) {
    console.log("hit3");
    point++;
    check = 0;
    document.getElementById("hitt").innerHTML = "PERFECT";
    document.getElementById("plus").innerHTML = "+1";
    hit.style.color = "yellow";
    hit.style.left = "44%";
    plus.style.animation = "plus 1.25s linear";
    document.getElementById("hit").play();
    hit3.style.animation = "hit 0.15s alternate";
    document.getElementById("hit").play();
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "k" &&
    check_x == 300 &&
    check_y <= 600 &&
    check_y > 500 &&
    check == 1
  ) {
    console.log("hit4");
    point++;
    check = 0;
    document.getElementById("hitt").innerHTML = "PERFECT";
    document.getElementById("plus").innerHTML = "+1";
    hit.style.color = "yellow";
    hit.style.left = "44%";
    plus.style.animation = "plus 1.25s linear";
    hit4.style.animation = "hit 0.15s alternate";
    document.getElementById("hit").play();
    document.getElementById("score").innerHTML = point;
  } else if (
    event.key === "l" &&
    check_x == 400 &&
    check_y <= 600 &&
    check_y > 500 &&
    check == 1
  ) {
    console.log("hit5");
    point++;
    check = 0;
    document.getElementById("hitt").innerHTML = "PERFECT";
    document.getElementById("plus").innerHTML = "+1";
    hit.style.color = "yellow";
    hit.style.left = "44%";
    plus.style.animation = "plus 1.25s linear";
    hit5.style.animation = "hit 0.15s alternate";
    document.getElementById("hit").play();
    document.getElementById("score").innerHTML = point;
  } else if (check_y > 0 && check_y <= 500 && check != 2) {
    console.log("up");
    live--;
    check = 2;
    hit.style.left = "43%";
    hit.style.color = "red";
    document.getElementById("hitt").innerHTML = "TOO FAST";
    diff.style.animation = "plus 1.25s linear";
    document.getElementById("diff").innerHTML = "-1";
    setTimeout(function miss() {
      document.getElementById("miss").play();
    }, 800);
    document.getElementById("score").innerHTML = point;
    document.getElementById("live").innerHTML = "live : " + live;
  }
});

var timer = setInterval(() => {
  //Condition Gameplay(Check Miss)
  console.log(check);
  var check_y = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (check_y < 0) {
    diff.style.animation = "";
    document.getElementById("diff").innerHTML = "";
    plus.style.animation = "";
    document.getElementById("plus").innerHTML = "";
    document.getElementById("hitt").innerHTML = "";
    hit1.style.animation = "";
    hit2.style.animation = "";
    hit3.style.animation = "";
    hit4.style.animation = "";
    hit5.style.animation = "";
    check = 1;
  } else if (check == 1 && check_y > 600) {
    console.log("miss");
    document.getElementById("miss").play();
    check = 3;
    diff.style.animation = "plus 1.25s linear";
    document.getElementById("diff").innerHTML = "-1";
    hit.style.left = "47%";
    hit.style.color = "red";
    document.getElementById("hitt").innerHTML = "MISS";
    live--;
    document.getElementById("score").innerHTML = point;
    document.getElementById("live").innerHTML = "live : " + live;
  }
  if (live == 10) {
    img.src = "img/ระดับ2.jpg";
    livee.style.animation = "alarm2 1s alternate infinite";
  }
  if (live == 5) {
    document.getElementById("alarm").play();
    livee.style.animation = "alarm 0.25s alternate infinite";
    img.src = "img/ระดับ3.jpg";
  }
  if (live == 0) {
    img.src = "img/ระดับ4.jpg";
  }
  if (live == -1) {
    document.getElementById("alarm").pause();
    document.getElementById("theme").pause();
    document.getElementById("gameover").play();
    document.getElementById("soundover").play();
    document.getElementById("gameover").volume = "0.5";
    document.getElementById("soundover").volume = "0.5";
    document.getElementById("board").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("score2").innerHTML = point;
    document.getElementById("minutes2").innerHTML =pad(
      parseInt(totalSeconds / 60)
    );
    document.getElementById("seconds2").innerHTML = ": " + pad(totalSeconds % 60);
    myStopFunction();
    //location.reload();
    //alert("ขยะเน่าแล้วไอเวรร");
  }
  if (point == 15 && check_y > 600) {
    block.style.animation = "slide 1.65s infinite";
  }
  if (point == 25 && check_y > 600) {
    block.style.animation = "slide 1.25s infinite";
  }
  if (point == 50 && check_y > 600) {
    block.style.animation = "slide 0.95s infinite";
  }
  if (check_y >= -100 && check_y <= 470) {
    block.style.opacity = "1";
  }
  if (check_y > 470) {
    block.style.opacity = "0";
  }
}, 50);

function myStopFunction() {
  clearInterval(setTime);
  clearInterval(timer);
}
