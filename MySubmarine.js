/**
 * MySubmarine
 * @constructor
 */
 function MySubmarine(scene) {
 	CGFobject.call(this, scene);

 	this.Body = new MyCylinder(this.scene, 20, 10);
 	this.FrontTop = new myLamp(this.scene, 20, 10);
    this.BackTop = new myLamp(this.scene, 20, 10);
    this.Cabine = new MyCylinder(this.scene, 20, 10);
    this.CabineTop = new MyCircle(this.scene, 20);
    this.Tube = new MyCylinder(this.scene, 20, 10);
    this.HorizontalTube = new MyCylinder(this.scene, 20, 10);
    this.Helice = new MyCylinder(this.scene, 20, 10);
    this.Sphere = new myLamp(this.scene, 20,10);

 };

 MySubmarine.prototype = Object.create(CGFobject.prototype);
 MySubmarine.prototype.constructor = MySubmarine;

 MySubmarine.prototype.display = function() {

 	this.scene.pushMatrix();
 	this.scene.translate(8, 0, 5);
 	this.scene.scale(0.75,1,5);
 	this.Body.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,0,1,0);
 	this.scene.translate(-8, 0, -5);
 	this.scene.scale(0.75, 1, 1);
 	this.FrontTop.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(8, 0, 10);
 	this.scene.scale(0.75, 1, 1);
 	this.BackTop.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,1,0,0);
 	this.scene.translate(8, 7, -1.6);
 	this.scene.scale(0.70,1.1,1.6);
 	this.Cabine.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(-90*degToRad,1,0,0);
 	this.scene.translate(8, -7, 1.6);
 	this.scene.scale(0.70,1.1,1.61);
 	this.CabineTop.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,1,0,0);
 	this.scene.translate(8, 6.5, -2.5);
 	this.scene.scale(0.1,0.1,1);
 	this.Tube.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(8, 2.42, 6.19);
 	this.scene.scale(0.1,0.1,0.4);
 	this.Tube.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.3, -6.6, 9.5);
 	this.scene.scale(0.4,0.4,0.4);
 	this.Helice.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.3, -9.36, 9.5);
 	this.scene.scale(0.4,0.4,0.4);
 	this.Helice.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(6.60,-0.3,-9.6);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,1,0,0);
 	this.scene.translate(6.6,0.3,-9.6);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

    this.scene.pushMatrix();
 	this.scene.translate(9.4,-0.3,-9.6);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,1,0,0);
 	this.scene.translate(9.4,0.3,-9.6);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix(); 
 }
