
document.getElementById("company").innerHTML = "Guessing Game";
document.getElementById("slogan").innerHTML = "Do you know?";
document.getElementById("pageName").innerHTML = "Play";

var userGuess;
var rewardPath;
var guessCount = 0;
var correctNumber = Math.random();
correctNumber = correctNumber * 15;
correctNumber = Math.floor(correctNumber);
correctNumber = correctNumber + 1;


function game() {

	console.log("Correct "+correctNumber);
	userGuess = document.getElementById("guess").value;
	console.log("User "+userGuess);
	guessCount = guessCount + 1;
	console.log("---"+guessCount);
	if (userGuess>correctNumber){
		document.getElementById("feedback").innerHTML="Your guess was too high";
	}else if(userGuess<correctNumber){
		document.getElementById("feedback").innerHTML="Your guess was too low";
	}else if(userGuess==correctNumber){
		document.getElementById("feedback").innerHTML="You are Correct";
		display();
	}

}

function display(){
	console.log("---"+guessCount);
	switch(guessCount) {
    case 1:
        
    case 2:
        
    case 3:
        rewardPath = "winner.jpg" 
        break;
    case 4:
        
    case 5:
        
    case 6:
        rewardPath = "second.png"
        break;

    default:
        rewardPath = "third.png"
}
	console.log(rewardPath);
	var awardImage = document.createElement('IMG');
	awardImage.setAttribute('src', rewardPath);
	document.getElementById('Reward').appendChild(awardImage);

}