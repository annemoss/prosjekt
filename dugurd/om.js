window.onload = addListeners;

var pics = ["pic1", "pic2", "pic3"];

function addListeners(){

    tempPic ="";

    for (var i = 0; i < pics.length; i++){
        tempPic = pics[i];
        document.getElementById(tempPic).addEventListener('mouseover', function(){picDarken(this.id);});
        document.getElementById(tempPic).addEventListener('mouseout', function(){picLighten(this.id);});
      }
}

function picDarken(pic){
    document.getElementById(pic).style.filter = "brightness(30%)";
    document.getElementById(pic).style.transitionDuration = "1s";

    var text_id = pic + "_text";
    document.getElementById(text_id).style.display = 'block';
}

function picLighten(pic){
    document.getElementById(pic).style.filter = "brightness(100%)";

    var text_id = pic + "_text";
    document.getElementById(text_id).style.display = 'none';
}