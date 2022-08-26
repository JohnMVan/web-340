//====================================
// Title: index.js
// Author:  John Vanhessche
// Date:  26 August 2022
// Description:  index.js file for sports-app
//=====================================


//import of team-manager.js file
const x = require('./team-manager');

//header for team l ist
console.log("-- DISPLAYING TEAMS --");

//calling function to loop through and print a listing of the array
console.log(x.findTeams());

//header for championship game.
console.log("-- CHAMPIONSHIP GAME --");

//calling function to select two random teams, and print formatted output.
console.log(x.getGame());













