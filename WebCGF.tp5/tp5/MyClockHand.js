/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene,angle) {
 	CGFobject.call(this, scene);
 	
 	this.angle=angle;

 	this.MyCylinder = new MyCylinder(this.scene,12,1);


 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.display = function() {

 	this.scene.pushMatrix();
 	this.scene.rotate(-90 * degToRad, 1, 0, 0)
 	this.scene.scale(0.02, 0.02, 1);
 	this.MyCylinder.display();
 	this.scene.popMatrix();


 }
 MyClockHand.prototype.setAngle=function(angle)
 {
    this.angle=angle;
 }


