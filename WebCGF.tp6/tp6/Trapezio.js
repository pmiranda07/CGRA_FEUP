function Trapezio(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 Trapezio.prototype = Object.create(CGFobject.prototype);
 Trapezio.prototype.constructor = Trapezio;

 Trapezio.prototype.initBuffers = function() {
 	this.vertices = [
 	-1, -0.5, 0,
 	 1, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

 	this.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
 	];

 	this.texCoords=[
      0, 1,
      1, 1,
      0, 0,
      1, 0,

 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


