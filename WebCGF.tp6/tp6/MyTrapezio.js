/**
 * MyTrapezio
 * @constructor
 */

 function MyTrapezio(scene, quad, triangulo) {
 	CGFobject.call(this,scene);
    
    this.quad = new MyQuad();
    this.triangulo = new MyTriangle();

 	this.initBuffers();
 };

 MyTrapezio.prototype = Object.create(CGFobject.prototype);
 MyTrapezio.prototype.constructor = MyTrapezio;

 MyTrapezio.prototype.initBuffers = function() {
 	this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.17, 0,
 	0.5, 0.17, 0
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
      this.minS, this.maxT,
      this.maxS, this.maxT,
      this.minS, this.minT,
      this.maxS, this.minT,

 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
