class cirkel{
  constructor(x,y,str,sn,kl){
  this.x= x;
  this.y= y;
  this.straal= str;
  this.snelheid= sn;
  this.kleur= kl;
  }
teken(){
  noStroke();
  fill(this.kleur);
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


function setup() {
  canvas = createCanvas(450,450);

  canvas.parent('processing');
  //noLoop();

  cirkel1 = new cirkel(200,225,80,2,'red');
  cirkel2 = new cirkel(300,225,80,5,'blue');
  cirkel3 = new cirkel(400,225,80,8,'purple');

}


function draw() { 
   background('silver');
  noStroke();
  cirkel1.teken();
  cirkel2.teken();
  cirkel3.teken();

  cirkel1.beweeg(); 
  cirkel2.beweeg(); 
  cirkel3.beweeg(); 

}
