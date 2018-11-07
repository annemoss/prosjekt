/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

var minilogiIndex = document.getElementById("minilogoIndex");

function responsive() {
  minilogiIndex.style.width = "80px";
  minilogiIndex.style.height = "80px";
  minilogiIndex.style.left = "10px";

  var y = document.querySelector(".dropdownIndex");
  y.addEventListener("click", function() {
    changeDisp();
  });

  var x = document.querySelector(".navIndex");
  if (x.className === "navIndex") {
    x.className += " responsive";
  } else {
    x.className = "navIndex";
    minilogiIndex.style.width = "155px";
    minilogiIndex.style.height = "155px";
    minilogiIndex.style.left = "35%";
  }

  changeDisp();
}

function changeDisp() {
  var z = document.querySelector(".dropdown-contentIndex");

  if (z.style.display == "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
