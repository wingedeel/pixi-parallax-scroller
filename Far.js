/*
Our Far class is a more specialised version of PIXI.extras.TilingSprite.

Because our Far class inherits from PIXI.extras.TilingSprite, 
we need to remember to initialise the TilingSprite functionality. 
That’s done by calling the TilingSprite class’ constructor from within 
our own class’ constructor. 
*/

// Represents the class constructor
function Far() {
  const texture = PIXI.Texture.fromImage("resources/bg-far.png");
  PIXI.extras.TilingSprite.call(this, texture, 512, 256);
  this.position.x = 0;
  this.position.y = 0;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;
}

// Inherit the features of the PIXI.extras.TilingSprite class.
Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);