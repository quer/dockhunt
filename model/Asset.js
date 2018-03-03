var Asset = function (game) {
	this.game = game;
	this.loadet = false;
	this.assert = [];
	this.init = function (callback) {
		this.loadAssert(spritesheet_hud, function() {
			this.loadAssert(spritesheet_stall, function()  {
				this.loadAssert(spritesheet_objects, function () {
					this.loadet = true;
					callback();
				}.bind(this));
			}.bind(this));
		}.bind(this));
	}
	this.loadAssert = function (assertObj, callback) {
		this.loadImage("Spritesheets/" + assertObj.TextureAtlas.imagePath, function (image) {
			this.assert.push({image: image, spritesheet: assertObj.TextureAtlas.SubTexture});
			callback();
		}.bind(this))
	}
	this.loadImage = function (image, callback) {
		var base_image = new Image();
		base_image.src = image;

		base_image.onload = function(){
		    callback(base_image);
  		}
	}
	this.renderAssert = function (name, x, y, scale) {
		if(this.loadet){
			var assert = this.getAssert(name);
			if(assert != null){
				this.game.ctx.drawImage(assert.image, assert.spritesheet.x, assert.spritesheet.y, assert.spritesheet.width, assert.spritesheet.height, x, y, assert.spritesheet.width * scale, assert.spritesheet.height * scale);
			}else{
				console.log("assert error: " + name);
			}
		}
	}
	this.getAssert = function (name) {
		for (var i = 0; i < this.assert.length; i++) {
			var assert = this.assert[i];
			for (var j = 0; j < assert.spritesheet.length; j++) {
				if(assert.spritesheet[j].name == name){
					return { image: assert.image, spritesheet: assert.spritesheet[j] };
				}
			}
		}
		return null;
	}
}