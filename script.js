//1. Prompts the user for the pet's name
let petName = prompt("Name your pet");

//Prompts the user six times for an action.
for (i=0; i<6; i++){
    var choice = prompt ("feed, pet, or walk?");
}   
//"feed" increases energy by 2.
// loop here?
if (choice === "feed") {
    (energy += 2);
}

//"pet"increases happiness by 1.
// loop here?
if (choice === "pet") {
    (happiness += 1);
}
//"walk" increases happiness by 2 and decreases energy by 1.
// loop here?
if (choice === "walk") {
    (happiness += 2); 
    (energy -= 1);
}  
//Alerts the user if there is not enough energy for a walk.
if (energy <= 0) {
    alert("Not enough energy to walk")
} else if (energy > 0) 
    alert = ('null');



//Does not affect happiness or energy if there is not enough energy for a walk.


//Logs the pet's name to the console at the end.
//Logs the happiness and energy level to the console at the end.
/*The pet's name, happiness, and energy level are all logged to the console together in the
correct sentence format: _______ has __ happiness and __ energy.
*/
console.log(petName + " has " + (happiness) + " happiness and " + (energy) + " energy")

// This is the best I could do with the material I had. Finding the correct solution on the suggested websites & Google is like trying to find a needle in a haystack.