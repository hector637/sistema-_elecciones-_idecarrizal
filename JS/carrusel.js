let index = 0;
const slides = document.querySelectorAll(".carrusel img") ;

setInterval (() => {
    slides[index].style.display =  "none";
    slides = (index + 1) % slides.length;
    slides[index].style.display =  "block";
}, 30000) ;