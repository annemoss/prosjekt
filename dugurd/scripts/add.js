document.addEventListener("DOMContentLoaded", function(e) {
  const header = document.querySelector("header");
  header.innerHTML =
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
    '<div class="nav"' +
    '<li><a href="index.html"><img src="img/logo.png" alt="logo"class="logoHeader"></a></li>' +
    "<ul class='navUl'>" +
    '<li class="dropdown">MENY' +
    '<ul class="dropdown-content">' +
    '<li class="menymeny"><a href="rMeny.html">RESTAURANT</a></li>' +
    '<li class="menymeny"><a href="cMeny.html">CATERING</a></li>' +
    "</ul>" +
    "</li>" +
    '<li><a href="bestillBord.html">BESTILL BORD</a></li>' +
    '<li><a href="catering.html">CATERING</a></li>' +
    '<li><a href="omOss.html">OM OSS</a></li>' +
    '<li><a href="kontaktOss.html">KONTAKT OSS</a></li>' +
    '<li><a id="aJobb" href="jobb.html">SØK JOBB</a></li>' +
    "</ul>" +
    '<a href="javascript:void(0);" class="iconMobil" onclick="responsive()"><i class="fa fa-bars"></i></a>' +
    "</div>";

  const footer = document.querySelector("footer");
  footer.innerHTML = '<div id="footerBox">' +
    '<div class="footerDiv">' +
    '<p>Åpningstider</p>' +
    '<p>Mandag-Torsdag: 11-20</p>' +
    '<p>Fredag-Søndag: 11-22</p>' +
    '</div>' +
    '<div class="footerDiv">' +
    '<p>Email: kontakt@dugurd.no</p>' +
    '<p>Telefon: +47 483 56 782</p>' +
    '<p>Adresse: Skadvinvegen 14, 3560 Hemsedal</p>' +
    '</div>' +
    '<div class="footerDiv">' +
    '<p>Siden er utviklet av Sarunas Juskenas,</p>' +
    '<p>Vidar Michaelsen, Anne Mosvold Ørke,</p>' +
    '<p>Gunvor Huso og Emilie Kalleberg</p>' +
    '</div>' +
    '</div>'
});

//<!--<div>
//  <div class="footerDiv">
//  <p> Åpningstider: Grand opening på julaften</p>
//    <p>Mail: @dugurd.no</p>
//  </div>
//  <div>
//    <p>Addresse: Skadvinvegen 14, 3560 Hemsedal</p>
//    <p>Telefonnummer: 48356782</p>
//  </div>
//  <div>
//    <p>Siden er utviklet av SVAGE </p>
//  </div>
//</div> -->
