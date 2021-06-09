let particleSystem, effectManager, grid, player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  particleSystem = new ParticleSystem();
  effectManager = new EffectManager();
  grid = new Grid(5 , 5);
  player = new Player();
  grid.add(1, 5, new Color(2, 5 , 1))
  grid.add(2, 5, new Color(2, 5 , 1))
  grid.add(3, 5, new Color(2, 5 , 1))
  grid.add(4, 5, new Color(2, 5 , 1))
  grid.add(5, 5, new Color(2, 5 , 1))

}

function draw() {
  background(50);
  particleSystem.run();
  player.update()
  player.show();
  grid.show()
  effectManager.show();
}

function windowResized() {
  resizeCanvas(windowWidth , windowHeight)
}

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}