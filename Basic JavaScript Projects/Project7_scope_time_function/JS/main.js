var x = 3;      //assign global variable x

function addTen(num){       //function to add 10 to a number
    var y = 10;     //assign local variable y
    return num + y;
}

var z = addTen(x);  //declare and assign global variable z to x + 10

document.write(x + " plus 10 is " + z);     //display 3 + 10 is 13

if (z <= 15){       //conditional statement evaluating if z is less than or equal to 15
    document.write("<br>" + "If you are seeing this, that means x is less than or equal to 5!");
}

function multiplyTen(num){      //function to multiply 10 to a number
    return num * y;   
}

console.log(multiplyTen(x));        //display x * 10 in console, however there should be an error since it uses a local variable it doesnt have access to 


function Time_function(){       
    var Time = new Date().getHours();       //set Time variable to current hour
    var Reply;

    if (Time < 12 || Time == 0){        //if time is less than 12pm or is equal to 12am
        Reply = "It is morning time!";
    }

    else if (Time >= 12 && Time < 18){      //if it is not morning, check if the time is between 12pm and 6pm
        Reply = "It is afternoon.";
    }

    else{       //if it is not morning or afternoon
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;       //display if it is morning, afternoon, or evening.
}