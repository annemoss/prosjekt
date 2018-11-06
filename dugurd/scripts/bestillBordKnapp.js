/* BESTILL BORD*/
// QUESTION: ENDRE DATOFORM

console.log(window.innerWidth);

while (window.innerWidth < 800) {
  console.log('hei');
  new Picker(inputDato)
  //format: 'MM/DD/YYYY',
//};
}

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
const time = document.querySelector('#klokkeslett');
var weekday = datoen.value;

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


/*funksjonene for knapp*/
const inputAntall = document.querySelector('#antall_manuell');
const inputDato = document.querySelector('#dato');
const inputKlokkeslett = document.querySelector('#klokkeslett');
const inputMail = document.querySelector('#epost');
const inputFornavn = document.querySelector('#fornavn');
const inputEtternavn = document.querySelector('#etternavn');
const inputMobil = document.querySelector('#telefonnummer');

const reservasjon = document.querySelector('#reservasjonen');
const btn = document.querySelector('.bestillBordButton');
const btn2 = document.querySelector('#kontaktinfoButton');
const ikkeLedig = document.querySelector('#ikkeLedigReservasjon');
const reservasjonFullfort = document.querySelector('#reservasjonFullfort');
const leggInnKontaktInfo = document.querySelector('#leggInnKontaktInfo');

/*span verdier*/
const spanAntall = document.querySelector('#bordAntallPersoner');
const spanAntall2 = document.querySelector('#bordAntallPersoner2');
const spanAntall3 = document.querySelector('#bordAntallPersoner3');
const spanDato = document.querySelector('#reservertDato');
const spanDato2 = document.querySelector('#reservertDato2');
const spanDato3 = document.querySelector('#reservertDato3');
const spanTid = document.querySelector('#reservertKlokkeslett');
const spanTid2 = document.querySelector('#reservertKlokkeslett2');
const spanTid3 = document.querySelector('#reservertKlokkeslett3');
const spanMail = document.querySelector('#mailBekreftelse');


/*STARTOPPSETT*/
ikkeLedig.style.display = 'none';
reservasjonFullfort.style.display = 'none';
leggInnKontaktInfo.style.display = 'none';

let tillfeldigTall = Math.random()*10


function ledigBord()  {

      if (tillfeldigTall < 8){
        event.preventDefault()
        reservasjon.style.display = 'none';
        leggInnKontaktInfo.style.display = 'block';
        leggInnKontaktInfo.scrollTo(0,0);
        spanAntall.append(inputAntall.value);
        spanDato.innerHTML = inputDato.value;
        spanTid.append(inputKlokkeslett.value);
        window.scrollTo(0,0);

      }
        else {
          event.preventDefault()
          reservasjon.style.display = 'none';
          ikkeLedig.style.display = 'block';
          spanAntall2.append(inputAntall.value);
          spanDato2.innerHTML = inputDato.value;
          spanTid2.append(inputKlokkeslett.value);
          window.scrollTo(0,0);
      }
}

function kompelettReservasjon()  {

    /*APPENDER INPUTVERDI TIL CLASS*/
        spanAntall3.append(inputAntall.value);
        spanDato3.innerHTML = inputDato.value;
        spanTid3.append(inputKlokkeslett.value);
        spanMail.append(inputMail.value);

    event.preventDefault()
    leggInnKontaktInfo.style.display='none';
    reservasjonFullfort.style.display='block';
    window.scrollTo(0,0);
}
