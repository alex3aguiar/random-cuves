function setup() {
  const cnv = createCanvas(400, 400, WEBGL);
  resizeCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(tudoRandom);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let alfa = 33;
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
  console.log(alfa,beta)
}

function randonSizeCube(){
    tamanhoMaximo = windowWidth < windowHeight? windowWidth : windowHeight;
  console.log(tamanhoMaximo)
  x = random(tamanhoMaximo*0.1,tamanhoMaximo*0.8);
  y = random(tamanhoMaximo*0.1,tamanhoMaximo*0.8);
  z = random(tamanhoMaximo*0.1,tamanhoMaximo*0.8);
}

function tudoRandom(){
 randonSizeCube()
  randonAngleCube()
}
