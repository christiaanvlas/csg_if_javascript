function setup(){
    canvas = createCanvas((windowWidth, windowHeight);  
    textAlign(CENTER,CENTER);  
    frameRate(50);

}
function preload() {
    achtergrond = loadImage("images/skyline_1.jpg");
  }

  function draw() {
   background(achtergrond);
  }