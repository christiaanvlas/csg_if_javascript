class auto{
    constructor(x,y,kleur){
    this.breedte = 50;
    this.hoogte = 50;
    this.x = x;
    this.y = y;
    this.kleur = kleur;
    this.stapGrootte: 5,
  
    }
}

beweeg() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.stapGrootte;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.stapGrootte;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.stapGrootte;
    }
}

teken() {
    push();
    noStroke();
    noFill();
    ellipse(this.x,this.y,this.diameter);
    pop();
}

function keyTyped() {
    if (spel.actief && key == 'z') {
      spel.speler1.y += spel.snelheidSpeler;
    }
    if (spel.actief && key == 'q') {
      spel.speler1.y -= spel.snelheidSpeler;
    }
    if (spel.actief && key == 'm') {
      spel.speler2.y += spel.snelheidSpeler;
    }
    if (spel.actief && key == 'i') {
      spel.speler2.y -= spel.snelheidSpeler;
    }
    return false;
  }
  