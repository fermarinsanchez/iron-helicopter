class Weapon {
  constructor(shooter) {
    this.shooter = shooter;
    this.bullets = []
  }

  shoot() {
    const bullet = new Bullet(
      this.shooter.ctx,
      this.shooter.x + this.shooter.w * 0.7,
      this.shooter.y + this.shooter.h * 0.9,
    )

    this.bullets.push(bullet)
  }

  clearBullets() {
    this.bullets = this.bullets.filter(b => b.isVisible())
  }

  draw() {
    this.bullets.forEach(b => b.draw())
  }

  move() {
    this.bullets.forEach(b => b.move())
  }
}