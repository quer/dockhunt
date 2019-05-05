var GrassWall = function (game) {
	this.game = game;
	this.grassTotalAmount = 0;
	this.grass1Info = null;
	this.grass2Info = null;
	this.grass1Width = 0; 
	this.movePixels = 0;
	this.init = function () {
		this.grass1Info = this.game.assert.getAssert("grass1");
		this.grass2Info = this.game.assert.getAssert("grass2");
		this.movePixels = parseInt(this.grass1Info.spritesheet.width) + parseInt(this.grass2Info.spritesheet.width);
		this.grassTotalAmount = Math.floor(this.game.can.width / this.movePixels) + 1;
		this.grass1Width = parseInt(this.grass1Info.spritesheet.width);
	}
	this.render = function () {
		var movePixel;
		for (var i = 0; i < this.grassTotalAmount; i++) {
			movePixel = this.movePixels * i;
			this.game.assert.renderAssert("grass1", movePixel, 300, 1);
			console.log(this.grass1Info.spritesheet.width);
			this.game.assert.renderAssert("grass2", movePixel + this.grass1Width, 284, 1);
		}
	}
	this.update = function (delta) {
		// body...
	}
}