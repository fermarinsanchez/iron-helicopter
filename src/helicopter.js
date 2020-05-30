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

    this.actions = {
      right: false,
      left: false,
      up: false,
      shoot: false
    }

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
    if (this.y + this.h > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h
    }
  }

  move() {
    this._setActions()
    this.vy += this.ay
    this.vy += this.g
    this.y += this.vy;

    this.vx += this.ax
    this.x += this.vx

    this.weapon.move()
  }

  _setListeners() {
    document.addEventListener('keydown', e => {
      this._switchActions(e.keyCode, true)
    })

    document.addEventListener('keyup', e => {
      this._switchActions(e.keyCode, false)
    })
  }

  _switchActions(key, action) {
    switch (key) {
      case UP:
        this.actions.up = action
        break;
      case LEFT:
        this.actions.left = action
        break;
      case RIGHT:
        this.actions.right = action
        break;
      case SPACE:
        this.actions.shoot = action
        break;
    }
  }

  _setActions() {
    if (this.actions.up) {
      this.ay = -0.2
      this._animateSprite()
    } else {
      this.ay = 0
    }

    if (this.actions.right) {
      this.ax = 0.2
    } else if (this.actions.left) {
      this.ax = -0.2
    } else {
      this.ax = 0
    }

    if (this.actions.shoot) {
      this.weapon.shoot()
    }
  }

  _animateSprite() {
    if (this.tick++ >= 5) {
      this.tick = 0

      if (this.img.frameIndex++ >= (this.img.frames - 1)) {
        this.img.frameIndex = 0
      }
    }
  }
}


