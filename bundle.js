(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,90);


(lib.glow = function() {
	this.initialize(img.glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,182);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// УА
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFRDIIAAgqIhkAAIgdAqIgiAAIAahaIAWAAQAIgSAKgeQAKgeALgkIApiCICMAAIhHD0IAaAAIgaBagAE5gEIgMAlIgPApQgJATgIARIAyAAIA5jEIglAAgAQ9ChIgXAAQgXAAgNgLQgMgJgEgQQgDgRAHgTIAJgjIA0AAIgNAqQgCAIACAEQADADAIAAIARAAQAHAAAFgDQADgFACgIIANgsQACgHgCgEQgEgEgIAAIgaAAIAOgwIAdAAQAIAAADgEQAFgFABgIIANgrQACgIgDgEQgCgEgJAAIgQAAQgHAAgEAEQgEAFgBAIIgMApIgyAAIALgpQAKgkASgPQASgPAdAAIAVAAQAWAAANALQANAJACAQQAEARgGATIgIAfQgGATgJALQgIALgNAFQAJAJACAMQACANgEAQIgJAhQgKAkgSAPQgSAPgbAAIgCAAgAN7ChIgdAAQgWAAgNgLQgMgJgEgQQgCgRAFgTIAuigQAJgkATgPQARgPAdAAIAcAAQAYAAAMALQANAJADAQQADARgGATIguCgQgJAkgSAPQgSAPgbAAIgCAAgAOWhUQgEAFgCAIIgwCnQgDAIADAEQADADAIAAIAWAAQAGAAAEgDQAEgFACgIIAwinQADgIgDgEQgCgEgJAAIgVAAQgIAAgDAEgAWfCeIBGj0IgxAAIAOgwICWAAIgOAwIgxAAIhGD0gAUQCeIAxigIgDAAIhkCgIgwAAIBTkkIAzAAIgxCgIADAAIBligIAvAAIhTEkgAKvCeIBGj0IguAAIhGD0Ig0AAIBUkkICXAAIhVEkgAGnCeIBUkkIBxAAIgNAwIg+AAIgVBKIA5AAIgOAwIg5AAIgWBKIA+AAIgNAwgAAbCeIAxigIgCAAIhkCgIgwAAIBTkkIAzAAIgxCgIACAAIBligIAwAAIhTEkgAi5CeIAxigIgCAAIhlCgIgxAAIBUkkIAzAAIgwCgIACAAIBkigIAwAAIhUEkgApLCeIBUkkIA0AAIhGD0IAqAAIBHj0IA0AAIhGD0IApAAIBHj0IA0AAIhUEkgAsQCeIBTkkIBPAAQAWAAANAKQAMAJAEARQADAQgGAUIgMAqQgKAjgSAOQgSAQgcAAIgnAAIggBxgAqtgEIAeAAQAHABAEgFQADgEACgIIAPgyQACgIgCgEQgDgEgIAAIgaAAgAu1CeIBUkkIBxAAIgOAwIg+AAIgUBKIA4AAIgNAwIg6AAIgVBKIA+AAIgOAwgAwjCeIBGj0IguAAIhGD0Ig0AAIBUkkICXAAIhUEkgA0qCeIAKg3IgpAAIgVA3Ig2AAIB1kkIBaAAIgxEkgA04A3IAhAAIAbiNIgIAAgA30CeIAjh6IgvAAIgiB6Ig0AAIBTkkIA1AAIgjB6IAuAAIAjh6IA1AAIhUEkgABriZIgYAAQgTgBgHgMQgGgMAEgSIABgEIAjAAIgCAJQgCAFACACQACACAFAAIAKAAQAFAAACgDQACgCAAgFIACgIIAjAAIgBAIQgGAVgLAJQgKAJgPAAIgCAAg");
	this.shape.setTransform(-19.2,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 2500 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8FF12").s().p("AiFF3Ig3AAQg5gBgggYQgggZgHgpQgIgpAOgyIBzmTQAZhZAtgmQAugmBHABIA2AAQA5ABAgAYQAgAZAIApQAIApgPAyIhyGTQgZBZgtAmQgsAlhFAAIgEAAgAgyjwQgKAKgFAUIh6GnQgFAUAGAJQAHAKAVAAIAoAAQATAAAJgLQAJgKAFgUIB5mnQAGgUgHgJQgHgKgUAAIgoAAQgSAAgJALgApgF3Ig3AAQg5gBgggYQgggZgIgpQgIgpAPgyIBymTQAZhZAugmQAtgmBIABIA3AAQA5ABAgAYQAgAZAHApQAIApgOAyIhzGTQgZBZgtAmQgsAlhGAAIgDAAgAoOjwQgJAKgFAUIh6GnQgGAUAHAJQAHAKAUAAIApAAQASAAAJgLQAKgKAFgUIB6mnQAFgUgHgJQgGgKgVAAIgoAAQgTAAgJALgAw2F3IgzAAQg5gBgggYQgggZgIgpQgIgpAPgyIAXhSIB9AAIgdBmQgGAUAHAJQAHAKAUAAIApAAQASAAAJgLQAKgKAFgUIA9jUQAFgUgGgJQgHgKgVAAIgjAAQgSAAgJALQgJAKgKATIh6AAIB3lxIFFAAIgkB/IjUAAIgtCLQAagXAagNQAbgMAZAAIAOAAQA7ABAZAqQAZApgSBFIg8DRQgYBZguAmQgsAlhFAAIgDAAgAV3FyIBXk1Ih0AAIhXE1IiEAAIDTrjICEAAIhYE1IB0AAIBYk1ICEAAIjTLjgAKeFyIDTrjIDDAAQA6ABAgAZQAfAYAIApQAIApgOAyIgfBrQgZBXgtAmQgtAnhIgBIhgAAIhTEfgAOXgnIBLAAQATAAAJgLQAJgKAGgUIAkh/QAGgUgHgJQgHgKgUAAIhDAAgAEcFyIDTrjIEtAAIgjB7IipAAIiwJogA7NFyIAih1QAMgqAUgiQAUgiAhggIDujlQALgLAIgLQAHgLAEgMIANgxQAGgUgHgJQgGgKgVAAIgiAAQgTAAgJALQgJAKgFAUIgSBAIiCAAIAShAQAZhZAtgmQAtgmBIABIAwAAQA6ABAgAYQAgAZAHApQAIApgOAyIgIAbQgJAggQAaQgQAbgbAaIj5DvQgLALgHAKQgHALgEAOIgEAMIDpAAIgjB/g");
	this.shape_1.setTransform(-6.3,-7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-83.1,350.5,164);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glow();
	this.instance.parent = this;
	this.instance.setTransform(-476.9,-277.6,2.504,3.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.9,-277.6,953.9,555.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РУ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARxHFIhHAAQhFgBgngeQgmgdgKgyQgJgxARg8ICLnoQAehrA2guQA3guBXABIBGAAQBFABAmAeQAnAdAJAyQAKAxgSA8IgsCdIicAAIA1i0QAHgZgJgLQgIgMgZAAIgzAAQgWAAgLANQgMANgGAYIiSH/QgHAZAIALQAIAMAZAAIAzAAQAXAAALgNQALgNAGgYIAwimICcAAIgvCmQgeBrg2AuQg2AthSAAIgGAAgAqKHFIhXAAQhFgBgngeQgmgdgKgyQgJgxARg8ICLnoQAehrA2guQA3guBXABIBWAAQBGABAmAeQAnAdAJAyQAKAxgSA8IiKHoQgfBrg2AuQg1AthTAAIgFAAgAo5kjQgMANgGAYIiSH/QgHAZAIALQAIAMAZAAIBAAAQAXAAALgNQALgNAGgYICTn/QAHgZgIgLQgJgMgZAAIhAAAQgWAAgLANgAzZG/IkNAAID/t9IGUAAIgqCVIj0AAIg6DGIBFAAQBFABAnAeQAmAeAKAwQAJAygSA8IgkCBQgeBrg3AuQg1AthUAAIgEAAgA0dEqIBUAAQAWAAALgNQAMgMAGgYIAsiZQAHgYgIgMQgIgLgZAAIhJAAgAGzG/IhfAAIAriVIAyAAQASACANgPQAOgPASgpIAFqjICcAAIgQFHIgUC5IAEAAIBIi+ICMlCICpAAIlGKIQgsBYgiA3QgjA2gmAYQgnAYg1AAIgCAAgAgXG/IBpl1IiMAAIhqF1IifAAID/t9ICfAAIhpF1ICLAAIBql1ICgAAIkAN9g");
	this.shape.setTransform(-58.8,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.9,-73.3,302.3,90.6);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8FF13").s().p("ABGTHID5tpItFAAIj6NpIrdAAMAK6gmNILeAAIj6NpINGAAID6tpILeAAMgK7AmNg");
	this.shape.setTransform(1554.4,421.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8FF13").s().p("AnATHQm0AAi1juQi3jwB6mrIEDt9QBelKDUieQDUifFVAAISgAAIjLK7IxWAAIksQXIRWAAIjHK7g");
	this.shape_1.setTransform(1324.3,421.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FF13").s().p("AuMTHIH07SIskAAIDHq7MAiyAAAIjHK7IqyAAInybSg");
	this.shape_2.setTransform(1111.7,421.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8FF13").s().p("ALETHIAAmZIwvAAIjoGZIsyAAMAWjgmNIVnAAMAAAAmNgAgaDcILeAAIAAsKIklAAg");
	this.shape_3.setTransform(823.9,421.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8FF13").s().p("AYaTHIGT12IqrMgInXAAIkCrzImBVJMgxaAAAMAK7gmNMAxkAAAIFTPSIM8vSIO3AAMgK7AmNg");
	this.shape_4.setTransform(429.4,421.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8FF13").s().p("ArLTHMAK7gmNILcAAMgK7AmNg");
	this.shape_5.setTransform(1081.1,142.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8FF13").s().p("ADNTHIjNqiInGAAIjAKiIreAAMAK7gmNIU5AAQGyAAC2DxQC2Dxh4GnIg/DcQhFDyiDCVQiDCVjHA9IDbLPgAkfgiIMZAAICToQIsVAAg");
	this.shape_6.setTransform(886.9,142.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8FF13").s().p("ALDTHIAAmZIwuAAIjoGZIsyAAMAWjgmNIVoAAMAAAAmNgAgaDcILdAAIAAsKIkkAAg");
	this.shape_7.setTransform(585.5,142.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8FF13").s().p("EgojATHMAK7gmNMA62AAAQGxAAC3DzQC3Dzh5GjIhGDxQheFJjUCeQjTCflWAAIthAAIi7KNgAOegiIMaAAICToQIsWAAg");
	this.shape_8.setTransform(238.9,142.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-118.2,-46.2,1917.2,648.8), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// уа
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AaBDOIghAAQgfAAgSgOQgRgNgFgXQgEgXAIgbIA/jdQAOgxAZgUQAYgVAoAAIAgAAQAfAAASAOQARANAEAXQAFAWgIAbIgUBIIhHAAIAYhSQADgLgEgFQgEgGgLABIgXAAQgKAAgGAFQgFAGgCALIhDDoQgDALAEAFQADAGAMAAIAXAAQAKgBAFgFQAFgGADgLIAWhLIBHAAIgWBLQgOAwgYAWQgZAUgmAAIgBAAgANUDOIgoAAQgfAAgSgOQgRgNgFgXQgEgXAIgbIA/jdQAOgxAZgUQAYgVAoAAIAnAAQAgAAARAOQASANAEAXQAEAWgIAbIg/DeQgNAwgZAWQgZAUgmAAIgBAAgAN4iEQgFAGgCALIhDDoQgDALAEAFQADAGAMAAIAdAAQAKgBAFgFQAFgGADgLIBCjoQAEgLgEgFQgEgGgLABIgdAAQgKAAgGAFgA66DOIgnAAQggAAgRgOQgSgNgEgXQgEgXAIgbIA/jdQANgxAZgUQAZgVAnAAIAoAAQAfAAASAOQARANAEAXQAFAWgIAbIg/DeQgOAwgZAWQgYAUgmAAIgCAAgA6ViEQgFAGgDALIhDDoQgDALAEAFQAEAGALAAIAdAAQAKgBAGgFQAFgGACgLIBDjoQADgLgEgFQgDgGgMABIgdAAQgKAAgFAFgAVCDLIgsAAIAUhEIAWAAQAJABAGgGQAGgHAIgTIADkyIBGAAIgHCUIgJBUIACAAIAghWIBAiSIBNAAIiUElQgUApgQAZQgPAYgSALQgRALgXAAIgCAAgAJHDLIh6AAIB0mVIC4AAIgTBDIhwAAIgaBaIAfAAQAgABARAOQASANAEAWQAEAWgHAbIgRA7QgOAxgZAUQgYAVgmAAIgCAAgAIoCHIAmAAQALAAAFgFQAFgGADgLIAUhFQADgLgEgGQgEgFgLAAIghAAgARxDLIAwipIhAAAIgwCpIhJAAIB1mVIBIAAIgwCpIBAAAIAwipIBIAAIh0GVgADfDLIBDjeIgDAAIiLDeIhDAAIB0mVIBGAAIhDDeIADAAICLjeIBDAAIh0GVgAhxDLIBhlSIhDAAIAThDIDNAAIgTBDIhDAAIhgFSgAkgDLIAOhNIg5AAIgdBNIhKAAIChmVIB9AAIhEGVgAkzA7IAuAAIAmjDIgMAAgAoyDLIBFjlIgDAAIhjChIghAAIgKihIgDAAIg+DlIhFAAIB0mVIBBAAIAODNIB8jNIBMAAIh0GVgAuaDLIBDjeIgCAAIiLDeIhDAAIB0mVIBGAAIhDDeIADAAICLjeIBCAAIh0GVgA02DLIB0mVIBrAAQAgAAARAOQASANAEAWQAEAYgIAbIgQA6QgOAwgZAVQgZAVgngBIg1AAIguCegAytgVIApAAQAKAAAFgGQAFgGADgLIAUhFQAEgLgEgFQgEgGgLAAIglAAgA33DLIBhlSIhCAAIAThDIDOAAIgUBDIhCAAIhhFSg");
	this.shape.setTransform(144.4,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8FF12").s().p("Ego8AJGIE5yKMBM/AAAIk4SKg");
	this.shape_1.setTransform(141.6,29);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-120.5,-29.2,524.1,116.3), null);


(lib.depozyt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(2);
	}
	this.frame_43 = function() {
		//this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(18).call(this.frame_61).wait(1));

	// СТАВКИ
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.4,86.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:-58.8,regY:-28.1,x:11.5,y:58.1,alpha:0.425},0).wait(1).to({x:7.8,alpha:0.569},0).wait(1).to({x:5.2,alpha:0.666},0).wait(1).to({x:3.4,alpha:0.738},0).wait(1).to({x:1.9,alpha:0.795},0).wait(1).to({x:0.7,alpha:0.841},0).wait(1).to({x:-0.3,alpha:0.878},0).wait(1).to({x:-1.1,alpha:0.908},0).wait(1).to({x:-1.7,alpha:0.933},0).wait(1).to({x:-2.2,alpha:0.953},0).wait(1).to({x:-2.6,alpha:0.968},0).wait(1).to({x:-2.9,alpha:0.981},0).wait(1).to({x:-3.2,alpha:0.989},0).wait(1).to({x:-3.3,alpha:0.995},0).wait(1).to({x:-3.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:55.4,y:86.2,alpha:1},0).to({_off:true},26).wait(18));

	// Layer_4
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.4,41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(43).to({_off:false,x:25.8,alpha:0},0).wait(1).to({regX:-6.9,regY:15.7,x:12.1,y:56.9,alpha:0.301},0).wait(1).to({x:9.2,alpha:0.431},0).wait(1).to({x:7,alpha:0.53},0).wait(1).to({x:5.2,alpha:0.611},0).wait(1).to({x:3.6,alpha:0.68},0).wait(1).to({x:2.3,alpha:0.738},0).wait(1).to({x:1.2,alpha:0.789},0).wait(1).to({x:0.2,alpha:0.833},0).wait(1).to({x:-0.6,alpha:0.87},0).wait(1).to({x:-1.4,alpha:0.902},0).wait(1).to({x:-2,alpha:0.929},0).wait(1).to({x:-2.5,alpha:0.952},0).wait(1).to({x:-2.9,alpha:0.969},0).wait(1).to({x:-3.2,alpha:0.983},0).wait(1).to({x:-3.4,alpha:0.993},0).wait(1).to({x:-3.5,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:3.4,y:41.2,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-3.9,349.4,121.6);


(lib.Button_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1)
	}
	this.frame_13 = function() {
		//this.parent.Depozyt_.play();
	}
	this.frame_83 = function() {
		this.gotoAndPlay(12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(70).call(this.frame_83).wait(1));

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,regX:141,regY:29,scaleY:0.15,x:169,y:29.1,alpha:0},0).wait(1).to({regX:141.6,regY:28.9,scaleY:0.52,x:157.5,y:29,alpha:0.433},0).wait(1).to({scaleY:0.66,x:152.6,alpha:0.606},0).wait(1).to({scaleY:0.77,x:149.2,y:28.9,alpha:0.727},0).wait(1).to({scaleY:0.85,x:146.7,alpha:0.819},0).wait(1).to({scaleY:0.9,x:144.7,alpha:0.888},0).wait(1).to({scaleY:0.95,x:143.3,alpha:0.938},0).wait(1).to({scaleY:0.98,x:142.4,alpha:0.973},0).wait(1).to({scaleY:0.99,x:141.8,alpha:0.993},0).wait(1).to({regX:141,regY:29,scaleY:1,x:141,y:29,alpha:1},0).wait(1).to({regX:141.6,regY:28.9,scaleX:1.01,scaleY:1.01,x:141.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:28.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:141.7},0).wait(1).to({regX:141,regY:29,scaleX:1.09,scaleY:1.09,x:141.1,y:29},0).wait(1).to({regX:141.6,regY:28.9,x:141.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:141.8,y:28.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:29},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:28.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:141.7,y:29},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:28.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:29},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:28.9},0).wait(1).to({regX:141,scaleX:1.06,scaleY:1.06,x:141.1,y:29},0).wait(1).to({regX:141.6,scaleX:1.05,scaleY:1.05,x:141.8},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:141.7},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:28.9},0).wait(1).to({regX:141,regY:29,x:141,y:29},0).wait(47));

	// Layer_3
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.9,9.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(1).to({scaleX:1.01,scaleY:1.02,alpha:0.153},0).wait(1).to({scaleX:1.05,scaleY:1.08,alpha:0.578},0).wait(1).to({scaleX:1.08,scaleY:1.13,alpha:0.907},0).wait(1).to({scaleX:1.09,scaleY:1.14,alpha:1},0).wait(1).to({y:9.6,alpha:0.996},0).wait(1).to({scaleX:1.09,scaleY:1.14,alpha:0.984},0).wait(1).to({scaleX:1.08,scaleY:1.13,alpha:0.963},0).wait(1).to({scaleX:1.08,scaleY:1.13,alpha:0.931},0).wait(1).to({scaleX:1.08,scaleY:1.12,alpha:0.886},0).wait(1).to({scaleX:1.07,scaleY:1.12,alpha:0.829},0).wait(1).to({scaleX:1.07,scaleY:1.11,alpha:0.758},0).wait(1).to({scaleX:1.06,scaleY:1.09,alpha:0.675},0).wait(1).to({scaleX:1.05,scaleY:1.08,alpha:0.584},0).wait(1).to({scaleX:1.04,scaleY:1.07,alpha:0.492},0).wait(1).to({scaleX:1.03,scaleY:1.06,alpha:0.402},0).wait(1).to({scaleX:1.03,scaleY:1.04,alpha:0.321},0).wait(1).to({scaleX:1.02,scaleY:1.03,alpha:0.249},0).wait(1).to({scaleX:1.02,scaleY:1.03,alpha:0.188},0).wait(1).to({scaleX:1.01,scaleY:1.02,alpha:0.138},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.097},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.064},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.039},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.021},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.009},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.002},0).wait(1).to({y:9.7,alpha:0},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-29.2,524.1,116.3);


// stage content:
(lib._980x90R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Button_anim();
	this.instance.parent = this;
	this.instance.setTransform(498.5,36.6,0.32,0.32,0,0,0,0.8,1.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).wait(126));

	// fon3.jpg
	this.instance_1 = new lib.Logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.9,45.7,0.05,0.05,0,0,0,841.5,278.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).wait(126));

	// Layer_3
	this.Depozyt_ = new lib.depozyt();
	this.Depozyt_.name = "Depozyt_";
	this.Depozyt_.parent = this;
	this.Depozyt_.setTransform(599.2,42.1,0.43,0.43,0,0,0,86.4,44.2);

	this.timeline.addTween(cjs.Tween.get(this.Depozyt_).to({_off:true},83).wait(126));

	// Layer_2
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,0,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},83).wait(126));

	// Layer_6
	this.instance_3 = new lib.fon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-723,0,1.02,1.02);

	this.instance_4 = new lib.fon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-415,0,1.02,1.02);

	this.instance_5 = new lib.fon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(209));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("EhXpAMCIAA4DMCvTAAAIAAYDg");
	this.shape.setTransform(451,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,19.1,1743,154);
// library properties:
lib.properties = {
	id: '4AF8B7DA9C18FB40802618D604DE8C61',
	width: 980,
	height: 90,
	fps: 28,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/fon.jpg?1632751684831", id:"fon"},
		{src:"images/glow.png?1632751684831", id:"glow"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4AF8B7DA9C18FB40802618D604DE8C61'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;