class cirkel{
  constructor(){
  this.x= random(10,1000);
  this.y= random(10,1000);
  this.straal= 10;
  this.snelheid= random(1,100);
  this.kleur= 'red';
  this.G = random(2,400);
  this.R= random(2,400);
  this.B= random(2,400);
  }
teken(){
  noStroke();
  fill(this.R,this.G,this.B);
  ellipse(this.x,this.y,this.straal);
}
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

var cirkels = [];


function setup() {
  canvas = createCanvas(1000,1000);

  canvas.parent('processing');
  //noLoop();
  for(var c =0; c <100;c++){ 
    cirkels.push(new cirkel());
  }
  // cirkel1 = new cirkel(200,225,80,2,'red');
  // cirkel2 = new cirkel(300,225,80,5,'blue');
  // cirkel3 = new cirkel(400,225,80,8,'purple');

}


function draw() { 
   background('silver');

  noStroke();

  for(n=0;n<cirkels.length ;n++) { 
    if (cirkels[n].x || cirkels[n].y > 1000){
    cirkels[n].teken();
    cirkels[n].beweeg();
  }
}
 

}
