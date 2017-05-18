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
	this.window = new MyCircle(this.scene,20);

	this.x = x;
	this.z = z;
	this.y = y;
	this.angulo = angulo;
	this.vertical_rudder=0;
	this.rotacao=0;
	this.h_rudder=0;
	this.per = 0;

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
	this.yellow.setDiffuse(0.4,0.4,0.4,1);
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

	//windows

	this.windowAppearance = new CGFappearance(this.scene);
	this.windowAppearance.setAmbient(0.3,0.3,0.3,1);
	this.windowAppearance.setDiffuse(0.5,0.5,0.5,1);
	this.windowAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.windowAppearance.setShininess(50);
	this.windowAppearance.loadTexture(this.scene.submarineAppearances[3]);

	//white

	this.white = new CGFappearance(this.scene);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.5,0.5,0.5,1);
	this.white.setSpecular(0.5,0.5,0.5,1);	
	this.white.setShininess(100);
	this.white.loadTexture(this.scene.submarineAppearances[4]);

	//lenon

	this.lenon = new CGFappearance(this.scene);
	this.lenon.setAmbient(0.3,0.3,0.3,1);
	this.lenon.setDiffuse(0.7,0.7,0.7,1);
	this.lenon.setSpecular(0.5,0.5,0.5,1);	
	this.lenon.setShininess(120);
	this.lenon.loadTexture(this.scene.submarineAppearances[5]);

	//paul

	this.paul = new CGFappearance(this.scene);
	this.paul.setAmbient(0.3,0.3,0.3,1);
	this.paul.setDiffuse(0.7,0.7,0.7,1);
	this.paul.setSpecular(0.5,0.5,0.5,1);	
	this.paul.setShininess(120);
	this.paul.loadTexture(this.scene.submarineAppearances[6]);

	//ringo

	this.ringo = new CGFappearance(this.scene);
	this.ringo.setAmbient(0.3,0.3,0.3,1);
	this.ringo.setDiffuse(0.7,0.7,0.7,1);
	this.ringo.setSpecular(0.5,0.5,0.5,1);	
	this.ringo.setShininess(120);
	this.ringo.loadTexture(this.scene.submarineAppearances[7]);

	//george

	this.george = new CGFappearance(this.scene);
	this.george.setAmbient(0.3,0.3,0.3,1);
	this.george.setDiffuse(0.7,0.7,0.7,1);
	this.george.setSpecular(0.5,0.5,0.5,1);	
	this.george.setShininess(120);
	this.george.loadTexture(this.scene.submarineAppearances[8]);

	//blue
	this.blue = new CGFappearance(this.scene);
	this.blue.setAmbient(0.3,0.3,0.3,1);
	this.blue.setDiffuse(0.7,0.7,0.7,1);
	this.blue.setSpecular(0.5,0.5,0.5,1);	
	this.blue.setShininess(120);
	this.blue.loadTexture(this.scene.submarineAppearances[9]);

	//symbol
	this.s = new CGFappearance(this.scene);
	this.s.setAmbient(0.3,0.3,0.3,1);
	this.s.setDiffuse(0.5,0.5,0.5,1);
	this.s.setSpecular(0.5,0.5,0.5,1);	
	this.s.setShininess(100);
	this.s.loadTexture(this.scene.submarineAppearances[10]);

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

	this.scene.translate(this.x,this.y,this.z);
	this.scene.rotate(this.angulo,0,1,0);


	//Body
	this.scene.pushMatrix();
	this.scene.translate(0,0,-2.5);
	this.scene.scale(0.75,1,5);
	this.Body.display();
	this.scene.popMatrix();

	//nose
	this.scene.pushMatrix();
	this.scene.translate(0, 0, 2.5);
	this.scene.scale(0.75, 1, 1);
	this.FrontTop.display();
	this.scene.popMatrix();

	//tail

	this.scene.pushMatrix();
	this.scene.translate(0,0,-2.5);
	this.scene.rotate(180*degToRad,0,1,0);
	this.scene.scale(0.75, 1, 1);
	this.BackTop.display();
	this.scene.popMatrix();

	//cabine
	if(this.scene.currSubmarineAppearance == 'Beatles'){
		this.s.apply();
	}
	this.scene.pushMatrix();
	this.scene.translate(0,1.6,1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.50,0.9,1.6);
	this.Cabine.display();
	this.scene.popMatrix();

	//CabineTop
	if(this.scene.currSubmarineAppearance == 'Beatles'){
		this.white.apply();
	}
	this.scene.pushMatrix();
	this.scene.translate(0,1.6,1);
	this.scene.rotate(-90*degToRad,1,0,0);
	this.scene.scale(0.50,0.9,1.6);
	this.CabineTop.display();
	this.scene.popMatrix();

	//periscopio
	this.scene.pushMatrix();
	if(this.scene.currSubmarineAppearance == 'Militar'){
		this.blue.apply();
	}
	this.scene.translate(0,this.per,0);
	this.scene.pushMatrix();
	this.scene.translate(0,2.5,1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.1,0.1,1);
	this.Tube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0, 2.4, 1);
	this.scene.scale(0.1,0.1,0.3);
	this.Tube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,2.5,1);
	this.scene.rotate(-90*degToRad,1,0,0);
	this.scene.scale(0.1,0.1,1);
	this.TubeTop.display();
	this.scene.popMatrix();
	this.scene.popMatrix();

//	helice

if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.yellow.apply();
}

this.scene.pushMatrix();
this.scene.translate(-1.05,-0.5,-2.5);
this.scene.rotate(90*degToRad,0,0,1);
this.scene.scale(0.4,0.4,0.4);
this.Helice.display();
this.scene.popMatrix();

this.scene.pushMatrix();
this.scene.translate(1.05,-0.5,-2.5);
this.scene.rotate(90*degToRad,0,0,1);
this.scene.scale(0.4,0.4,0.4);
this.Helice.display();
this.scene.popMatrix();




//Esfera lado direito

this.scene.pushMatrix();
this.scene.translate(1.05,-0.5,-2.3);
this.scene.scale(0.1,0.1,0.1);
this.Sphere.display();
this.scene.popMatrix();

this.scene.pushMatrix();
this.scene.translate(1.05,-0.5,-2.3);
this.scene.rotate(180*degToRad,1,0,0);
this.scene.scale(0.1,0.1,0.1);
this.Sphere.display();
this.scene.popMatrix();

//Esfera lado esquerdo
this.scene.pushMatrix();
this.scene.translate(-1.05,-0.5,-2.3);
this.scene.scale(0.1,0.1,0.1);
this.Sphere.display();
this.scene.popMatrix();

this.scene.pushMatrix();
this.scene.translate(-1.05,-0.5,-2.3);
this.scene.rotate(180*degToRad,1,0,0);
this.scene.scale(0.1,0.1,0.1);
this.Sphere.display();
this.scene.popMatrix(); 

//turbina Direita

if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.white.apply();
}
this.scene.pushMatrix();
this.scene.translate(1.05,-0.5,-2.3);
this.scene.rotate(this.rotacao*25*degToRad,0,0,1);
this.scene.rotate(90*degToRad,0,1,0);
this.scene.scale(0.08,0.1,0.7);
this.turbine.display();
this.scene.popMatrix();

//turbina Esquerda
this.scene.pushMatrix();
this.scene.translate(-1.05,-0.5,-2.3);
this.scene.rotate(this.rotacao*-25*degToRad,0,0,1);
this.scene.rotate(90*degToRad,0,1,0);
this.scene.scale(0.08,0.1,0.7);
this.turbine.display();
this.scene.popMatrix();


//vertical rudder

this.scene.pushMatrix();
this.scene.translate(0,0,-3);
this.scene.rotate(this.vertical_rudder*degToRad,0,1,0);
this.scene.rotate(90*degToRad,0,0,1);
this.scene.rotate(90*degToRad,1,0,0);
this.scene.scale(2,0.5,0.2);
this.rudder.display();
this.scene.popMatrix();

//horizontal back rudder

this.scene.pushMatrix();
this.scene.translate(0,0,-3);
this.scene.rotate(this.h_rudder*degToRad,1,0,0);
this.scene.rotate(90*degToRad,1,0,0);
this.scene.scale(2,0.5,0.2);
this.rudder.display();
this.scene.popMatrix();

//horizontal cabine rudder

this.scene.pushMatrix();
this.scene.translate(0,1.2,0.9);
this.scene.rotate(this.h_rudder*degToRad,1,0,0);
this.scene.rotate(90*degToRad,1,0,0);
this.scene.scale(2,0.5,0.2);
this.rudder.display();
this.scene.popMatrix();

//reverseHelice esqueda

if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.yellow.apply();
}
this.scene.pushMatrix();
this.scene.translate(-1.05,-0.5,-2.5);
this.scene.rotate(90*degToRad,0,0,1);
this.scene.scale(0.4,0.4,0.4);
this.reverseHelice.display();
this.scene.popMatrix();

//reverseHelice direita

this.scene.pushMatrix();
this.scene.translate(1.05,-0.5,-2.5);
this.scene.rotate(90*degToRad,0,0,1);
this.scene.scale(0.4,0.4,0.4);
this.reverseHelice.display();
this.scene.popMatrix();

//windows tubes

//back right
this.scene.pushMatrix();
this.scene.translate(-0.4,0.1,-1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.Tube.display();
this.scene.popMatrix();

//front right

this.scene.pushMatrix();
this.scene.translate(-0.4,0.1,1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.Tube.display();
this.scene.popMatrix();

//front left

this.scene.pushMatrix();
this.scene.translate(0.9,0.1,1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.Tube.display();
this.scene.popMatrix();

//back left

this.scene.pushMatrix();
this.scene.translate(0.9,0.1,-1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.Tube.display();
this.scene.popMatrix();


//windows top
this.scene.pushMatrix();

if(this.scene.currSubmarineAppearance == 'Militar'){
	this.windowAppearance.apply();
}else if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.lenon.apply();
}else if(this.scene.currSubmarineAppearance == 'Rusty'){
	this.windowAppearance.apply();
}

//back right
this.scene.pushMatrix();
this.scene.translate(-0.9,0.1,-1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.window.display();
this.scene.popMatrix();

//front right
this.scene.pushMatrix();
if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.paul.apply();
}
this.scene.translate(-0.9,0.1,1);
this.scene.rotate(-90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.window.display();
this.scene.popMatrix();

//front left

this.scene.pushMatrix();
if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.ringo.apply();
}
this.scene.translate(0.9,0.1,1);
this.scene.rotate(90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.window.display();
this.scene.popMatrix();

//back left

this.scene.pushMatrix();
if(this.scene.currSubmarineAppearance == 'Beatles'){
	this.george.apply();
}
this.scene.translate(0.9,0.1,-1);
this.scene.rotate(90*degToRad,0,1,0);
this.scene.scale(0.5,0.5,0.5);
this.window.display();
this.scene.popMatrix();


this.scene.popMatrix();


this.scene.popMatrix();


}

MySubmarine.prototype.updateRotation = function(Dir) {


	if(this.scene.speed >= 0 && Dir == 0)
	{
		this.angulo += 5*degToRad;
		this.vertical_rudder = -25;
	}
	if(this.scene.speed >= 0 && Dir == 1)
	{
		this.angulo -= 5*degToRad;
		this.vertical_rudder = 25;
	}
	if(this.scene.speed < 0 && Dir == 0){
		this.angulo += 5*degToRad;
		this.vertical_rudder = 25;
	}
	if(this.scene.speed < 0 && Dir == 1){
		this.angulo -= 5*degToRad;
		this.vertical_rudder = -25;
	}

};

MySubmarine.prototype.updateMov = function(Dir) {

	switch(Dir)
	{
	case 0:
		this.scene.speed+=0.1;
		break;
	case 1:
		this.scene.speed-=0.1;
		break;
	}

}


MySubmarine.prototype.update = function(currTime) {

	this.x+=this.scene.speed*Math.sin(this.angulo);
	this.z+=this.scene.speed*Math.cos(this.angulo);
	this.rotacao += 36*degToRad*this.scene.speed;

}

MySubmarine.prototype.restartRudder = function() {


	this.vertical_rudder=0;

}

MySubmarine.prototype.updateDeep = function(Dir)
{
	if(this.y >= 2 && Dir == 0 && this.scene.speed >=0){
		this.y +=0.5
		this.h_rudder = -25;
	}
	if(this.y > 2 && Dir == 1 && this.scene.speed >=0){
		this.y -=0.5
		this.h_rudder = 25;
	}
	if(this.y >= 2 && Dir == 0 && this.scene.speed < 0){
		this.y +=0.5
		this.h_rudder = 25;
	}
	if(this.y > 2 && Dir == 1 && this.scene.speed < 0){
		this.y -=0.5
		this.h_rudder = -25;
	}


}

MySubmarine.prototype.restartHRudder = function() {


	this.h_rudder=0;

}

MySubmarine.prototype.updatePer = function(Dir)
{
	if(this.per >= -0.7 && this.per <= 0 && Dir == 0){
		this.per += 0.1
	}
	if(this.per >= -0.6 && this.per <= 0.1 && Dir == 1){
		this.per -= 0.1
	}

}
