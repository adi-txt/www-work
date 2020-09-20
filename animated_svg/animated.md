# Creating an SVG

- SVG == scalar vector graphic
- Most of the time SVGs are created by designers using some sort of tool, but we can write an SVG using code

### Step 1, create the SVG
- We have to give the svg a path, and we have to describe the path. This is done via d
- Descriptions are done using coordinates
- M = move
- 10,10 == 10 pixels across, 10 pixels down
- L = line
- start at 10,10, line from there to 50,100, another line to 90,50


### Step 2, styling the SVG
- create width and height for svg
- style the path
  - stroke gives you color
  - stroke width gives you stroke width
  - stroke linecap == round == no sharp corners
  - fill is automatically filled in, let's set that to none

### Step 3, make the SVG move
- Set up an array for x coordinates (let's just say 0 to 500)
- We want to animate the svg, so let's create an animate() function
  - What does `requestAnimationFrame(animate)` do?
- We need y coordinates as well 
- Let's do pairs for now, and see how we can turn that into the D attribute of the svg
- We need to create a string to replace the d value
- We start with M to set up the initial point of the svg
- We want to use the points array now. Each point can be set up using L, which == line to. L 5 5 goes to this point from the previous point and draws a line. So in our case, M0,0 L1,1 L2,2 ... goes from 0,0 to 1,1 to 2,2, etc.
- Add randomness to the y coordinate, and you'll see a weird sound wave type thing that's random
- We want a wave, how do we do that?
- We want a sine wave
- Let's say y = Math.sin(x) -- this wave is small and hard to notice.
- Let's multiple that value by 100 -- this wave is a weird line, the frequency is super high
- Let's divide x value by 20
  - This looks closer to what we want
  - Why is half the wave shown?
    - y value goes to -100 and then +100
    - Fix this by adding 200 to y value (we know the height is 400)
  - Let's reduce the wave height a bit by multiplying by 20 
  - Let's make it tighter by x / 10
- It doesn't MOVE! How do we fix this.
  - We're animating every time, which is not ideal
  - Use variable for time, and add to this with each frame 
  - We want x to move for the "movement" to occur. so let's move x with this time value


