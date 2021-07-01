var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

var started = false;

var gamePattern = [];

var userClickedPattern = [];

$(document).keypress(function() {
  if (!started) {


    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    $(".rules").css("display", "none");
  }
});

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over, Press Any key To Restart");

    startOver();
  }
}



function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);


  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

function startOver() {

  level = 0;
  started = false;
  gamePattern = [];
  $(".rules").css("display", "block");
}






// var level = 1;
//
// var gamePattern = [];
//
// var clickedPattern = [];
//
// var buttonColors = ["red", "blue", "green", "yellow"];
//
//
// $(".btn").click(buttonClick);
//
// function buttonClick() {
//   var userColor = $(this).attr("id");
//
//   clickedPattern.push(userColor);
//   $(this).fadeIn(100).fadeOut(100).fadeIn(100);
// }
//
// function levelUp() {
//   $("h1").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//
//   var chosenColor = buttonColors[randomNumber];
//
//   gamePattern.push(chosenColor);
//
//   $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//
//   var audio = new Audio("sounds/" + chosenColor + ".mp3");
//   audio.play();
//
//
//
//   for(var i = 0; i < gamePattern.length ; i++){
//     if(gamePattern[i]=== clickedPattern[i]){
//       level++;
//       levelUp();
//     }
//     else{
//       $("h1").text("Game over, press A key to restart the game.")
//     }
//   }
// }
//
// $(document).keypress(levelUp);
