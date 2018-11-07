/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function responsive() {
    var y = document.querySelector('.dropdown');
    y.addEventListener('click', function(){
        changeDisp();
    })

    var x = document.querySelector(".nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }

    changeDisp();
}

function changeDisp(){
    var z = document.querySelector('.dropdown-content');

    if(z.style.display == "none"){
        z.style.display = 'block'
    }
    else{
        z.style.display = 'none';
    }
}