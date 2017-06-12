/*
Our Far class is a more specialised version of PIXI.extras.TilingSprite.


*/

// Represents the class constructor
function Far() {
  // Create a texture
  const texture = PIXI.Texture.fromImage("resources/bg-far.png");
  /*
  Because our Far class inherits from PIXI.extras.TilingSprite, 
  we need to remember to initialise the TilingSprite functionality. 
  That’s done by calling the TilingSprite class’ constructor from within 
  our own class’ constructor. 
  */
  PIXI.extras.TilingSprite.call(this, texture, 512, 256);
  this.position.x = 0;
  this.position.y = 0;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;

  this.viewportX = 0;
}

// Inherit the features of the PIXI.extras.TilingSprite class.
// Use Object.create to create an object with a specific prototype
Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Far.DELTA_X = 0.128;

Far.prototype.setViewportX = function(newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
};

