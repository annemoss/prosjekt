window.onload = addListeners;

var containers = ["inner_container1", "inner_container2", "inner_container3"];
var pics = ["pic1", "pic2", "pic3"];
var texts = ["pic1_text", "pic2_text", "pic3_text"];
var mouseover;

function addListeners() {
  tempPic = "";

  for (var i = 0; i < containers.length; i++) {
    tempPic = containers[i];

    document.getElementById(tempPic).addEventListener("mouseover", function() {
      picDarken(this.id);
    });

    document.getElementById(tempPic).addEventListener("mouseout", function() {
      picLighten(this.id);
    });
  }
}

function picDarken(pic) {
  document.getElementById(pics[pic.slice(-1) - 1]).style.filter =
    "brightness(20%)";
  document.getElementById(pics[pic.slice(-1) - 1]).style.transitionDuration =
    "1s";
  document.getElementById(texts[pic.slice(-1) - 1]).style.display = "block";
}

function picLighten(pic) {
  document.getElementById(pics[pic.slice(-1) - 1]).style.filter =
    "brightness(100%)";
  document.getElementById(texts[pic.slice(-1) - 1]).style.display = "none";
}
