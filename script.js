var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  
  // get the array of divs' with classname myslides
  var slides = document.getElementsByClassName("mySlides");
  
  console.log(slides)
  // get the array of divs' with classname dot 
  var dots = document.getElementsByClassName("dot");
  console.log(dots)

  // check for boundary 
  // The first if statement resets the slideIndex back to one,once the last slide is reached. 
  // The second if statement sets slideIndex to the total number of slides in the instance of the user 
  // clicking on the left arrow 
  // when the first slide is showing, so that the last slide shows next.

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  // initially set the display to  
  // none for every image. 
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // Change image every 2 seconds 
  // setTimeout(showSlides, 2000
}