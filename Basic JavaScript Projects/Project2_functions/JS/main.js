function displayText(){
    var txt1 = "This is ";  //create variable txt1
    txt1 += "some text.";   //concatenate txt1 with an additional string using the += operator
    document.getElementById("display_text").innerHTML = txt1;   //display txt1 for elements with ID "display_text"
}

function displayText2(){
    var txt1 = "This is ";  //create variable txt1
    txt1 += "some other text.";   //concatenate txt1 with an additional string using the += operator
    document.getElementById("display_text2").innerHTML = txt1;   //display txt1 for elements with ID "display_text"
}