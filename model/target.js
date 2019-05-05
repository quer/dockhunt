var Target = function (game, assert, index) {
	this.game = game;
	this.assert = assert;
	this.index = index;
	this.render = function () {
		this.game.assert.renderAssert(assert.spritesheet.name, (this.index * 150) + 75, 290,  1);
	}
	this.update = function (delta) {
		// body...
	}
}