// Script 3 of 5: galleryenhance.js. This script provides a slide show in response to users in gallery section.
var slideIndex = 0;

// Determine which slide to be displayed
function changeSlides(n) {
    slideIndex = slideIndex + n;
    
    if (slideIndex >= document.getElementsByClassName("slide").length){
        slideIndex = 0;}
    if (slideIndex < 0){
        slideIndex = document.getElementsByClassName("slide").length - 1;}

    showSlides(slideIndex);
}

// Display the selected slide and hide the unselected slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slides[n].style.display = "block"; 
}

// Display the initial slide, hide the rest slides and display the prev and the next button
window.onload = function(){
    var i;
    var prev_next = document.getElementsByClassName("prev_next");

    showSlides(slideIndex);

    for (i = 0; i < prev_next.length; i++) {
        prev_next[i].style.display = "block"; 
    }
}
