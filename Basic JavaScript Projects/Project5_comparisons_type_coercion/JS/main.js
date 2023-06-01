var string1 = "25"; //create STRING "25"
var number1 = 25;   //create NUMBER 25

document.write(typeof number1); //display what type of variable number1 is (SHOULD DISPLAY 'NUMBER')

document.write("<br>" + number1 + string1); //line break, then combine the string "25" with the number 25. Should display "2525"

document.write("<br>"); //line break

document.write(string1 === number1); //compare TYPE and VALUE of variables, should display FALSE
document.write("<br>"); //line break

document.write(!(3 > 4));   //should display TRUE
document.write("<br>"); //line break

document.write((4 == 10) || (22 > 11)); //should display TRUE since one of the expressions is true
document.write("<br>"); //line break

document.write((2 < 3) && (3 > 5)); //should display FALSE since one of the expressions is not true