var Background = function (game) {
	this.game = game;
	this.bgInfo = null;
	this.bgAmountX = 0;
	this.bgAmountY = 0;
	this.bgScale = 1;
	this.init = function () {
		this.bgInfo = this.game.assert.getAssert("bg_wood");
		this.bgAmountX = Math.floor(this.game.can.width / (this.bgInfo.spritesheet.width * this.bgScale)) + 1;
		this.bgAmountY = Math.floor(this.game.can.height / (this.bgInfo.spritesheet.height * this.bgScale)) + 1;
	}
	this.render = function () {
		for (var i = 0; i < this.bgAmountX; i++) {
			for (var j = 0; j < this.bgAmountY; j++) {
				this.game.assert.renderAssert("bg_wood", (this.bgInfo.spritesheet.width * this.bgScale) * i, (this.bgInfo.spritesheet.height * this.bgScale) * j, this.bgScale);
			}
		}
	}
	this.update = function (delta) {
		// body...
	}
} 