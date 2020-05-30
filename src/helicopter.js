class Helicopter {
  constructor(ctx) {
    this.ctx = ctx
    this.tick = 0

    this.x = 100
    this.y = 0

    this.w = 100
    this.h = 40

    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.ay = 0
    this.ax = 0
    this.g = 0.1

    this.img = new Image()
    this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
    this.img.frames = 4
    this.img.frameIndex = 0

    this.weapon = new Weapon(this)

    this._setListeners()
  }

  draw() {
    // TODO: draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      this.img.frameIndex * this.img.height / this.img.frames,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    )



    this.weapon.draw()
  }

  isFloor() {
    // TODO: check if floor
  }

  move() {
    // TODO: move
  }

  _setListeners() {
    document.addEventListener('keydown', e => {
      // TODO
    })

    document.addEventListener('keyup', e => {
      // TODO
    })
  }
}
