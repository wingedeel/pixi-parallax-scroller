function Scroller(stage){
	// Create a 'far' layer
	this.far = new Far();
  	stage.addChild(this.far);

  	// Create a 'mid' layer
  	this.mid = new Mid();
  	stage.addChild(this.mid);

  	this.viewportX = 0;
}

Scroller.prototype.setViewportX = function(viewportX) {
	this.viewportX = viewportX;
  	this.far.setViewportX(viewportX);
  	this.mid.setViewportX(viewportX);
};

Scroller.prototype.getViewportX = function() {
  return this.viewportX;
};

Scroller.prototype.moveViewportXBy = function(units) {
  var newViewportX = this.viewportX + units;
  this.setViewportX(newViewportX);
};