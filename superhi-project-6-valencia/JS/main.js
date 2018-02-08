// click hamburger, run function

$('.menu-toggle').on('click', function() {
  $('.menu').toggleClass('open') 
  return false
})
// inside function, add / remove class of open
// make sure our link doesn't jump page to top

