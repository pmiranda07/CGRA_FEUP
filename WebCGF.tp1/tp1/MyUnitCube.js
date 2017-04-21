function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
	//left face
            -0.5, -0.5, -0.5,
    //right face
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,
    //left face
            0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            -0.5,-0.5,0.5
			];

	this.indices = [
	// face frente
            5, 2, 1, 
			1, 6, 5,
	//face direita
			2, 3, 4,
			2, 4, 1,
	//face tras
			7, 4, 0,
			4, 3, 0,
	//face esquerda
			5, 6, 7,
			7, 0, 5,
	//face cima
			1, 7, 6,
			1, 4, 7,
	// face baixo
			2, 5, 0,
			0, 3, 2
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();

	console.log("Array Sizes");
	console.log(this.vertices.lenght);
	console.log(this.indices.lenght);
	
};
