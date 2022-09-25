# PG-Pig-Game

https://olaknowct.github.io/PG-Pig-Game/

Game Mechanics

	• Consist of 2 players
	• Each player turns depends if one of them use hold (by default player 1 is first) 
	• Rolling a dice will continuously adding score to the current 
	• If hold is used then the holding current round score will be added to your total score and the turn will switch to next player
	• If 1 is the output of the rolled dice then the current round score gets reset to 0 and the turn will switch to next player 
	• The first player reach 100 points wins the game
	
Features

	• New Game
		○ Reset the game
		○ Hide the dice
		○ Set score to 0
		○ Set player 1 as starting player
	• Roll Dice
		○ Randomly generates a value between 1 to 6
		○ Results gets added to the current score round
		○ Current score round gets 0 when the result of randomly generate value is 1 
			§ Switch to the next player
	• Hold 
		○ Adds the current score round to total score
		○ Switch to the next player
		○ Evaluate the total score and declare the winner in case either of the player reach the threshold score 


New Features and Improvements 

	• Improve File Structuring
	• Created Desired Race functionality
		○ User can dynamically set the winning score by setting its value 
		○ Added setRace function
		○ Shows a modal when button "New Game" is clicked
			§ Set Desired Race
			§ Overlay background
			§ Close modal
				□ Listens to keyboard event and close modal if detected an esc event
				□ Close modal takes effect when overlay(background with lower z index) clicked
		○ Set the winning score based from what user input 
			§ Added Validation
				□ Close modal after setting the value for new winning score otherwise (no value) no behavior
		○ Re-initialize UI value
	• Added Game Mechanics
	• Refactor
		○ Use function expression and pass it to event handler 
