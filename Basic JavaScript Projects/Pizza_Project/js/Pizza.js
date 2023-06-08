function getReceipt(){
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";    //start text1 with You Ordered:, user's selections will be added to text1
    var runningTotal = 0;   //initialize runningTotal to 0, price will be added to this when user makes selections
    var sizeTotal = 0;  //price of size of pizza. Initialize to 0 for now
    var sizeArray = document.getElementsByClassName("size");    //create array of all pizza sizes
    for (var i = 0; i < sizeArray.length; i++){ //for loop that iterates through all pizza sizes
        if (sizeArray[i].checked){  //if pizza size is checked
            var selectedSize = sizeArray[i].value;  //initalize selectedSize to the pizza size that was checked
            text1 = text1 + selectedSize + "<br>";  //add pizza size to text1, it should now read "You Ordered: 'Pizza size'"
        }
    }
    if (selectedSize === "Personal Pizza"){ //series of if else statements to set sizeTotal to whichever pizza size was selected
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;   //add size price to the running total
    console.log(selectedSize + " = $" + sizeTotal + ".00"); //in console, display that the selected size = $sizeTotal
    console.log("size: " + text1);    //in console, show what size user ordered
    console.log("subtotal: $" + runningTotal + ".00");  //in console, show the subtotal which at this point should just be the price of the pizza size
    // these variables will get passed on to each function
    getTopping(runningTotal, text1);    //run getTopping function with arguments runningTotal and text1
}

function getTopping(runningTotal, text1){   //getTopping function that takes arguments runningTotal and text1
    var toppingTotal = 0;   //variable to keep track of number of topping selected
    var selectedTopping = [];   //create selectedTopping array
    var toppingArray = document.getElementsByClassName("toppings"); //create an array that includes all available toppings
    for (var j = 0; j < toppingArray.length; j++){  //for loop that iterates through all toppings
        if (toppingArray[j].checked){   //if topping is checked
            selectedTopping.push(toppingArray[j].value);    //add topping into selectedTopping array, selectedTopping will now include all toppings that were checked
            console.log("selected topping item: (" + toppingArray[j].value + ") "); //in console, display topping selected
            text1 = text1 + toppingArray[j].value + "<br>"; //add selected topping to text1
        }
    }
    var toppingCount = selectedTopping.length;  //toppingCount = number of toppings selected
    if (toppingCount > 1){  //if more than 1 topping selected
        toppingTotal = (toppingCount - 1);  //total number of toppings counted is the true number of selected toppings minus 1 because of one free topping
    }
    else{
        toppingTotal = 0;   //otherwise no toppings were selected
    }
    runningTotal = (runningTotal + toppingTotal);   //add toppingTotal to running total (this assumes each topping is worth $1)
    console.log("total selected topping items: " + toppingCount);   //in console, display the number of selected toppings
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");    //in console, display that user gets 1 free topping and display the total price of selected toppings
    console.log("topping: " + text1);   //in console, display everything that was ordered so far
    console.log("Purchase Total: " + "$" + runningTotal + ".00");   //in console, display the total price owed
    document.getElementById("showText").innerHTML = text1;  //on the HTML page, display what user ordered
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; //on HTML page, display total price
}