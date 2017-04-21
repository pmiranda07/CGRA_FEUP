/**
 * MySubmarine
 * @constructor
 */
 function MySubmarine(scene) {
 	CGFobject.call(this, scene);

 	this.MyTriangle = new MyTriangle(this.scene);
 	this.MyTriangle.initBuffers();


 };

 MySubmarine.prototype = Object.create(CGFobject.prototype);
 MySubmarine.prototype.constructor = MySubmarine;

 MySubmarine.prototype.display = function() {

 	this.scene.pushMatrix();
 	this.MyTriangle.display();
 	this.scene.popMatrix();


 }
