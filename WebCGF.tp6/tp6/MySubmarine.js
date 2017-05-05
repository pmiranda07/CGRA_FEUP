/**
 * MySubmarine
 * @constructor
 */
 function MySubmarine(scene, x, y, z, angulo) {
 	CGFobject.call(this, scene);

 	this.MyTriangle = new MyTriangle(this.scene);

 	this.x = x;
 	this.z = z;
 	this.angulo = angulo;


 };

 MySubmarine.prototype = Object.create(CGFobject.prototype);
 MySubmarine.prototype.constructor = MySubmarine;

 MySubmarine.prototype.display = function() {

 	this.scene.pushMatrix();
 	this.scene.translate(this.x,0,this.z);
 	this.scene.rotate(this.angulo,0,1,0);
 	this.MyTriangle.display();
 	this.scene.popMatrix();


 }

MySubmarine.prototype.updateRotation = function(Dir) {

	switch(Dir)
	{
	  case(0):
		this.angulo += 90*degToRad;
		break;
	  case(1):
		this.angulo -= 90*degToRad;
		break;
	}
};

MySubmarine.prototype.updateMov = function(Dir) {

        if((Math.cos(this.angulo) == -1) && Dir == 0)
          this.z -= 1;
        else if((Math.cos(this.angulo) == -1) && Dir == 1)
          this.z += 1;
        else if((Math.cos(this.angulo) == 1)&& Dir == 0)
          this.z += 1;
        else if((Math.cos(this.angulo) == 1)&& Dir == 1)
          this.z -= 1;
        else if((Math.sin(this.angulo) == 1) && Dir == 0)
          this.x += 1;
        else if((Math.sin(this.angulo) == 1) && Dir == 1)
          this.x -= 1;
        else if ((Math.sin(this.angulo) == -1) && Dir == 0)
          this.x -= 1;
        else if((Math.sin(this.angulo) == -1) && Dir == 1)
          this.x += 1;
         
}


MySubmarine.prototype.update = function(currTime) {
    this.reposition(this.x,this.z,this.angulo);
}

MySubmarine.prototype.reposition = function(x,z,angulo) {
    this.scene.translate(x, 0, z);
    this.scene.rotate(angulo, 0,1,0);
}