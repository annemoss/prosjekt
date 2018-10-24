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
const btn = document.querySelector('.button');
//const informasjon = document.getElementById('informasjon');
const velgAntallPersoner = document.getElementById('velgAntallPersoner');
const velgDato = document.getElementById('velgDato');
const leggInnKontaktInfo = document.querySelector('#leggInnKontaktInfo');
const p1 = document.getElementById('1');
const p2 = document.getElementById('2');
const p3 = document.getElementById('3');
const p4 = document.getElementById('4');
const valg = document.getElementById('velgAntallPersoner')

var randomtall = Math.random*10

//p2.style.visibility = 'hidden';
velgAntallPersoner.style.display = 'none' ;
velgDato.style.display = 'none';
leggInnKontaktInfo.style.display = 'none';

if ((p1.visibility=='visible')){
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
