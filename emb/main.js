
function openNav() {
  document.getElementById("drawer").style.width = "550px";
}

function closeNav() {
  document.getElementById("drawer").style.width = "0";
}

function myFunction1() {
  var elmnt = document.getElementById("features");
  elmnt.scrollIntoView();
}

function myFunction2() {
  var elmnt = document.getElementById("services");
  elmnt.scrollIntoView();
}


$('.slickk').slick({
  accessibility: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  swipeToSlide: true,
  infinite: false
});

$('.slickkk').slick({
  accessibility: false,
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  arrows: true,
  swipeToSlide: true
});