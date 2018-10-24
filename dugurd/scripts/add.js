document.addEventListener("DOMContentLoaded",function(e){
	const header = document.querySelector("header")
    header.innerHTML = '<div class="nav"'
                        +    '<ul>'
                        +       '<li><a href="../index.html"><img src="img/logo.png" alt="logo"class="logoHeader"></a></li>'
                        +       '<li class="dropdown">MENY'
                        +           '<ul class="dropdown-content">'
                        +               '<li class="menymeny"><a href="rMeny.html">RESTAURANT</a></li>'
                        +               '<li class="menymeny"><a href="cMeny.html">CATERING</a></li>'
                        +           '</ul>'
                        +       '</li>'
                        +       '<li><a href="bestillBord.html">BESTILL BORD</a></li>'
                        +       '<li><a href="catering.html">CATERING</a></li>'
                        +       '<li><a href="omOss.html">OM OSS</a></li>'
                        +       '<li><a href="kontaktOss.html">KONTAKT OSS</a></li>'
                        +       '<li><a href="jobb.html">SØK JOBB</a></li>'
                        +     '</ul>'
                        +'</div>'

	const footer = document.querySelector("footer")
    footer.innerHTML = "footer"
})
