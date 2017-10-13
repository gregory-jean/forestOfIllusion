
alert ("Your hero is about to embark on the Forest of Illusion. It is a dangerous place filled with peril.");

var heroName = prompt ("What is our hero's name?");

alert (heroName + " is a great name for a hero!");

var weapon = prompt ("What weapon does " + heroName + " choose to take along on their journey?");

if(weapon === "sword"){
	alert ("A sword is a sharp and noble weapon! " + heroName +
	" is a valiant hero!");
}
else if ( weapon === "axe") {
	alert ("Strong willed is the hero that wields an axe! No doubt " + heroName + 
	" carries immense courage!");
}
else if ( weapon === "gun") {
	alert ("Guns are used by the lowest form of heroes. " + heroName + 
	" sounds like a thief, and a cheat.");
}
else {
	alert (weapon + " is a fine choice for a weapon! Hooray for " + heroName + "!");
} 

function randomNumber(range) {
	return Math.round(Math.random() * range)
}

alert("The first thing that " + heroName + " encounters is a raging river!");

var decision1 = prompt("Does " + heroName + " choose to cross the river?");

if(decision1 == "y") {
	var chance1 = randomNumber(3);
	if (chance1 < 1){
		alert(heroName + " died crossing the river! You lose!");
	}
	else {
		alert(heroName = " successfully forged the river!"); 
	}
} 
else if(decision1 == "n") {
	alert(heroName + " chose not to forge the river.");
}




