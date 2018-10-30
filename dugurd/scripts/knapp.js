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
