var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, 800);
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

  drawSprites();
}

function collision() {
  if(isTouching(car, wall)) {
    var damage = (0.5 * weight * speed * speed) / 22500
    car.velocityX = 0
  }

  if(damage < 100) {
    car.style.color = "green";
  } else if(100 < damage < 180) {
    car.style.color = "yellow"
  } else if(damage > 180) {
    car.style.color = "red";
  }
}