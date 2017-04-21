/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

	this.lastUpdate = -1;

	
	this.handleAppearence = new CGFappearance(this.scene);
	this.handleAppearence.setAmbient(0,0,0,0);
	this.handleAppearence.setDiffuse(0,0,0,0);
	this.handleAppearence.setSpecular(0,0,0,0);	
	this.handleAppearence.setShininess(0);

	this.secAppearence = new CGFappearance(this.scene);
	this.secAppearence.setAmbient(0.3,0.3,0.3,1);
	this.secAppearence.setDiffuse(1,0,0,1);
	this.secAppearence.setSpecular(0.5,0.5,0.5,1);	
	this.secAppearence.setShininess(10);
	

	this.cylinder = new MyCylinderWithTops(this.scene);
	this.cylinder.initBuffers();


	this.hourApp = new MyClockHand(this.scene, 90);
	this.hourApp.initBuffers();

	this.minuteApp = new MyClockHand(this.scene,180);
	this.minuteApp.initBuffers();
		
	this.secondApp = new MyClockHand(this.scene, 270);
	this.secondApp.initBuffers();
	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 	var degToRad = Math.PI / 180.0;


    this.scene.pushMatrix();
	this.scene.translate(7.2,7.2,0.1);
	this.scene.scale(0.7,0.7,0.3);
	this.cylinder.display();
	this.scene.popMatrix();
	this.scene.pushMatrix();

	this.handleAppearence.apply();
	
	this.scene.pushMatrix();
	this.scene.translate(7.2,7.2,0.4);
	this.scene.rotate(this.hourApp.angle * degToRad, 0, 0, 1);
	this.scene.pushMatrix();
	this.scene.scale(1,0.3,1);
	this.hourApp.display();
	this.scene.popMatrix();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(7.2,7.2,0.4);
	this.scene.rotate(this.minuteApp.angle * degToRad, 0, 0, 1);
	this.scene.pushMatrix();
	this.scene.scale(0.7,0.4,0.7);
	this.minuteApp.display();
	this.scene.popMatrix();
	this.scene.popMatrix();

	this.secAppearence.apply();

	this.scene.pushMatrix();
	this.scene.translate(7.2,7.2,0.4);
	this.scene.rotate(this.secondApp.angle * degToRad, 0, 0, 1);
	this.scene.pushMatrix();
	this.scene.scale(0.6,0.55,0.6);
	this.secondApp.display();
	this.scene.popMatrix();
    this.scene.popMatrix();
	
};

MyClock.prototype.update = function(currTime) {
	if (this.lastUpdate == -1) {
		this.lastUpdate = currTime;
		inc = 0.6;
	}
	else {
		var diff = currTime - this.lastUpdate;
		this.lastUpdate = currTime;
		inc = diff * (360 / (60 * 1000));
	}

	this.secondApp.setAngle(this.secondApp.angle - inc);
	this.minuteApp.setAngle(this.minuteApp.angle - inc / 60);
	this.hourApp.setAngle(this.hourApp.angle - inc / 3600);
};