let slideIndex = 1; //set slide index to 1 to show first slide upon load
showSlides(slideIndex); //call function showSlides starting with first slide

// Next/previous controls
function plusSlides(n) {  //function to call showSlides function but show next or previous slide depending on value of n
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {  //call showSlides to show slide #n
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //variable slides gets all the elements of class "mySlides", thus it is an array containing our slides
  let dots = document.getElementsByClassName("dot"); //variable dots is an array of our dots
  if (n > slides.length) {slideIndex = 1} //if n is ever greater than the # of slides we have, reset the slideIndex to the first slide
  if (n < 1) {slideIndex = slides.length} //if n is less than 1, set slideIndex to the last slide, these two if statements allow the slideshow to wrap around
  for (i = 0; i < slides.length; i++) { //for loop that iterates through each slide and hides the entire element
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //for loop that iterates through each dot and replaces the class name "active" with nothing, rendering it inactive
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //show current slide as a block-level element
  dots[slideIndex-1].className += " active";  //show current dot as active
}

function countdown(){ 
    var seconds = document.getElementById("seconds").value; //set variable seconds to user's input

    function tick(){  //nested function
        seconds = seconds - 1;  //decrement seconds
        timer.innerHTML = seconds; //show seconds in the paragraph element with id "timer"
        var time = setTimeout(tick, 1000);  //run the function 'tick' every 1000 ms (1 second)
        if (seconds < 0){ //when seconds goes below 0
            alert("Time's up!");  //show pop up alert displaying "Time's Up"
            clearTimeout(time); //stop Timeout() function from running
            timer.innerHTML = ""; //clear the timer display
        }
    }

    tick(); //run tick function
}
