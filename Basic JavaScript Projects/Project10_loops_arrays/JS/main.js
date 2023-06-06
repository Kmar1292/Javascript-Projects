function countUp(){ //create function countUp
    let seconds = document.getElementById("seconds").value; //create function scope variable seconds and assign it a value input by user
    let count_display = 0; //function scope variable and assign it 0
    for (i = 1; i <= seconds; i++){ //for loop that modifies count_display and counts up to user input seconds
        count_display += "<br>" + i;
    }
    document.getElementById("countdisplay").innerHTML = count_display; //display count_display
}

function countDown(){   //create function countDown
    let seconds = 10;   //create function scope variable seconds and set it equal to 10
    let count_display = 10; //create function scope variable count_display and set it to 10
    while (seconds > 0){    //while seconds is greater than 0
        seconds--;  //decrement seconds
        count_display += "<br>" + seconds;  //add seconds to count_display
    }
    document.getElementById("countdowndisplay").innerHTML = count_display;  //display count_display
}

function favColors(){   //create function favColors
    var fav_colors = ["blue", "green", "red"];  //create array of favorite colors
    document.getElementById("favcolors").innerHTML = "My favorite color is " + fav_colors[0] + ". My second favorite color is " + fav_colors[1] + ". My third favorite is " + fav_colors[2] + ".";  //display favorite colors in order
}

function displayChar(){ //create function displayChar
    let char = {    //create class of object called char
        Class: "Mage ", //set Class property
        Faction: "Horde ",  //set Faction property
        Race: "Undead ",    //set Race property
        Level: 12,  //set Level property
        description: function(){    //set description property to be a nested function that returns a description of the character and its properties
            return "My character is a(n) " + this.Race + this.Faction + this.Class + "at level " + this.Level + ".";
        }
    }
    document.getElementById("charinfo").innerHTML = char.description(); //display description of character
}