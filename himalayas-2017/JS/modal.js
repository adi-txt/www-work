// 1. when we click image, show lightbox
$('.photos a').on('click', function() {
  //grab link from image clicked
  var link = $(this).html()
  // 2. grab image that is being clicked and show it inside the modal
  $('.modal-content').html(link)
  $('.modal').fadeIn(500)
  
  // 4. our link doesn't follow the default href
  return false
})

// 3. when we click the close button, hide the modal
$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)
  return false
})





