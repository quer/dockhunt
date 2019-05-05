var TargetContainer = function (game) {
	this.game = game;
	this.asserts = [];
	this.slots = 0;
	this.targets = [];
	this.init = function () {
		var gameAssert = this.game.assert;
		this.assert.push(gameAssert.getAssert("target_colored"));
		this.assert.push(gameAssert.getAssert("target_red1"));
		this.assert.push(gameAssert.getAssert("target_red2"));
		this.assert.push(gameAssert.getAssert("target_red3"));
		this.assert.push(gameAssert.getAssert("target_white"));
		this.slots = Math.floor(this.game.can.width / 150);

	}
	this.render = function () {
		for (var i = 0; i < this.targets.length; i++) {
			this.targets[i].render();
		}
	}
	this.update = function (delta) {
		for (var i = 0; i < this.targets.length; i++) {
			this.targets[i].update(delta)
		}
	}
	this.addTarget = function () {
		var freeSlotIndex = this.getFreeSlot();
		if()
		this.targets.push()
	}
	this.getFreeSlot = function () {
		if(this.targets.length >= this.slots){
			return null;
		}
		return this.targets.length;
	}
}