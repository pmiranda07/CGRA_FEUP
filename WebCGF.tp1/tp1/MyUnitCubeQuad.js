function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
	this.quad = new MyQuad(this.scene);
	this.quad.initBuffers();

};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display = function()
{
    //front face
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.quad.display();
    //left face
    this.scene.popMatrix();
    this.scene.pushMatrix(); 

    this.scene.translate(-0.5,0,0);
    this.scene.rotate(-Math.PI/2,0,1,0);
    this.quad.display();
    //right face
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.quad.display();
    //bottom face
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.quad.display();

    //top face
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.quad.display();

    //back face

    this.scene.popMatrix();
    this.scene.translate(0,0,-0.5);
    this.scene.rotate(Math.PI,0,1,0);
    this.quad.display();






};
