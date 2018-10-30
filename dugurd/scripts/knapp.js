/* SØKNAD */
const soknad = document.getElementById('soknad');
const submit = document.getElementById('submit');
const levert = document.getElementById('confirmation');
  /*levert.style.visibility = 'hidden';
  levert.style.display = 'none';
  //if alle feltene er oppfyllt!!!!!!!!!!!
submit.onclick = function confirmation () {
  soknad.style.visibility = 'hidden';
  soknad.style.display = 'none';
  levert.style.visibility = 'visible';
  levert.style.display = 'block';
}*/
//FIKK IKKE TIL Å FUNGERE!


/* BESTILL BORD*/

/*dato*/
const datoen = document.querySelector('#dato');
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

/*klokkeslett*/  //FUNKER IKKE
const time = document.querySelector('#klokkeslett')
var weekday = datoen.value
console.log(weekday)
/*FRE-LØR*/
if (weekday == 0 || weekday == 6 || weekday == 5){
  time.setAttribute('min', '11:00:00');
  time.setAttribute('max', '22:00:00');
}
/*MAN-TOR*/
else {
  time.setAttribute('min', '11:00:00')
  time.setAttribute('max', '20:00:00')
}
//

//if(myDate.getDay() == 6 || myDate.getDay() == 0) alert('Weekend!');

//

/*
const btn = document.querySelector('.button');
var velgAntallPersoner = document.getElementById('velgAntallPersoner');
var velgDato = document.getElementById('velgDato');
var leggInnKontaktInfo = document.querySelector('#leggInnKontaktInfo');
var ikkeLedig = document.getElementById('4');
var reservasjonKomplett = document.getElementsByClassName('5');
var randomtall = Math.random*10

//p2.style.visibility = 'hidden';
velgDato.style.display = 'none';
velgDato.style.visibility = 'hidden';
leggInnKontaktInfo.style.display = 'none';

if ((valgAntallPersoner.display='block')){
btn.onclick = function changeDisplay1 () {
  p1.style.visibility = 'hidden';
  p1.style.display = 'none';
  p2.style.visibility = 'visible';
  p2.style.display = 'block';
  valg.style.visibility = 'hidden';
  valg.style.display = 'none';
  leggInnKontaktInfo.style.visibility = 'visible';
  leggInnKontaktInfo.style.display = 'block';
  }
}

else if ((p2.visibility=='visible') {
  btn.onclick = function changeDisplay2 (){
    p2.style.visibility = 'hidden';
    p2.style.display = 'none';
    if (randomtall<8){
      p3.style.visibility = 'visible';
      p3.style.display = 'block';
    }
    else{
      p4.style.visibility = 'visible';
      p4.style.display = 'block';
    }
  }
}
else if ((p3.visibility=='visible')||(p4.visibility= ''){

}
*/
