function Mid() {
  const texture = PIXI.Texture.fromImage("resources/bg-mid.png");
  PIXI.extras.TilingSprite.call(this, texture, 512, 256);
  this.position.x = 0;
  this.position.y = 128;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;
}

// Inherit the features of the PIXI.extras.TilingSprite class.
Mid.prototype = Object.create(PIXI.extras.TilingSprite.prototype);