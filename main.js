//primitive battleship game

var randomLocation = Math.floor(Math.random()*5);
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk ==false) {
    guess = prompt("Are you ready? (just give the number from 0-6):");
    
    if(guess<0 || guess>6) {
        alert('Please, enter right number');
    } else {
        guesses = guesses +1; //the number of trials
    
    if(guess == location1 || guess == location2 || guess == location3){
        alert('bingo!');
        hits = hits +1;

        if(hits==3){
            isSunk = true;
            alert('YOU WON');
        } else {
            alert('not this time!');
        }
    }
}
};



var stats="You needed " + guesses + " trials to sunk the ship, " + " yor effectivness is: " + (3/guesses) + ".";

alert(stats);
