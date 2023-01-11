var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
var started = false;
var level = 0;
function nextSequence() {
  userClickedPattern = [];
  console.log(level);
  level = level + 1;
  $("h1").text("LEVEL" + level);
  console.log($("h1").innerHTML);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  //   console.log(currentColor);
  $("." + currentColor).addClass("pressed ");

  setTimeout(function () {
    $("." + currentColor).removeClass("pressed ");
  }, 100);
}

$(document).keypress(function (event) {
  if (!started) {
    console.log("siva");
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  console.log(this);
  var userChosenColor = $(this).attr("id");
  //   console.log(userChosenColor);

  userClickedPattern.push(userChosenColor);
  //   console.log(userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  CheckAnswer(userClickedPattern.length - 1);
});

function CheckAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("sucess");
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    console.log("failure");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
