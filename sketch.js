function setup() {
  createCanvas(400, 400, WEBGL);
  button0 = createButton('angulo');
  button0.position(0, 0);
  button0.mousePressed(randonAngleCube);
  
  button1 = createButton('proporção');
  button1.position(50, 0);
  button1.mousePressed(randonSizeCube);
  
  button1 = createButton('tudo randon');
  button1.position(150, 0);
  button1.mousePressed(tudoRandom);
}

let alfa = 0;
let beta = 0;

let x = 100;
let y = 100;
let z = 100;

function draw() {
  background(220);
  rotateX(alfa);
  rotateY(beta);
  box(x,y,z);
}

function randonAngleCube(){
  
  alfa = random(360);
  beta = random(360);
}

function randonSizeCube(){
  x = random(50,200);
  y = random(50,200);
  z = random(50,200);
}

function tudoRandom(){
 randonSizeCube()
  randonAngleCube()
}
