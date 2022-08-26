//====================================
// Title: team-manager.js
// Author:  John Vanhessche
// Date:  26 August 2022
// Description:  team-manager.js module for sports-app
//=====================================

//importing moment and team modules.
const moment = require("moment");
const Team = require("./team");

//global array of team objects,  using Team class constructor.
let teams = [
    new Team("Nebraska", "Cornhuskers", 155),
    new Team("Iowa", "Hawkeyes", 155),
    new Team("Wisconsin", "Badgers", 150),
    new Team("Purdue", "Boiler Makers", 135),
    new Team("Minnesota", "Golden Gophers", 145),
    new Team("Illinois", "Fighting Illini", 130),
    new Team("Northwestern", "Wildcats", 145)
];

//this function is exported.
//accesses team array and prints each object.
exports.findTeams = function () {   
   for (let team of teams) {

    //following custom print output per instructions
    console.log(`Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}\n`)
   }
};

//returns an object from the teams array based on the name variable passed.  
//allows access to the object properties.
function findTeam (name) {
    for (let team of teams) {
        if(team.name === name) {
            return team;
        }
    }    
};

//this function is exported.
exports.getGame = function () {
         
    //generating a random team for both teams, and accessing the name property.
    let randomTeam1 = teams[Math.floor(Math.random() * teams.length)].name;
    let randomTeam2 = teams[Math.floor(Math.random() * teams.length)].name;

    //comparing the team names, if they match the get another random team for team2.
    //this will break out if they don't match.
    if(randomTeam1 === randomTeam2) {
        randomTeam2 = teams[Math.floor(Math.random() * teams.length)].name;
    }

    //using findTeam function, passing team name, to access team object in the array.
    let team1 = findTeam(randomTeam1);
    let team2 = findTeam(randomTeam2);
        
    //using moment.js to create date object with MM-DD-YYYY format for 7 days in the future.
    let date = moment().add(7, 'days').format('MM-DD-YYYY');
    
    //printing the two team's name and mascot, date of game and time. 
    //The team info will randomly change each time the index.js is run.
    console.log(`${team1.name} ${team1.mascot} are playing the ${team2.name} ${team2.mascot} on ${date} at 7:30 PM CST`);
};


