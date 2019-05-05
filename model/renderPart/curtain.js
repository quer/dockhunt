var Curtain = function (game) {
	this.game = game;
	this.curtain_straightTotalAmount = 0;
	this.curtain_straight = null;
	this.curtain_straightWidth = 0; 
	this.init = function () {
		this.curtain_straight = this.game.assert.getAssert("curtain_straight");
		this.curtain_straightWidth = parseInt(this.curtain_straight.spritesheet.width);
		this.curtain_straightTotalAmount = Math.floor(this.game.can.width / this.curtain_straightWidth) + 1;
	}
	this.render = function () {
		this.game.assert.renderAssert("curtain", -20, -20, 1.5);
		this.game.assert.renderAssert("curtain_rope", -20, 290,  1.5);
		for (var i = 0; i < this.curtain_straightTotalAmount; i++) {
			this.game.assert.renderAssert("curtain_straight", i * this.curtain_straightWidth, 0,  1);
			
		}
	}
	this.update = function (delta) {
		// body...
	}
}