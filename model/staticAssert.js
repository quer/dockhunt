var StaticAssert = function (game) {
	this.game = game;
	this.layer = {
		background: 0,
		forground: 1
	}
	this.backgroundInfo = {};
	this.init = function () {
		var bgScale = 1;
		var bgInfo = this.game.assert.getAssert("bg_wood");
		var bgAmountX = Math.floor(this.game.can.width / (bgInfo.spritesheet.width * bgScale)) + 1;
		var bgAmountY = Math.floor(this.game.can.height / (bgInfo.spritesheet.height * bgScale)) + 1;
		this.backgroundInfo = {
			bgInfo: bgInfo,
			bgAmountX: bgAmountX,
			bgAmountY: bgAmountY,
			bgScale: bgScale
		}
	}

	this.render = function (layer) {
		var assert = this.game.assert;
		if(layer == this.layer.background){
			for (var i = 0; i < this.backgroundInfo.bgAmountX; i++) {
				for (var j = 0; j < this.backgroundInfo.bgAmountY; j++) {
					this.game.assert.renderAssert("bg_wood", (this.backgroundInfo.bgInfo.spritesheet.width * this.backgroundInfo.bgScale) * i, (this.backgroundInfo.bgInfo.spritesheet.height * this.backgroundInfo.bgScale) * j, this.backgroundInfo.bgScale);
				}
			}
		}else if(layer == this.layer.forground){
			
		}
	}
	this.update = function (delta) {
		// body...
	}
}