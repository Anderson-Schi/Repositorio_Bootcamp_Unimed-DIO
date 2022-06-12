var slideIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("slideauto");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slide, 4000); // Change image every 4 seconds
}