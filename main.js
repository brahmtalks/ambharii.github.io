
  // JS tilt Effect
// function hoverTilt () {
//   var tiltBlock = $('.js-tilt');
//   if(tiltBlock.length) {
//     $('.js-tilt').tilt({
//         glare: true,
//         maxGlare: .3
//     })
//   }
// }

// ( function( $ ) {

// 	"use strict";

//   $(".card").tilt({
//     maxTilt: 15,
//     perspective: 1400,
//     easing: "cubic-bezier(.03,.98,.52,.99)",
//     speed: 1200,
//     glare: true,
//     maxGlare: 0.2,
//     scale: 1.04
//   });
  
// }( jQuery ) );

// $(document).ready(function(){
	
// });


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("drawer").style.width = "550px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("drawer").style.width = "0";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementsByClassName("grid")[0].style.WebkitFilter = 'blur(6px)';
  document.getElementsByClassName("grid")[0].style.filter= 'blur(6px)';
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementsByClassName("grid")[0].style.WebkitFilter = 'blur(0px)';
  document.getElementsByClassName("grid")[0].style.filter= 'blur(0px)';
}


  // JS tilt Effect
function hoverTilt () {
  var tiltBlock = $('.js-tilt');
  if(tiltBlock.length) {
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .3
    })
  }
}
// nav bar

$(document).ready(function(){

  $(".navbar").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement("#content")) { //if it has scrolled beyond the #content elment
            $('.navbar').fadeIn();  //Show the navigation bar
        } else {
            $('.navbar').fadeOut(); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }
 });


function myFunction1() {
  var elmnt = document.getElementById("services");
  elmnt.scrollIntoView();
}

function myFunction2() {
  var elmnt = document.getElementById("projects");
  elmnt.scrollIntoView();
}
// end nav bar




















