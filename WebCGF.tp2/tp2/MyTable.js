/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();
  //wood
  this.materialtop= new CGFappearance(this.scene);
  this.materialtop.setAmbient(0.3,0.3,0.3,1);
  this.materialtop.setDiffuse(0,0,0,1);
  this.materialtop.setSpecular(0.5,0.25,0,1);
  this.materialtop.setShininess(10);

  //metal

  this.metal= new CGFappearance(this.scene);
  this.metal.setAmbient(0.3,0.3,0.3,1);
  this.metal.setDiffuse(1,1,1,1);
  this.metal.setSpecular(0.65625,0.65625,0.65625,1);
  this.metal.setShininess(500);


 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {
 	// legs

 	this.metal.apply();
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);

 	this.materialtop.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 }
