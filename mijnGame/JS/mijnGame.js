function setup(){
   canvas = createCanvas(windowWidth, windowHeight);
   textAlign(CENTER,CENTER);    
   frameRate(50);
}
 
 function preload()  { 
        achtergrond = loadImage("image/autoweg.jpg"); 
 }

function draw() { 
        background(achtergrond); 
     }


