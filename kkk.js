var object1 = document.getElementById("object1");
var object2 = document.getElementById("object2");
var object3 = document.getElementById("object3");
var object4 = document.getElementById("object4");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var count = 0;
var check = 0;
var topscore = 0;

document.getElementById("restart_btn").style.display = "none";
document.getElementById("stop_btn").style.display = "none";

function gameplay(x) {
  document.getElementById("type").innerHTML = "Press any Key to play";
  document.addEventListener("keyup", function correct(event) {
    console.log(event.key);
    x = event.key;

    var check1 = parseInt(
      window.getComputedStyle(object1).getPropertyValue("top")
    );
    var check2 = parseInt(
      window.getComputedStyle(object2).getPropertyValue("top")
    );
    var check3 = parseInt(
      window.getComputedStyle(object3).getPropertyValue("top")
    );
    var check4 = parseInt(
      window.getComputedStyle(object4).getPropertyValue("top")
    );
    if (count > topscore) {
      topscore = count;
    }
    if (count >= -1) {
      level1();
    }
    if (count == 20 && check == 0) {
      check++;
      swap();
      alert("Level 2!!!");
      level2();
    }
    if (count == 50 && check == 1) {
      check++;
      swap();
      alert("Level 3!!!");
      level3();
    }
    if (count <= -6 || count >= 70) {
      end();
    }
    if (x == "a" && check1 > -130 && check1 < -30) {
      console.log("Hit1");
      document.getElementById("txt").innerHTML = "Hit";
      count++;
      document.getElementById("score").innerHTML = count;
      document.getElementById("type").innerHTML = "ชนิด 1";
    } else if (x == "s" && check2 > -230 && check2 < -130) {
      console.log("Hit2");
      document.getElementById("txt").innerHTML = "Hit";
      count++;
      document.getElementById("score").innerHTML = count;
      document.getElementById("type").innerHTML = "ชนิด 2";
    } else if (x == "d" && check3 > -330 && check3 < -230) {
      console.log("Hit3");
      document.getElementById("txt").innerHTML = "Hit";
      count++;
      document.getElementById("score").innerHTML = count;
      document.getElementById("type").innerHTML = "ชนิด 3";
    } else if (x == "f" && check4 > -430 && check4 < -330) {
      console.log("Hit4");
      document.getElementById("txt").innerHTML = "Hit";
      count++;
      document.getElementById("score").innerHTML = count;
      document.getElementById("type").innerHTML = "ชนิด 4";
    } else if (
      check1 > -30 ||
      check2 > -130 ||
      check3 > -230 ||
      check4 > -330
    ) {
      console.log("Miss btn");
      document.getElementById("txt").innerHTML = "Miss";
      document.getElementById("score").innerHTML = count;
      count--;
    }
  });
}

function countdown() {
  var time = 3;
  var main = setInterval(function () {
    time--;
    document.getElementById("time").innerHTML = "Loading...";
    if (time == 0) {
      clearInterval(main);
      gameplay();
      document.getElementById("time").style.display = "none";
    }
  }, 1000);
}

function start() {
  count = 0;
  document.getElementById("time").style.display = "block";
  document.getElementById("type").style.display = "block";
  document.getElementById("stop_btn").style.display = "block";
  document.getElementById("start_btn").style.display = "none";
  countdown();
}

function stop() {
  end();
  document.getElementById("stop_btn").style.display = "none";
  document.getElementById("start_btn").style.display = "none";
  document.getElementById("type").style.display = "none";
}

function end() {
  object1.style.animation = "none";
  object2.style.animation = "none";
  object3.style.animation = "none";
  object4.style.animation = "none";
  document.getElementById("txt").innerHTML = "คะแนนสูงสุดของคุณ!!!";
  document.getElementById("score").innerHTML = topscore;
  document.getElementById("stop_btn").style.display = "none";
  document.getElementById("type").style.display = "none";
  document.getElementById("restart_btn").style.display = "block";
}

function restart() {
  window.location.reload(true);
}

function swap() {
  object1.style.animation = "none";
  object2.style.animation = "none";
  object3.style.animation = "none";
  object4.style.animation = "none";
}

function level1() {
  object1.style.animation = "block1 9s infinite";
  object2.style.animation = "block2 3s infinite";
  object3.style.animation = "block3 5s infinite";
  object4.style.animation = "block4 2s infinite";
}

function level2() {
  object1.style.animation = "block1 4s infinite";
  object2.style.animation = "block2 2s infinite";
  object3.style.animation = "block3 7s infinite";
  object4.style.animation = "block4 5s infinite";
}

function level3() {
  object1.style.animation = "block1 4s infinite";
  object2.style.animation = "block2 5s infinite";
  object3.style.animation = "block3 6s infinite";
  object4.style.animation = "block4 2s infinite";
}
