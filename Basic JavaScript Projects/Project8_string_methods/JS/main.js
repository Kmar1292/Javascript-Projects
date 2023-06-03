var FirstName, LastName, FullName, FullName_Length, LastName_Length;  //declare global variables

function concat_name(){
    FirstName = document.getElementById("FirstName").value;     //set FirstName
    LastName = document.getElementById("LastName").value;   //set LastName
    FullName = FirstName.concat(" ", LastName); //concatenate FirstName and LastName into one string
    document.getElementById("concatName").innerHTML = FullName; //display FullName string
}

function slice_last(){
    FullName_Length = FullName.length;  //get length of FullName
    LastName_Length = LastName.length;  //get length of LastName
    var slice_start = FullName_Length - LastName_Length;    //get starting position of our slice
    document.getElementById("DisplaySlice").innerHTML = FullName.slice(slice_start, FullName_Length);   //slice the last name from the full name and display it
}

function lastNameLength(){
    LastName_Length = LastName.length.toPrecision(2);   //get last name with one decimal point
    document.getElementById("LastNameLength_toString").innerHTML = LastName_Length.toString();  //convert the length of the last name with one decimal point from a number to a string and display it
}