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
![initial](https://user-images.githubusercontent.com/11358883/35365533-e6ab9712-0129-11e8-86df-5bf064d69aab.JPG)

![player_1_hit](https://user-images.githubusercontent.com/11358883/35365566-1ef109cc-012a-11e8-8f9a-ce10d452e624.JPG)

![player_2_miss](https://user-images.githubusercontent.com/11358883/35365575-2d050f86-012a-11e8-90c8-77b6ff25f040.JPG)

![player_grids](https://user-images.githubusercontent.com/11358883/35365599-4d1b6c34-012a-11e8-8981-3ad64787c551.JPG)

![sunk](https://user-images.githubusercontent.com/11358883/35365606-5a319722-012a-11e8-82e4-06991a62b434.JPG)

![winner](https://user-images.githubusercontent.com/11358883/35365616-646f49f0-012a-11e8-8617-2e7ae66d5707.JPG)
