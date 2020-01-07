
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