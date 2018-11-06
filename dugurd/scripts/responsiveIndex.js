/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive() {
  var y = document.querySelector(".dropdownIndex");
  y.addEventListener("click", function() {
    changeDisp();
  });

  var x = document.querySelector(".navIndex");
  if (x.className === "navIndex") {
    x.className += " responsive";
  } else {
    x.className = "navIndex";
  }
}

function changeDisp() {
  var z = document.querySelector(".dropdown-contentIndex");

  if (z.style.display == "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
