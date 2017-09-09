//GLOBAL VARIABLES
//=================================================

//CRYSTAL VARIABLES
var crystal = {
	purple:
	{
		name: "Purple",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	blue:
	{
		name:"Blue",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

//Scores
var currentScore = 0;
var targetScore  = 0;

//Wins and Losses
var winCount  = 0;
var lossCount = 0;



//FUNCTIONS
//=================================================

//helper function for getting random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + 19;
}

//starts game
var startGame = function() {
	//reset the current score
	currentScore = 0;

	//set a new target score (btw 19 & 120)
	targetScore = getRandom(19, 120);

	//set different values for each of the crystals
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value  = getRandom(1, 12);
    crystal.blue.value   = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

	//change the html to reflect all of these changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	//testing console
	console.log("======================");
	console.log("Target Score: " + targetScore);
	console.log("Purple: " + crystal.purple.value + " | Green: " + crystal.green.value + " | Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value);
	console.log("======================");
}

//respond to clicks on the crystals
var addValues = function(crystal){
	currentScore = currentScore + crystal.value;

	//change the html to reflect changes in currentScore
	$("#yourScore").html(currentScore);

	//call the checkWin function
	checkWin();

	//testing console
	console.log("YourScore: " + currentScore);
}

//check if use won or lost and reset game
var checkWin = function() {
  //check if currentScore is larger than targetScore
  if(currentScore > targetScore) {
  	alert("Sorry. You lost!");
  	console.log("Sorry. You lost!");

  	//Add to Loss Counter
  	lossCount ++;

  	//change loss count html
  	$("#lossCount").html(lossCount);

  	//restart the game
  	startGame();

  } else if(currentScore == targetScore) {
  	alert("Congratulations! You Won!");
  	console.log("Congratulations! You Won!");

  	//add to win Counter
  	winCount++;

  	//change loss count html
  	$("#winCount").html(winCount);

  	//restart the game
  	startGame();
  }
}

//MAIN PROCESS
//=================================================
startGame();

$("#purple").click(function(){
	addValues(crystal.purple);
});
$("#green").click(function(){
	addValues(crystal.green);
});
$("#blue").click(function(){
	addValues(crystal.blue);
});
$("#yellow").click(function(){
	addValues(crystal.yellow);
});
