/* JOBB SØKNAD */
const soknad = document.getElementById('soknad');
const levert = document.getElementById('confirmation');
const navnBekreftelse = document.getElementById('bekreftelseNavn');
var fornavnBekreftelse = document.getElementById('firstname');
document.getElementById('confirmation').style.display = "none";


function SendInn() {
    event.preventDefault();
    soknad.style.display = 'none';
    levert.style.display='block';
    navnBekreftelse.append(fornavnBekreftelse.value);
    scrollTo(0,0);

}
