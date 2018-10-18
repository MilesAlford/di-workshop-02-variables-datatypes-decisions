var moving = true
var name = "Miles Alford"
var positionX = 100
var positionY = 0
var speedX = 10
var speedY = 5
var counter = 0
function setup() {  // The setup function is called when a sketch starts and is used to intialise variables, pin modes etc. this function will only run once.
  createCanvas(400, 200) //Creates a container to add graphics by using JavaScript
}

function draw() { // The draw function contiunously executes the lines of code contained within its block. It is used typically for animations, in combination with incrementing variables that affect the shapes drawn.
  background(100) //  This variable controls the rgb colour of the canvas
  rect(positionX, positionY, 10, 10)
  console.log('The position is ' + positionX)
  text('My name is ' +  name, 10, 30)
  if (moving) {
    positionX = positionX + speedX;
    //positionY = positionY + speedY
    if (positionX >=400 || positionX <0) {
      speedX = -speedX
      counter ++
    } //if (positionY >=200 || positionY <0) {
      //speedY = -speedY
    //} // the code in here only runs if `moving` is true
  } 
   text(moving, 10, 50)
   text (counter, 10, 70)
   console.log(moving)
}


function mousePressed() {
  moving = !moving
}










