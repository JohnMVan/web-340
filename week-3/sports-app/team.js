/* 
 * ====================================
 * Title: team.js
 * Author:  John Vanhessche
 * DAte: 26 August 2022
 * Description:  team.js module for sports-app 
 * ====================================
 */




//Team class with constructor.  Used to build object array in team-manager.js
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }

}

//exporting the Team class.
module.exports = Team;
