/* Adds responsive class to drop down navbar items */
function navDropDown() {
  var topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav sticky") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav sticky";
  }
}

/* Adds responsive class condense navbar after a selection is made*/
function navUp() {
  var topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav sticky responsive") {
    topnav.className = "topnav sticky";
  } else {
    topnav.className = "topnav sticky responsive";
  }
}

// for slide show 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// to display slides on click
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("projectSlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}