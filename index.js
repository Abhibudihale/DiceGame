var randomNumber=Math.floor(Math.random()*6)+1;

var randomDiceImg = "dice" + randomNumber + ".png";

var imagesource = "Dicee Challenge - Starting Files/images/" + randomDiceImg;


var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",imagesource);





var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var imagesource2 = "Dicee Challenge - Starting Files/images/" + randomDiceImg2;

 document.querySelectorAll("img")[1].setAttribute("src",imagesource2)


    
  if(randomNumber>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 ⛳⛳⛳ Won ";
    }
    else if(randomNumber2>randomNumber)
    {
        document.querySelector("h1").innerHTML="Player 2 ⛳⛳⛳ Won ";  
    }
    else{
        document.querySelector("h1").innerHTML="Game Draw ";
    }

