function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;

 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

MyCircle.prototype.initBuffers = function() {
 	
 	/*
 	* TODO:
 	* Replace the following lines in order to build a circle with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a solid with varying number of slices?
 	*/


	var t = 2 * Math.PI/this.slices;

	this.vertices=[0,0,0];
	this.normals=[0,0,1];
	this.indices=[];
	

for(let i = 0; i < this.slices; i++)
	{
		this.vertices.push(Math.cos(i * t),Math.sin(i * t), 0);
		this.normals.push(0,0,1);
	}





	for(let i = 0; i < this.slices; i++)
	{
		if (i == this.slices-1) 
		{
			this.indices.push(0,i+1,1);
		}
		else 
		{
			this.indices.push(0,i+1,i+2);
		}
			
	}


// texture
this.texCoords=[0.5,0.5];
var t= 2*Math.PI/this.slices;

for(let i=0;i < this.slices; i++)
	this.texCoords.push(0.5 + 0.5 * Math.cos(i*t),0.5 - (0.5*Math.sin(i*t)));



// para testar na consola 
//console.log(this.vertices);
//console.log(this.indices);
//console.log(this.normals);
	

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.initGLBuffers();
 };