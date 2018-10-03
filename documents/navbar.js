function createNavbar(){

    var text = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");

    text.appendChild(t);
    document.getElementById("navbar").appendChild(text);

}

createNavbar();