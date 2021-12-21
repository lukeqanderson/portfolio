/* Adds responsive class to drop down navbar items */
function navDropDown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav sticky") {
    x.className += " responsive";
  } else {
    x.className = "topnav sticky";
  }
}

/* Adds responsive class condense navbar after a selection is made*/
function navUp() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav sticky responsive") {
    x.className = "topnav sticky";
  } else {
    x.className = "topnav sticky responsive";
  }
}

