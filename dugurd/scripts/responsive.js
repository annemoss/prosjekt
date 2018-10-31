/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive() {
    var x = document.querySelector(".nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
