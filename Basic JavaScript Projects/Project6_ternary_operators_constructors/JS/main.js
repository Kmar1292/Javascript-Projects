function acceptLevel(){
    var userLevel = document.getElementById("inputlevel").value;    //set variable userLevel to user's input
    var userLevelPass = (userLevel >= 10) ? "You meet the level requirement!":"You do not meet the level requirement.";     //set variable userLevelPass to display whether or not user meets level requirement based on their input
    document.getElementById("checklevel").innerHTML = userLevelPass;        //display whether user meets lvl requirement when they click on button
}

function Character(Class, Race, Faction, Level){        //create object Character with properties Class, Race, Faction, and Level
    this.Character_Class = Class;
    this.Character_Race = Race;
    this.Character_Faction = Faction;
    this.Character_Level = Level;
}

var Kevin = new Character("Druid", "Night Elf", "Alliance", 31);        //create variable Kevin which is an instance of object Character

function revealCharacter(){     //display details about Kevin's character
    document.getElementById("characterKevin").innerHTML = "Kevin is a " + Kevin.Character_Race + " " + Kevin.Character_Class + " on " + Kevin.Character_Faction + " at level " + Kevin.Character_Level + ".";
}

function newLevel(){        //display Kevin's new level
    document.getElementById("levelup").innerHTML = "Kevin is now level " + levelUp(Kevin.Character_Level) + "!";

    function levelUp(level){        //function that takes a number argument and increments it.
        return ++level;
    }
}