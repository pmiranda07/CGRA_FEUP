/**
 * MyRudder
 * @constructor
 */
function MyRudder(scene) {
	CGFobject.call(this, scene);

	this.trapezio = new Trapezio(this.scene);
	this.quad = new MyQuad(this.scene);

};

MyRudder.prototype = Object.create(CGFobject.prototype);
MyRudder.prototype.constructor = MyRudder;

MyRudder.prototype.display = function() {
	// front face
	this.scene.pushMatrix();
	this.scene.translate(0, 0, 0.5);
	this.trapezio.display();
	this.scene.popMatrix();

	// back face
	this.scene.pushMatrix();
	this.scene.rotate(180 * degToRad, 1, 0, 0);
	this.scene.rotate(180*degToRad,0,0,1);
	this.scene.translate(0, 0, 0.5);
	this.trapezio.display();
	this.scene.popMatrix();

	// top face
	this.scene.pushMatrix();
	this.scene.rotate(-90 * degToRad, 1, 0, 0);
	this.scene.translate(0, 0, 0.5);
	this.quad.display();
	this.scene.popMatrix();

	// down face
	this.scene.pushMatrix();
	this.scene.scale(2,1,1);
	this.scene.rotate(90 * degToRad, 1, 0, 0);
	this.scene.translate(0, 0, 0.5);
	this.quad.display();
	this.scene.popMatrix();

	// right face
	this.scene.pushMatrix();
	this.scene.rotate(-90 * degToRad, 0, 1, 0);
	this.scene.rotate(-27 * degToRad,1,0,0);
	this.scene.translate(0, -0.333, 0.65);
	this.scene.scale(1,1.12,1);
	this.quad.display();
	this.scene.popMatrix();

	// left face
	this.scene.pushMatrix();
	this.scene.rotate(90 * degToRad, 0, 1, 0);
	this.scene.rotate(-27 * degToRad,1,0,0);
	this.scene.translate(0, -0.333, 0.65);
	this.scene.scale(1,1.12,1);
	this.quad.display();
	this.scene.popMatrix();
};
