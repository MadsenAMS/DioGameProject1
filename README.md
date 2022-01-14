# Dio Game Project 1 - Helicopter Game on HTML5 + CSS3 + JS
Repository for First Game Project on Dio (Part of the MRV Bootcamp Project)

This game was built using images and codes offered by the instructor of the class. 

A few modifications were added to the original project, namedly: 

- The start window was given transperency in CSS, and all game borders were given a radius (only style modification).
- Many of the html classes were renamed favoring English tags.
- The player's input handler code has been moved to a separate js file (inputhandler) for code cleaning purposes.]
- Each enemy has received a separate js file with their specific behavior for code cleaning purposes.
- Enemies have received a "SpawnEnemy" function to set them in a random initial position to avoid code repitition and function attribution overload of the 'move enemy' function.
- On the code that determines the chopper moviment, the original code would subtract 10 pixels on the chopper position when the player advanced 10 pixels beyond boundries... I changed the code so it would simply ignore the up or down command when the chopper reaches the screen boundries.
