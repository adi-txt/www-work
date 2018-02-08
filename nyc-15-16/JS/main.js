var slides = ['.holder div']
var currentSlide = 0

var totalSlides = $('.holder div').length

var nextSlide = function() {
  console.log('nextSlide')
  currentSlide = currentSlide + 1 //   increment currentSlide

  if (currentSlide >= totalSlides) {
    currentSlide = 0
    moveSlide(currentSlide)
  } else {
    moveSlide(currentSlide)
  }
}

var prevSlide = function() {
  if (currentSlide == 0) {
    currentSlide = totalSlides - 1
   	moveSlide(currentSlide)
  } else {
    currentSlide = currentSlide - 1
    moveSlide(currentSlide)
  }
}

var autoSlide = setInterval(function() {
  nextSlide()
}, 5000) // runs every three seconds

// function that takes us to next slide
$('.next').on('click', function() {
  clearInterval(autoSlide) //this cancels autoslide, as the user has taken control
  nextSlide()
})

// function that takes us to previous slide
$('.prev').on('click', function() {
  clearInterval(autoSlide)
  prevSlide()
})

var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + ' / ' + totalSlides)

var moveSlide = function(slideNumber) {
	var vwUnit = -slideNumber * 100 + 'vw'
	$('.holder').css('left', vwUnit)
  var slideNumber = currentSlide + 1
	$('.steps').text(slideNumber + ' / ' + totalSlides)	// here we set the text for the steps
}

$('body').on('keydown', function(event) {
  clearInterval(autoSlide) //this cancels autoslide, as the user has taken control
  var keyCode = event.keyCode
//   console.log(event.keyCode)
  if (keyCode == 37) {
    prevSlide()
  } else if (keyCode == 39) {
    nextSlide()
  }
})