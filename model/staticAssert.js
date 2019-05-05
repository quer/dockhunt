var StaticAssert = function (game) {
	this.game = game;
	this.layer = {
		background: 0,
		bush: 1,
		forground: 2
	}
	this.background = new Background(game);
	this.grassWall = new GrassWall(game);
	this.curtain = new Curtain(game);
	this.init = function () {
		//background
		this.background.init();
		this.grassWall.init();
		this.curtain.init();
	}

	this.render = function (layer) {
		var assert = this.game.assert;
		if(layer == this.layer.background){
			this.background.render();

		}else if(layer == this.layer.bush){
			this.grassWall.render();
		
		}else if(layer == this.layer.forground){
			this.curtain.render();
		}
	}
	this.update = function (delta) {
		this.background.update(delta);
		this.grassWall.update(delta);
		this.curtain.update(delta);
	}
}