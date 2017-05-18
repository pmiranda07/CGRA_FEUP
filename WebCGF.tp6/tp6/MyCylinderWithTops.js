/**
 * MyCylinderWithTops
 * @constructor
 */
function MyCylinderWithTops(scene) {
	CGFobject.call(this, scene);

	this.MyCylinder = new MyCylinder(this.scene,12,1);
	this.MyCylinder.initBuffers();

	this.MyCircle = new MyCircle(this.scene,12);
	this.MyCircle.initBuffers();

	this.clock = new CGFappearance(this.scene);
	this.clock.setAmbient(0.3,0.3,0.3,1);
	this.clock.setDiffuse(0.8,0.8,0.8,1);
	this.clock.setSpecular(0.2,0.2,0.2,1);
	this.clock.setShininess(70);
	this.clock.loadTexture("../resources/images/clock.png");


};

MyCylinderWithTops.prototype = Object.create(CGFobject.prototype);
MyCylinderWithTops.prototype.constructor = MyCylinderWithTops;

MyCylinderWithTops.prototype.display = function() {

	//Cylinder
	this.scene.pushMatrix();
	this.MyCylinder.display();
	this.scene.popMatrix();


	// Circle
	this.clock.apply();
	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.MyCircle.display();
	this.scene.popMatrix();

}
