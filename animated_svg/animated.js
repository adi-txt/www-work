let xDirection = []  // x direction across the bottom of the page

// how long do we want the SVG to go for.
// In this case, we want a "length" of 500
for (let i = 0; i <= 500; i++) {
  xDirection.push(i)
}

let time = 0;


// we want the SVG to "animate" every second, so this is what the JS
// function does
function animate() {
  // we take x, calculate where the points should be
  let points = xDirection.map(x => {
    let y = 200 + 20 * Math.sin((x + time) / 10)
    return [x, y]
  })

  // turn the x, y values into an html attribute
  let path = "M" + points.map(point => {
    return point[0] + "," + point[1]
  }).join(" L")

  // replace the current path attribute with what it should be
  document.querySelector("path").setAttribute("d", path)

  // add time to move the x value, and with it, the page
  time += 1;

  // we loop over the animation, but we need to start it, which
  // occurs at the bottom of this file
  requestAnimationFrame(animate)
}

animate()
