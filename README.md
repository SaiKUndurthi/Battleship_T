# Battleship_T

Battleship is a small two player game.

#The game consists of:

	•	2 Players
	•	Each player has a grid on which to place ships
	•	Each player begins the game with two ships sized 1-cell and 2-cells.
	•	The players take turns choosing a position on the opponent’s grid to attack

#The result of an attack must be one of:

	•	“Hit” -represented by 'X' -> if the opponent has a ship covering the position
	•	“Miss” -represented by 'M' ->  if there is no ship covering the position
	•	“Already Taken” if the position has previously been attacked
	•	“Sunk” if all the positions a ship covers have been hit
	•	“Win” if all the ships on the opponent's grid have been sunk
  
#Things to do next:

	•	Ask users for grid size, co-ordinates to land ships with rules specified.
	•	Maintain players state in server eg. Pusher.
	•	Make 'Game' component Higher Order Component.
	•	The players take turns choosing a position on the opponent’s grid to attack   


#Steps to build the game:

	•	Download or Clone this project. 
	•	Go to Battleship_T directory.
	•	Run the following command:  
			```
			$ npm install
			```  
	•	Finally to run the game, run this command:  
			```
			$ npm start
			```
#Screen Shots:
<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Initial.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Initial.JPG" width="300" height="500" style="max-width:100%;"></a>
<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_Grids.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_Grids.JPG" width="300" height="500" style="max-width:100%;"></a>
<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_1_Hit.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_1_Hit.JPG" width="300" height="500" style="max-width:100%;"></a>
<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_2_Miss.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Player_2_Miss.JPG" width="300" height="500" style="max-width:100%;"></a>

<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Sunk.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Sunk.JPG" width="300" height="500" style="max-width:100%;"></a>
<a href="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Winner.JPG" target="_blank"><img src="https://github.com/SaiKUndurthi/Battleship_T/tree/master/screenshots/Winner.JPG" width="300" height="500" style="max-width:100%;"></a>


