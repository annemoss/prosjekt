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

/*klokkeslett*/
const time = document.querySelector('#klokkeslett')
var weekday = datoen.value
console.log(weekday)
/*FRE-LØR*/
if (weekday == 0 || weekday == 6 || weekday == 5){
  time.setAttribute('min', '11:00:00');
  time.setAttribute('max', '21:00:00');
}
/*MAN-TOR*/
else {
  time.setAttribute('min', '11:00:00');
  time.setAttribute('max', '19:00:00');
}

/*span verdier*/
const spanAntall = document.querySelector('.bordAntallPersoner');
const spanDato = document.querySelector('.reservertDato');
const spanTid = document.querySelector('.reservertKlokkeslett');
const spanMail = document.querySelector('.mailBekreftelse');

/*funksjonene for knapp*/
const inputAntall = document.querySelector('#antall_manuell');
const inputDato = '1999-06-07'//document.querySelector('#dato');
const inputKlokkeslett = 'HEI DATO'//document.querySelector('#klokkeslett');
const inputMail = 'HEI MAIL'//document.querySelector('#epost');

const reservasjon = document.querySelector('#reservasjonen');
const btn = document.querySelector('.bestillBordButton');
const ikkeLedig = document.querySelector('#ikkeLedigReservasjon');
const reservasjonFullfort = document.querySelector('#reservasjonFullfort');
const leggInnKontaktInfo = document.querySelector('#leggInnKontaktInfo');

ikkeLedig.style.display = 'none';
reservasjonFullfort.style.display = 'none';
leggInnKontaktInfo.style.display = 'none';

//let tillfeldigTall = Math.random()*10
//HVORDAN APPENDE VERDI TIL CLASS
btn.onclick = function LedigBord(event) {
  spanAntall.append(inputAntall.value);
  spanDato.append(inputDato.value);
  spanTid.append(inputKlokkeslett.value);

  event.preventDefault()
  reservasjon.style.display = 'none';
  leggInnKontaktInfo.style.display = 'block';
}

  /*if ((inputAntall.value !== '')&&(inputDato.value !== '')&&
    (inputKlokkeslett.value !== '')){
      //if (tillfeldigTall < 0){

      //}
        else {
          event.preventDefault()
          reservasjon.style.display = 'none';
          ikkeLedig.style.display = 'block';

      }
    }

  }*/



  /*spanAntall.append(inputAntall.value);
  spanDato.append(inputDato.value);
  spanTid.append(inputKlokkeslett.value);
  spanMail.append(inputMail.value);*/
/*

var reservasjonen = document.getElementById('reservasjonen');
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
