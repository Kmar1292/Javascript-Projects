var random1 = (Math.floor(Math.random() * 10) + 1);   //random integer between 1 and 10

var random2 = (Math.floor(Math.random() * 10) + 1);   //another random integer between 1 and 10

function revealRandom1(){
    document.getElementById("random_1").innerHTML = random1;    // function to display random1 when user hovers over text
}

function revealRandom2(){
    document.getElementById("random_2").innerHTML = random2;    //function to display random2 when user hovers over text
}

function mathStuff(){
    random1++;
    var result = (random1 * random2 / (random2 + 3) - 1) % 2;
    document.write("The magic math box spits out the number: " + result);   //function to do a bunch of math stuff and display it when user clicks button.
}