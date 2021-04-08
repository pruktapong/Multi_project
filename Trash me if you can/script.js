var object1 = document.getElementById("object1"); //กำหนดตัวแปร
var object2 = document.getElementById("object2");
var object3 = document.getElementById("object3");
var object4 = document.getElementById("object4");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var score = 0;
var check = 0;
var topscore = 0;
var oldscore = 0;

document.getElementById("restart_btn").style.display = "none"; //กำหนดให้ปุ่ม Rstart หาย
document.getElementById("stop_btn").style.display = "none"; //กำหนดให้ปุ่ม Stop หาย

function gameplay(x) {
  document.getElementById("type").innerHTML = "Press any Key to play"; //เปลี่ยน Type เป็น Press any Key to play
  document.addEventListener("keyup", function correct(event) { // Add Keyboard เข้ามาใน Web
    console.log(event.key); // Show Keyboard ใน Log
    x = event.key; //แทนค่า

    var check1 = parseInt( //ดึงค่า Top จาก  Object ใน CSS
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
    if (score > topscore) { // Keep Top scores
      topscore = score;
    }
    if (score >= -1) { // Leval 1
      level1();
    }
    if (score == 20 && check == 0) { // Leval 2
      check++;
      alert("Level 2!!!");
      level2();
    }
    if (score == 50 && check == 1) { // Leval 3
      check++;
      swap();
      alert("Level 3!!!");
      level3();
    }
    if (score <= -5 || score >= 70) {  // End
      document.getElementById("txt").innerHTML = "คะแนนสูงสุดของคุณ!!!";
      end();
    }
    if (x == "a" && check1 > -130 && check1 < -30) { // Check Button when Input Keyboard => Correct
      console.log("Hit1");
      document.getElementById("txt").innerHTML = "Hit";
      score++;
      document.getElementById("score").innerHTML = score;
      document.getElementById("type").innerHTML = "ชนิด 1";
    } else if (x == "s" && check2 > -230 && check2 < -130) {
      console.log("Hit2");
      document.getElementById("txt").innerHTML = "Hit";
      score++;
      document.getElementById("score").innerHTML = score;
      document.getElementById("type").innerHTML = "ชนิด 2";
    } else if (x == "d" && check3 > -330 && check3 < -230) {
      console.log("Hit3");
      document.getElementById("txt").innerHTML = "Hit";
      score++;
      document.getElementById("score").innerHTML = score;
      document.getElementById("type").innerHTML = "ชนิด 3";
    } else if (x == "f" && check4 > -430 && check4 < -330) {
      console.log("Hit4");
      document.getElementById("txt").innerHTML = "Hit";
      score++;
      document.getElementById("score").innerHTML = score;
      document.getElementById("type").innerHTML = "ชนิด 4";
    } else if ( // Bug!!!!! (i can't edit it by oat)
      check1 > -30 ||
      check2 > -130 ||
      check3 > -230 ||
      check4 > -330
    ) {
      console.log("Miss btn");
      document.getElementById("txt").innerHTML = "Miss";
      document.getElementById("score").innerHTML = score;
      score++;
    }
  });
}

function scoredown() { // score scoredown the time with milisecond
  var time = 3;
  var main = setInterval(function () {
    time--;
    document.getElementById("time").innerHTML = "Loading...";
    if (time == 0) {
      clearInterval(main);
      gameplay();
      document.getElementById("time").style.display = "none";
      return false;
    }
  }, 1000);
}

function start() { // First Of Anything
  score = 0;
  document.getElementById("time").style.display = "block";
  document.getElementById("type").style.display = "block";
  document.getElementById("stop_btn").style.display = "block";
  document.getElementById("start_btn").style.display = "none";
  scoredown();
}

function stop() { // Function When Cick Stop Button
  end();
  document.getElementById("stop_btn").style.display = "none";
  document.getElementById("start_btn").style.display = "none";
  document.getElementById("type").style.display = "none";
}

function end() { // End The Game
  object1.style.animation = "none";
  object2.style.animation = "none";
  object3.style.animation = "none";
  object4.style.animation = "none";
  document.getElementById("txt").innerHTML = "คะแนนสูงสุดของคุณ!!!";
  document.getElementById("score").innerHTML = topscore;
  document.getElementById("stop_btn").style.display = "none";
  document.getElementById("type").style.display = "none";
  document.getElementById("restart_btn").style.display = "block";
  return;
}

function restart() { // Restart The Game but i don't like this way (by Oat)
  end();
  oldscore = topscore;
  swap();
  start();
  document.getElementById("stop_btn").style.display = "block";
  document.getElementById("restart_btn").style.display = "none";
  document.getElementById("type").style.display = "none";
}

function swap() { // Stop Animation When Switch the Level
  object1.style.animation = "none";
  object2.style.animation = "none";
  object3.style.animation = "none";
  object4.style.animation = "none";
}

function level1() { // Level1
  object1.style.animation = "block1 9s infinite";
  object2.style.animation = "block2 3s infinite";
  object3.style.animation = "block3 5s infinite";
  object4.style.animation = "block4 2s infinite";
}

function level2() { // Level2
  object1.style.animation = "block1 4s infinite";
  object2.style.animation = "block2 2s infinite";
  object3.style.animation = "block3 7s infinite";
  object4.style.animation = "block4 5s infinite";
}

function level3() { // Level3
  object1.style.animation = "block1 4s infinite";
  object2.style.animation = "block2 5s infinite";
  object3.style.animation = "block3 6s infinite";
  object4.style.animation = "block4 2s infinite";
}