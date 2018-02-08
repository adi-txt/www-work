$('.show-filters').on('click', function() {
//toggle is basically show + hide   
  
  //when navigation is expanded, collapse it
  //change text of show filters to show filters
  //otherwise if the nav is collapsed expand it
  //change the text to show hide filters
   if ( $('.filters-list').is(':visible')) {
			$('.filters-list').slideUp()
			$('.show-filters').text('Show filters')
   } else {
			$('.filters-list').slideDown()
			$('.show-filters').text('Hide filters')
   }
  
  return false

})


$('.filters-list a').on('click', function() {
  
  var filter = $(this).data('filter')
// 1) hide all products
  $('.product').hide()
// 2) show products with a particular filter
  $(filter).show()
  
  //add class name to clicked / selected object/link
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  //   console.log(filter)
  
  
//   console.log($(this).data('filter')) //grabs data filter from the attribute
// 	console.log($(this).attr('href')) //grabs link
  
  return false   //this blocks the link from following the href
  
})