document.addEventListener("DOMContentLoaded",function(e){
	const header = document.querySelector("header")
    header.innerHTML = '<div id="nav"'
                        +    '<ul>'
                        +       '<li><a href="../index.html"><img src="../img/logo.png" alt="logo" id="logoHeader"></a></li>'
                        +       '<li>MENY'
                        +           '<ul id="dropdown">'
                        +               '<li><a href="../rMeny.html">RESTAURANT</a></li>'
                        +               '<li><a href="../cMeny.html">CATERING</a></li>'
                        +           '</ul>'
                        +       '</li>'
                        +       '<li><a href="../bestillBord.html">BESTILL BORD</a></li>'
                        +       '<li><a href="../catering.html">CATERING</a></li>'
                        +       '<li><a href="../omOss.html">OM OSS</a></li>'
                        +       '<li><a href="../kontaktOss.html">KONTAKT OSS</a></li>'
                        +       '<li><a href="../jobb.html">SØK JOBB</a></li>'
                        +     '</ul>'
                        +'</div>'
    
	const footer = document.querySelector("footer")
    footer.innerHTML = "html"
})