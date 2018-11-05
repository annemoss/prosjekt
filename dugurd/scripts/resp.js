function responsiveIndex() {
    var x = document.querySelector(".navIndex");
    if (x.className === "navIndex") {
        x.className += " responsive";
    } else {
        x.className = "navIndex";
    }
}
