class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
  }

  start() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._addObstacle()
      this._clearObstacles()
      this._checkCollisions()
      if (this.tick++ >= 10000) {
        this.tick = 0;
      }

    }, 1000 / 60)
  }

  _clearObstacles() {
    this.obstacles = this.obstacles.filter(b => b.isVisible())
  }

  _addObstacle() {
    if (this.tick % 100 === 0) {
      this.obstacles.push(new Obstacle(this.ctx))
    }
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.bg.draw()
    this.helicopter.draw()
    this.obstacles.forEach(e => e.draw())
  }

  _move() {
    this.bg.move()
    this.helicopter.move()
    this.obstacles.forEach(e => e.move())

  }

  _checkCollisions() {
    if (this.helicopter.isFloor()) this._gameOver()
    this.obstacles.forEach(o => {
      const colX = this.helicopter.x + this.helicopter.w > o.x && this.helicopter.x < o.x + o.w
      const colY = this.helicopter.y + this.helicopter.h > o.y && this.helicopter.y < o.y + o.h 
      if (colX && colY) {
        this._gameOver()
      }
    })
  }

  _gameOver() {
    clearInterval(this.intervalId)

    this.helicopter.explosion.play()
    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}