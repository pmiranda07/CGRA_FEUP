/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	
 	/*
 	* TODO:
 	* Replace the following lines in order to build a cylinder with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/


	var t = 2 * Math.PI/this.slices;

	this.vertices=[];
	this.normals=[];
	this.indices=[];
	
	for(let n = 0; n < this.stacks+1; n++)
	{
		var z = n/this.stacks;

		for(let i = 0; i < this.slices; i++)
		{
			this.vertices.push(Math.cos(i * t),Math.sin(i * t), z);
			this.normals.push(Math.cos(i * t),Math.sin(i * t), 0);
		}

	}




	for(let k = 0; k < this.stacks; k++)
	{
		for(let i = 0; i < this.slices; i++)
		{
			this.indices.push(this.slices*k+i,this.slices*k+i+1,this.slices*(k+1)+i);
			if (i != (this.slices - 1)) 
			{
				this.indices.push(this.slices*(k+1)+i+1,this.slices*(k+1)+i,this.slices*k+i+1);
			}
			else 
			{
				this.indices.push(this.slices*k,this.slices*k+i+1,this.slices*k+i);
			}
			
		}

	}

// para testar na consola 
console.log(this.vertices);
console.log(this.indices);
console.log(this.normals);
	

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.initGLBuffers();
 };