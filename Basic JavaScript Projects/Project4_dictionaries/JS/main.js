function myDictionary(){    //create function
    var character = {   //create object class 'character' with properties Class, Faction, Race, Level
        Class: "Druid",
        Faction: "Alliance",
        Race: "Night Elf",
        Level: 23,
    };
    delete character.Class; //delete the Class property from character
    document.getElementById("Dictionary").innerHTML = character.Class;  //display the character class for HTML element with id 'Dictionary'. 
}