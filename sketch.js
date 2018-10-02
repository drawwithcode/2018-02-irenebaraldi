function preload(){
  // put preload code here
}

function setup() {
  createCanvas(800,600);
  background(40);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  push();
  strokeWeight(0.2);
  stroke(color('#606060'),100);
  translate(400,300);
  rotate(frameCount*10);
  noFill();
  ellipse(100,0,200,200);
  pop();

  push();
  translate(400,300);
  //rotate(frameCount*3);
  noFill();

  //stroke(lerpColor(color('#FF7F00'), color('#0000FF'), frameCount/120));
  //stroke(lerpColor(color('#0000FF'), color('#FF7F00'), frameCount/120));
  stroke(192, 192, 192, 20);
  line(cos(frameCount*3)*100,sin(frameCount*3)*100,200,0,);

  //stroke(lerpColor(color('#0000FF'), color('#FF7F00'), frameCount/120));
  stroke(255, 229, 204, 20);
  line(0,200,cos(frameCount*3)*100,sin(frameCount*3)*100);

  //stroke(lerpColor(color('#0000FF'), color('#FF7F00'), frameCount/120));
  stroke(255, 229, 204, 20);
  line(0,-200,cos(frameCount*3)*100,sin(frameCount*3)*100);

  //stroke(lerpColor(color('#0000FF'), color('#FF7F00'), frameCount/120));
  stroke(255, 229, 204, 20);
  line(-200,0,cos(frameCount*3)*100,sin(frameCount*3)*100);

  pop();

  push();
  translate(400,300);
  stroke(lerpColor(color('#FF9933'), color('#3399FF'), frameCount/120));
  noFill();
  line(100,0,cos(frameCount*3)*100,sin(frameCount*3)*100);
  pop();

  translate(400,300);
  rotate(frameCount*3);
  stroke(224, 10);
  line(800,10,cos(frameCount)*100,sin(frameCount)*100);





  //Stops the draw function if a certain condition avaluates true
  if (frameCount == 120) {
    noLoop();
  }
}
