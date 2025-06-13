let trator;
let laranjas = [];
let cidadeX;
let pontos = 0;

function setup() {
  createCanvas(800, 400);
  trator = createVector(100, height / 2);
  cidadeX = width - 150;

  // Criar algumas laranjas aleatórias
  for (let i = 0; i < 5; i++) {
    let x = random(50, width / 2 - 50);
    let y = random(50, height - 50);
    laranjas.push(createVector(x, y));
  }
}

function draw() {
  background(180, 220, 180); // Fundo verde claro

  // Campo
  fill(100, 200, 100);
  rect(0, 0, width / 2, height);

  // Cidade
  fill(180);
  rect(cidadeX, 0, width - cidadeX, height);
  textSize(100);
  text("🏙️ Cidade", cidadeX + 0, 150);

  // Mostrar laranjas
  textSize(24);
  for (let i = 0; i < laranjas.length; i++) {
    text("🍊🍓🍇🍌🍉🍏🍎", laranjas[i].x, laranjas[i].y);
  }

  // Mostrar trator
  textSize(32);
  text("🚜 🚜  ", trator.x, trator.y);

  // Movimentar trator
  if (keyIsDown(LEFT_ARROW)) trator.x -= 3;
  if (keyIsDown(RIGHT_ARROW)) trator.x += 3;
  if (keyIsDown(UP_ARROW)) trator.y -= 3;
  if (keyIsDown(DOWN_ARROW)) trator.y += 3;

  // Coletar laranjas
  for (let i = laranjas.length - 1; i >= 0; i--) {
    if (dist(trator.x, trator.y, laranjas[i].x, laranjas[i].y) < 30) {
      laranjas.splice(i, 1);
    }
  }

  // Entregar na cidade
  if (trator.x > cidadeX && laranjas.length < 5) {
    pontos += 5 - laranjas.length;
    // Recarregar laranjas
    laranjas = [];
    for (let i = 0; i < 5; i++) {
      let x = random(50, width / 2 - 50);
      let y = random(50, height - 50);
      laranjas.push(createVector(x, y));
    }
    trator.x = 100; // Voltar para o campo
    trator.y = height / 2;
  }

  // Mostrar pontuação
  fill(0);
  textSize(20);
  text("Pontos: " + pontos, 10, 30);
}
