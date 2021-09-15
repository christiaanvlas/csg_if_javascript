var cirkel={
  x:225,
  y:225,
  straal: 50,
  snelheid: 4,
teken(){
  noStroke();
  fill('red');
  ellipse(this.x,this.y,this.straal);
},
beweeg(){
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.snelheid;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.snelheid;
  }
  if (keyIsDown(UP_ARROW)) {
    this.y -=this.snelheid;
  }
  if (keyIsDown(DOWN_ARROW)) {
    this.y += this.snelheid;
  }
}
}


function setup() {
  canvas = createCanvas(450,450);

  canvas.parent('processing');
  //noLoop();
}


function draw() { 
   background('silver');
  noStroke();
  cirkel.teken();
  cirkel.beweeg(); 

}
