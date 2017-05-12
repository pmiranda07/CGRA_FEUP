var degToRad = Math.PI / 180.0;

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
	this.setUpdatePeriod(100);

	this.Luz1=true;
	this.Luz2=true;
	this.Luz3=true;
	this.Luz4=true;
	this.Pausa=false;
	this.speed=3;
	this.submarineAppearances = [];
	this.submarineAppearances.push("../resources/images/rusty.png");
	this.submarineAppearances.push("../resources/images/yellow.png");
	this.submarineAppearances.push("../resources/images/military.png");
	this.submarineAppearances.push("../resources/images/beatles.png");


	this.currSubmarineAppearance = 'Militar';
	this.submarineAppearanceList = [
	'Militar', 'Beatles', 'Rusty'
	];


	this.gl.clearColor(0.0, 0.0, 1.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.ocean = new MyQuad(this,0,10,0,12);
	this.submarine = new MySubmarine(this, 8, 0, 8, 180*degToRad);
	this.cylinder = new MyCylinder(this,20,20);
	this.clock = new MyClock(this);

	//Materials

	//ocean

  	this.oceanAppearence = new CGFappearance(this);
  	this.oceanAppearence.setAmbient(0.3,0.3,0.3,1);
	this.oceanAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.oceanAppearence.setSpecular(0.2,0.2,0.2,1);
	this.oceanAppearence.setShininess(10);
	this.oceanAppearence.loadTexture("../resources/images/water.png");
	this.oceanAppearence.setTextureWrap("REPEAT","REPEAT");

	//rusty 

	this.rusty = new CGFappearance(this);
	this.rusty.setAmbient(0.3,0.3,0.3,1);
	this.rusty.setDiffuse(0.7,0.7,0.7,1);
	this.rusty.setSpecular(0.5,0.5,0.5,1);	
	this.rusty.setShininess(120);
	this.rusty.loadTexture("../resources/images/rusty.png");

	

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

	

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	//ocean
	this.pushMatrix();
		this.oceanAppearence.apply();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.ocean.display();
	this.popMatrix();

	//submarine

	
	this.pushMatrix();
		this.submarine.display();
	this.popMatrix();

	//cylinder

	this.pushMatrix()
		this.rusty.apply();
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.translate(8,0,0);
		this.scale(0.2,0.2,5);
		this.cylinder.display();
	this.popMatrix();

	//clock

	this.pushMatrix();
		this.translate(0.8,-2.2,-0.5);
		this.scale(1,1,2);
    	this.clock.display();
    this.popMatrix();	


	// ---- END Primitive drawing section


};

LightingScene.prototype.update=function(currTime)
{
	this.submarine.update(currTime);
	if (this.Luz1)
		this.lights[0].enable();
	else
		this.lights[0].disable();
	
	if (this.Luz2)
		this.lights[1].enable();
	else
		this.lights[1].disable();
	
	if (this.Luz3)
		this.lights[2].enable();
	else
		this.lights[2].disable();
	
	if (this.Luz4)
		this.lights[3].enable();
	else
		this.lights[3].disable();

	
	if (!this.Pausa)
		this.clock.update(currTime);


};


LightingScene.prototype.Options = function ()
{
	
	console.log("Doing something..."); 

};