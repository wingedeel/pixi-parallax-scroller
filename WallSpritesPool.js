/*
A typical wall span consists of three major parts:

A front edge
A mid section
A back edge

A wall’s mid section is made from the following two parts continuously chained together:

A Window
A Wall decoration

There are 8 slice types:
1. Front Edge
2. Back Edge
3. Window - lit
4. Window - unlit
5. Wall decoration - 1
6. Wall decoration - 2
7. Wall decoration - 3
8. Step

Dimensions. Each slice is 256 pixels high (and 64 width?)
*/

function WallSpritesPool() {
  this.createWindows();
  this.createDecorations();
  this.createFrontEdges();
  this.createBackEdges();
  this.createSteps();
}

/* 	--------------------
	Public Methods
	-------------------- */
WallSpritesPool.prototype.borrowWindow = function() {
  return this.windows.shift();
};


WallSpritesPool.prototype.returnWindow = function(sprite) {
  this.windows.push(sprite);
};

WallSpritesPool.prototype.borrowDecoration = function() {
  return this.decorations.shift();
};
	
WallSpritesPool.prototype.returnDecoration = function(sprite) {
  this.decorations.push(sprite);
};

WallSpritesPool.prototype.borrowFrontEdge = function() {
  return this.frontEdges.shift();
};

WallSpritesPool.prototype.returnFrontEdge = function(sprite) {
  this.frontEdges.push(sprite);
};

WallSpritesPool.prototype.borrowBackEdge = function() {
  return this.backEdges.shift();
};

WallSpritesPool.prototype.returnBackEdge = function(sprite) {
  this.backEdges.push(sprite);
};

WallSpritesPool.prototype.borrowStep = function() {
  return this.steps.shift();
};

WallSpritesPool.prototype.returnStep = function(sprite) {
  this.steps.push(sprite);
};

/* 	--------------------
	Create 
	-------------------- */
WallSpritesPool.prototype.createWindows = function() {
  this.windows = [];
  /*
  adds 12 window sprites to your object pool. 
  The first 6 sprites represent our lit windows (window_01) 
  whereas the other 6 sprites represent our unlit windows (window_02).
  */
  this.addWindowSprites(6, "window_01");
  this.addWindowSprites(6, "window_02");

  /* 
  When sprites are retrieved from the object pool, 
  they will be taken from the front of the array. 
  Let's shuffle them.
  */
  this.shuffle(this.windows);
};


WallSpritesPool.prototype.createDecorations = function() {
  this.decorations = [];

  this.addDecorationSprites(6, "decoration_01");
  this.addDecorationSprites(6, "decoration_02");
  this.addDecorationSprites(6, "decoration_03");

  this.shuffle(this.decorations);
};


WallSpritesPool.prototype.createFrontEdges = function() {
  this.frontEdges = [];

  this.addFrontEdgeSprites(2, "edge_01");
  this.addFrontEdgeSprites(2, "edge_02");

  this.shuffle(this.frontEdges);
};

WallSpritesPool.prototype.createBackEdges = function() {
  this.backEdges = [];

  this.addBackEdgeSprites(2, "edge_01");
  this.addBackEdgeSprites(2, "edge_02");

  this.shuffle(this.backEdges);
};

WallSpritesPool.prototype.createSteps = function() {
  this.steps = [];
  this.addStepSprites(2, "step_01");
};


/* 	--------------------
	Add 
	-------------------- */
WallSpritesPool.prototype.addWindowSprites = function(amount, frameId) {
  for (var i = 0; i < amount; i++)
  {
    var sprite = PIXI.Sprite.fromFrame(frameId);
    this.windows.push(sprite);
  }
};


WallSpritesPool.prototype.addDecorationSprites = function(amount, frameId) {
  for (var i = 0; i < amount; i++)
  {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameId));
    this.decorations.push(sprite);
  }
};


WallSpritesPool.prototype.addFrontEdgeSprites = function(amount, frameId) {
  for (var i = 0; i < amount; i++)
  {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameId));
    this.frontEdges.push(sprite);
  }
};

WallSpritesPool.prototype.addBackEdgeSprites = function(amount, frameId) {
  for (var i = 0; i < amount; i++)
  {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameId));
    sprite.anchor.x = 1;
    sprite.scale.x = -1;
    this.backEdges.push(sprite);
  }
};

WallSpritesPool.prototype.addStepSprites = function(amount, frameId) {
  for (var i = 0; i < amount; i++)
  {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameId));
    sprite.anchor.y = 0.25;
    this.steps.push(sprite);
  }
};

/* 	--------------------
	Shuffle 
	-------------------- */
WallSpritesPool.prototype.shuffle = function(array) {
  var len = array.length;
  var shuffles = len * 3;
  for (var i = 0; i < shuffles; i++)
  {
    var wallSlice = array.pop();
    var pos = Math.floor(Math.random() * (len-1));
    array.splice(pos, 0, wallSlice);
  }
};



