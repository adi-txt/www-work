// when we scroll, we want to run a function
// we want to figure out how far down the page we have scrolled
// we want to display the pixel number we have scrolled inside our progress div

//document is a javascript keyword that refers to the entire html page
$(document).on('scroll', function() {
  
  //the scrollTop method gives you the pixel value for how far it is to the top of the page.
  var pixelsFromTop = $(document).scrollTop()
  var height = $(document).height()
  var windowDifference = $(window).height()
  
	// this doesn't work
  //   var window = $(window).height()
//   var difference = height - window
  
  var difference = height - windowDifference
  
  var percent = 100 * pixelsFromTop / difference
//   console.log(percent)
//   $('.progress').text(pixelsFromTop + ' pixels from top')
  $('.bar').css('width', percent + "%")
  
  
  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }
  
})