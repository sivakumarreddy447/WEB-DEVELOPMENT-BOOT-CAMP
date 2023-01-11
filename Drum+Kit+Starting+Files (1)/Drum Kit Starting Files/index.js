document.addEventListener("keydown", function (event) {
  console.log(event.key);
  sound(event.key);
});

for (var i = 0; i < 8; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this);

    var kk = this.innerHTML;

    console.log(kk);

    sound(kk);
  });
}

function sound(ii) {
  switch (ii) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(ii);
  }
}
