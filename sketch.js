
//radar variables
let angle = 0
let count = 5;
let offset;
//sound variables
let osc, env;

//radar blips
let balls = [];

// radar needle
let x1 = 0;
let x2 = 400;


function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(color(0,200,0));
  noFill();
  env = new p5.Envelope();
  env.setADSR(0.01, 0.1, 1, 0.5);
  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(env);
  midiToFreq();
  for(let i =0; i<count-2; i++){
    let x= 60 + 60 * i
    balls[i] = new Ball(x, 200, 20);

  }


}

function draw() {
  background(0);


  for (var i = 0; i < balls.length; i++){
    
    balls[i].collision(mouseX, mouseY, env );
    balls[i].style();
    balls[i].move();   

  }
  osc.freq( midiToFreq(72));
  
  stroke(color(0,200,0));
  translate(width/2,height/2);
  push();
  // radar();
  offset = frameCount % (width / count);
  for(let i =0; i< count +5; i++){
  strokeWeight(max((count - 1)/5, 0.1));
  circle(0,0, offset+width/count*i);
  pop()
  }
  push();
  rotate(200)
  rotate(angle); 
  fill(0,200,0);
  line(x1, 0, x2, 0)
  // rect(0,0,5,400);
  pop();
  angle += 0.01;
  
  // translate(0, 0);
 
}
// to test sound
function mousePressed(){
  env.play();
  print("is pressed!");

}

function radar(){
  push();
  rotate(200)
  rotate(angle); 
  fill(0,200,0);
  line(0, 0, 400, 0)
  // rect(0,0,5,400);
  pop();
  angle += 0.01;
 }
