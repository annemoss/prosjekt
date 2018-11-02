/* JOBB SØKNAD */
const soknad = document.getElementById('soknad');
const submit = document.getElementById('submit');
const levert = document.getElementById('confirmation');
const navnBekreftelse = document.getElementById('bekreftelseNavn');
var fornavnBekreftelse = document.getElementById('firstname');
document.getElementById('confirmation').style.display = "none";

/*INPUTFELTENE*/
const fornavn = document.getElementById('firstname');
const etternavn = document.getElementById('lastname');
const mail = document.getElementById('email');
const mobilnummer = document.getElementById('phonenumber');
const whybox = document.getElementById('whybox');
const stilling = document.getElementById('velgStilling');
const ikkeEnStilling = document.getElementById('ikkeEnStilling');


submit.onclick = function SendInn(event) {
      if ((fornavn.value !== '') && (etternavn.value !== '') &&
          (mail.value !== '') && (mobilnummer.value !== '') &&
            (whybox.value !== '') && (stilling.value !== '')) {
                  event.preventDefault();
                  soknad.style.display = 'none';
                  levert.style.display='block';
                  navnBekreftelse.append(fornavnBekreftelse.value);
  }
}
