/**
 * MySubmarine
 * @constructor
 */
 function MySubmarine(scene, x, y, z, angulo) {
 	CGFobject.call(this, scene);

 	this.Body = new MyCylinder(this.scene, 20, 10);
 	this.FrontTop = new myLamp(this.scene, 20, 10);
    this.BackTop = new myLamp(this.scene, 20, 10);
    this.Cabine = new MyCylinder(this.scene, 20, 10);
    this.CabineTop = new MyCircle(this.scene, 20);
    this.Tube = new MyCylinder(this.scene, 20, 10);
    this.HorizontalTube = new MyCylinder(this.scene, 20, 10);
    this.Helice = new MyCylinder(this.scene, 20, 10);
    this.Sphere = new myLamp(this.scene, 20,10);
    this.turbine = new MyUnitCubeQuad(this.scene);
    this.TubeTop = new MyCircle(this.scene,20);
    this.rudder= new MyRudder(this.scene);
    this.reverseHelice = new ReverseCylinder(this.scene,20,10);

 	this.x = x;
 	this.z = z;
 	this.angulo = angulo;

 	//rusty 

	this.rusty = new CGFappearance(this.scene);
	this.rusty.setAmbient(0.3,0.3,0.3,1);
	this.rusty.setDiffuse(0.7,0.7,0.7,1);
	this.rusty.setSpecular(0.5,0.5,0.5,1);	
	this.rusty.setShininess(120);
	this.rusty.loadTexture(this.scene.submarineAppearances[0]);

	//yellow

	this.yellow = new CGFappearance(this.scene);
	this.yellow.setAmbient(0.3,0.3,0.3,1);
	this.yellow.setDiffuse(0.7,0.7,0.7,1);
	this.yellow.setSpecular(0.5,0.5,0.5,1);	
	this.yellow.setShininess(120);
	this.yellow.loadTexture(this.scene.submarineAppearances[1]);

	//militar

	this.militar = new CGFappearance(this.scene);
	this.militar.setAmbient(0.3,0.3,0.3,1);
	this.militar.setDiffuse(0.7,0.7,0.7,1);
	this.militar.setSpecular(0.5,0.5,0.5,1);	
	this.militar.setShininess(120);
	this.militar.loadTexture(this.scene.submarineAppearances[2]);


 };

 MySubmarine.prototype = Object.create(CGFobject.prototype);
 MySubmarine.prototype.constructor = MySubmarine;

 MySubmarine.prototype.display = function() {
	
	this.scene.pushMatrix();
	if(this.scene.currSubmarineAppearance == 'Militar'){
    	this.militar.apply();
    }else if(this.scene.currSubmarineAppearance == 'Beatles'){
    	this.yellow.apply();
    }else if(this.scene.currSubmarineAppearance == 'Rusty'){
    	this.rusty.apply();
    }

	this.scene.translate(this.x,0,this.z);
 	this.scene.rotate(this.angulo,0,1,0);


	//Body

	this.scene.pushMatrix();
 	this.scene.scale(0.75,1,5);
 	this.Body.display();
 	this.scene.popMatrix();

	//nose
 	this.scene.pushMatrix();
 	this.scene.translate(0, 0, 5);
 	this.scene.scale(0.75, 1, 1);
 	this.FrontTop.display();
 	this.scene.popMatrix();

	//tail
	
 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,0,1,0);
 	this.scene.scale(0.75, 1, 1);
 	this.BackTop.display();
 	this.scene.popMatrix();

	//cabine

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,1,0,0);
 	this.scene.translate(0, 3.3, -1.6);
 	this.scene.scale(0.50,0.9,1.6);
 	this.Cabine.display();
 	this.scene.popMatrix();

	//CabineTop

 	this.scene.pushMatrix();
 	this.scene.rotate(-90*degToRad,1,0,0);
 	this.scene.translate(0, -3.3, 1.6);
 	this.scene.scale(0.50,0.9,1.6);
 	this.CabineTop.display();
 	this.scene.popMatrix();

	//periscopio

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,1,0,0);
 	this.scene.translate(0, 3.5, -2.5);
 	this.scene.scale(0.1,0.1,1);
 	this.Tube.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(0, 2.4, 3.5);
 	this.scene.scale(0.1,0.1,0.3);
 	this.Tube.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(-90*degToRad,1,0,0);
 	this.scene.translate(0, -3.5, 2.5);
 	this.scene.scale(0.1,0.1,1);
 	this.TubeTop.display();
 	this.scene.popMatrix();

//helice

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.5, 1, 0);
 	this.scene.scale(0.4,0.4,0.4);
 	this.Helice.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.5, -1, 0);
 	this.scene.scale(0.4,0.4,0.4);
 	this.Helice.display();
 	this.scene.popMatrix();




	//Esfera lado direito

 	this.scene.pushMatrix();
 	this.scene.translate(1,-0.5,0.2);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,1,0,0);
 	this.scene.translate(1,0.5,-0.2);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

	//Esfera lado esquerdo
    this.scene.pushMatrix();
 	this.scene.translate(-1,-0.5,0.2);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.rotate(180*degToRad,1,0,0);
 	this.scene.translate(-1,0.5,-0.2);
 	this.scene.scale(0.1,0.1,0.1);
 	this.Sphere.display();
 	this.scene.popMatrix(); 

	//turbina Direita
 	this.scene.pushMatrix();
 	this.scene.translate(1,-0.5,0.2);
 	this.scene.rotate(90*degToRad,0,1,0);
 	this.scene.scale(0.08,0.1,0.7);
 	this.turbine.display();
 	this.scene.popMatrix();

 	//turbina Esquerda
 	this.scene.pushMatrix();
 	this.scene.translate(-1,-0.5,0.2);
 	this.scene.rotate(90*degToRad,0,1,0);
 	this.scene.scale(0.08,0.1,0.7);
 	this.turbine.display();
 	this.scene.popMatrix();
 	

 	//vertical rudder

	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.5);
	this.scene.rotate(90*degToRad,0,0,1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(2,0.5,0.2);
	this.rudder.display();
	this.scene.popMatrix();

	//horizontal back rudder

	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.5);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(2,0.5,0.2);
	this.rudder.display();
	this.scene.popMatrix();

	//horizontal cabine rudder

	this.scene.pushMatrix();
	this.scene.translate(0,1.2,3.4);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(2,0.5,0.2);
	this.rudder.display();
	this.scene.popMatrix();

	//reverseHelice esqueda

	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.5, 1, 0);
 	this.scene.scale(0.4,0.4,0.4);
 	this.reverseHelice.display();
 	this.scene.popMatrix();

 	//reverseHelice esquerda

	this.scene.pushMatrix();
 	this.scene.rotate(90*degToRad,0,0,1);
 	this.scene.translate(-0.5, -1, 0);
 	this.scene.scale(0.4,0.4,0.4);
 	this.reverseHelice.display();
 	this.scene.popMatrix();

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