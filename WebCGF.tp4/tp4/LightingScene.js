var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();
	this.enableTextures(true);

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wallD = new Plane(this);
	this.wallE = new MyQuad(this,-0.5,1.5,-0.5,1.5);
	this.floor = new MyQuad(this,0,10,0,12);
	this.lamp = new myLamp(this,20,20);
	this.cylinder1 = new MyCylinder(this,20,20);
	this.cylinder2 = new MyCylinder(this,20,20);
	
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setAmbient(0.3,0.3,0.3,1);
	this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.slidesAppearance.setSpecular(0.2,0.2,0.2,1);
	this.slidesAppearance.setShininess(10);
	this.slidesAppearance.loadTexture("../resources/images/slides.png");

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setAmbient(0.3,0.3,0.3,1);
	this.boardAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.boardAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.boardAppearance.setShininess(120);
	this.boardAppearance.loadTexture("../resources/images/board.png");

	//walls

	this.materialWall= new CGFappearance(this);
	this.materialWall.setAmbient(0.3,0.3,0.3,1);
	this.materialWall.setDiffuse(1,0,0,1);
	this.materialWall.setSpecular(0.5,0.5,0.5,1);
	this.materialWall.setShininess(10);

  	//floor

  	this.floorAppearence = new CGFappearance(this);
  	this.floorAppearence.setAmbient(0.3,0.3,0.3,1);
	this.floorAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.floorAppearence.setSpecular(0.2,0.2,0.2,1);
	this.floorAppearence.setShininess(10);
	this.floorAppearence.loadTexture("../resources/images/floor.png");
	this.floorAppearence.setTextureWrap("REPEAT","REPEAT");

	//window
	this.windowAppearence = new CGFappearance(this);
  	this.windowAppearence.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.windowAppearence.setSpecular(0.2,0.2,0.2,1);
	this.windowAppearence.setShininess(10);
	this.windowAppearence.loadTexture("../resources/images/window.png");
	this.windowAppearence.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	
	//cylinder
	this.marmore = new CGFappearance(this);
	this.marmore.setAmbient(0.3,0.3,0.3,1);
	this.marmore.setDiffuse(0.7,0.7,0.7,1);
	this.marmore.setSpecular(0.5,0.5,0.5,1);	
	this.marmore.setShininess(120);
	this.marmore.loadTexture("../resources/images/marmore.png");


};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true);

	
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[3].setVisible(true);

	this.lights[4].setPosition(0.1,4.5,6.5,1);
	this.lights[4].setVisible(false);

	this.lights[0].setAmbient(0.3, 0.3, 0.3, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setQuadraticAttenuation(0);
	this.lights[2].enable();

	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setQuadraticAttenuation(1);
	this.lights[3].enable();

	this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setLinearAttenuation(0);
	this.lights[4].setConstantAttenuation(0);
	this.lights[4].setQuadraticAttenuation(1);
	this.lights[4].enable();

};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.floorAppearence.apply();
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.windowAppearence.apply();
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.wallE.display();
	this.popMatrix();

	// Plane Wall
	this.materialWall.apply();
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wallD.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//cylinder1
	this.marmore.apply();
	this.pushMatrix()
		this.rotate(90 * degToRad, 1, 0, 0);
		this.scale(1,1,8);
		this.translate(3,12,-1);
		this.cylinder1.display();
	this.popMatrix();

	//cylinder2
	this.pushMatrix()
		this.rotate(90 * degToRad, 1, 0, 0);
		this.scale(1,1,8);
		this.translate(12,12,-1);
		this.cylinder2.display();
	this.popMatrix();

	//lamp
	this.pushMatrix()
		this.rotate(90 * degToRad, 1, 0, 0);
		this.scale(1,1,1);
		this.translate(6,6,-8);
		this.lamp.display();
	this.popMatrix();


	// ---- END Primitive drawing section
};
