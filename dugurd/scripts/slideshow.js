var slideIndex = 0;
showSlides();

//Next/prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//bilde kontroll
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');
  for (i=0; i<slides.length; i++){
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slidesIndex = 1;
  }
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 4000);
}
