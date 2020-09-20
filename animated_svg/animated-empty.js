// create empty list for x direction

// create x coordinates

// create time value

// we want the SVG to "animate" every second, so this is what the JS
// function does
function animate() {
  // create x, y coordinates for the animation

  // turn the x, y values into an html attribute

  // replace the current path attribute with what it should be

  // add time to move the x value

  // requestAnimationFrame() method tells the browser that you wish
  // to perform an animation and requests that the browser calls a
  // specified function to update an animation before the next repaint
  // this essentially calls the function over and over again
  requestAnimationFrame(animate)
}

// call animate function the first time
animate()
