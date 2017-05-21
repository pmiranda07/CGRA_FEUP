/**
 * MyExplosion
 * @constructor
 */
function MyExplosion(scene,x,y,z) {
	CGFobject.call(this, scene);

	this.sphere = new myLamp(this.scene,20,10);

    this.x=x;
    this.y=y;
    this.z=z;
	this.s=0.8;
	this.lastUpdate=-1;
	this.inc=0;
	this.times=0;

	//fire
	this.fire = new CGFappearance(this.scene);
	this.fire.setAmbient(0.3,0.3,0.3,1);
	this.fire.setDiffuse(0.8,0.8,0.8,1);
	this.fire.setSpecular(0,0.1,0.1,1);
	this.fire.setShininess(90);
	this.fire.loadTexture("../resources/images/fire.png");



};

MyExplosion.prototype = Object.create(CGFobject.prototype);
MyExplosion.prototype.constructor = MyExplosion;

MyExplosion.prototype.display = function() {
	// spheres

this.scene.pushMatrix();

    this.scene.translate(this.x,this.y,this.z);
    this.scene.scale(this.s,this.s,this.s);

	this.fire.apply();
	this.scene.pushMatrix();
	this.scene.rotate(-90*degToRad,1,0,0);
	this.sphere.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.rotate(90*degToRad,1,0,0);
	this.sphere.display();
	this.scene.popMatrix();

	
this.scene.popMatrix();
}

MyExplosion.prototype.update = function(currTime) {

if (this.lastUpdate == -1) {
		this.lastUpdate = currTime;
		this.inc=0;
	}
	else {
		var diff = currTime - this.lastUpdate;
		this.lastUpdate = currTime;
		this.inc = 4*diff/1000;
		this.times+=1;
	}

    if(this.times <= 4)
		this.s += this.inc;
	else
	   this.scene.explodedisp = 0;
}