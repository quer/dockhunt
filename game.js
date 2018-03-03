var can = document.getElementById('game');
var	ctx = can.getContext('2d');
var Game = function (can, ctx) {
	this.ctx = ctx;
	this.can = can;
	this.engine = new Engine(can, ctx);
	this.assert = new Asset(this);
	this.init = function () {
		this.engine.init(this);
		this.assert.init(function () {
			console.log("assert done!");
		});
	}
	this.update = function (delta) {
		// body...
	}
	this.render = function () {
		// body...
	}
	this.start = function () {
		this.engine.start();
	}
	this.stop = function () {
		this.engine.stop();
	}
}
var game = new Game(can, ctx);
game.init();