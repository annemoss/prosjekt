
const datoen = document.querySelector('#datoCatering');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //januar er 0!
var yyyy = today.getFullYear();
  if(dd<10){
        dd='0'+dd
    }
  if(mm<10){
        mm='0'+mm
    }
today = yyyy+'-'+mm+'-'+dd;
datoen.setAttribute("min", today);
yyyy += 1
today = yyyy+'-'+mm+'-'+dd;
datoen.setAttribute("max", today);

function cFormSvar() {
  event.preventDefault();
  document.getElementById("cateringDiv").style.display = "none";
  document.getElementById("cateringConfirmation").style.display = "block";
}
