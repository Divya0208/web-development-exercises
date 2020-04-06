let score1 = 0,
score2 = 0;


function play(x) {

  event.preventDefault()

  var randomNumber1 = Math.floor(Math.random() * 3) + 1
  var randomNumber2 = Number(x)

  var randomImage1 = "https://github.com/Divya0208/web-development-exercises/blob/master/html-css-js-basics/ex7-Rock%20Paper%20Scissors/images/image"+randomNumber1+".png?raw=true"
  var randomImage2 = "https://github.com/Divya0208/web-development-exercises/blob/master/html-css-js-basics/ex7-Rock%20Paper%20Scissors/images/image"+randomNumber2+".png?raw=true"

  var randomText1 = ""
  var randomText2 = ""

  switch (randomNumber1) {
    case 1:
      randomText1 = "Rock";
      break;
    case 2:
      randomText1 = "Paper";
      break;
    case 3:
      randomText1 = "Scissors";
      break;
  }

  switch (randomNumber2) {
    case 1:
      randomText2 = "Rock";
      break;
    case 2:
      randomText2 = "Paper";
      break;
    case 3:
      randomText2 = "Scissors";
      break;
  }

  var image1 = document.querySelectorAll("img")[0]
  image1.setAttribute("src", randomImage1)
  image1.setAttribute("alt", randomText1)

  var image2 = document.querySelectorAll("img")[1]
  image2.setAttribute("src", randomImage2)
  image2.setAttribute("alt", randomText1)

  if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
  } else if (randomNumber1 == 1 && randomNumber2 == 3) {
    document.querySelector("h1").innerHTML = "Computer wins!"
    score1 += 1 
  } else if (randomNumber1 == 3 && randomNumber2 == 1) {
    document.querySelector("h1").innerHTML = "You win!"
    score2 += 1 
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Computer wins!"
    score1 += 1 
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "You win!"
    score2 += 1 
  }

  document.getElementById("score1").innerText = score1
  document.getElementById("score2").innerText = score2

}