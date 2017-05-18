/**
 * MyPrism
 * @constructor
 */
function MyPrism(scene, slices, stacks) {
	CGFobject.call(this,scene);

	this.slices = slices;
	this.stacks = stacks;

	this.initBuffers();
};

MyPrism.prototype = Object.create(CGFobject.prototype);
MyPrism.prototype.constructor = MyPrism;

MyPrism.prototype.initBuffers = function() {
	/*
	 * TODO:
	 * Replace the following lines in order to build a prism with a **single mesh**.
	 *
	 * How can the vertices, indices and normals arrays be defined to
	 * build a prism with varying number of slices and stacks?
	 */

	this.vertices = [];
	this.indices=[];
	this.normals=[];
	var ind=0;
	var t = 2 * Math.PI/this.slices;

	for(let k = 0; k < this.stacks; k++){

		var z=k/this.stacks;
		var zn = z+1/this.stacks;


		for(let i = 0;i < this.slices;i++)
		{
			var n=t*(i+0.5);

			this.vertices.push(Math.cos(i*t),Math.sin(i*t),z);
			this.vertices.push(Math.cos(i * t), Math.sin(i* t), zn);
			this.vertices.push(Math.cos((i+1)*t),Math.sin((i+1)*t),z);
			this.vertices.push(Math.cos((i+1)*t),Math.sin((i+1)*t),zn);


			this.normals.push(Math.cos(n),Math.sin(n),0);
			this.normals.push(Math.cos(n),Math.sin(n),0);
			this.normals.push(Math.cos(n),Math.sin(n),0);
			this.normals.push(Math.cos(n),Math.sin(n),0);


			this.indices.push(ind, ind+2, ind+3);
			this.indices.push(ind+1, ind, ind+3);
			ind = ind + 4;

		}

	}

//	para testar na consola 
//	console.log(this.vertices);
//	console.log(this.indices);
//	console.log(this.normals);



	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
