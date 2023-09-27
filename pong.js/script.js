
let xBolinha = 300;
let yBolinha = 200;
let diametro = 60;
let vXBolinha = 6;
let vYBolinha = 6;
let raio = diametro / 2;

function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    criarBolinha();

circle(xBolinha, yBolinha, diametro);


xBolinha += vXBolinha;



if(xBolinha + 30 >  width || xBolinha < 0 ) {
    vXBolinha *= -1;

}
yBolinha += vYBolinha;

if(yBolinha + 30 > height || yBolinha < 0 ) {
    vYBolinha *= -1;
   }

   function criarBolinha(){
       circle(xBolinha, yBolinha, diametro);
 }

  function movimentarBolinha(){
      xBolinha += vXBolinha;     
}
  }