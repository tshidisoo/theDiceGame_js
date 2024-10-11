var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage = "dice" + randomNumber1 + ".png"; //random images
var randomNumberImage2 = "dice" + randomNumber2 + ".png"; //random images

var randomImageSource = "images/" + randomNumberImage;
var randomImageSource2 = "images/" + randomNumberImage2;

var dice1Result = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var dice2Result = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}





