function myTable(scene) {
	CGFobject.call(this,scene);
	this.cube = new MyUnitCubeQuad(this.scene);
	this.cube.initBuffers();

};

myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;

myTable.prototype.display = function()
{
	//first leg
    this.scene.pushMatrix();
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(7.5,-0.5,4,25);
    this.cube.display();

    //second leg
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(7.5,-0.5,-4.25);
    this.cube.display();

    //third leg

    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(-7.5,-0.5,4.25);
    this.cube.display();

    //forth leg

    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(-7.5,-0.5,-4.25);
    this.cube.display();

    //top

    this.scene.popMatrix();
    this.scene.scale(5,0.3,3);
    this.cube.display();

}