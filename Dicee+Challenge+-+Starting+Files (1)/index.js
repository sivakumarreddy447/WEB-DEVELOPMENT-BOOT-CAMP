var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber1);

document
  .querySelector("img")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .querySelector("img.img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw PlayAgain";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 WON";
} else {
  document.querySelector("h1").innerHTML = "Player2 WON";
}