/**
 * MyTorpedo
 * @constructor
 */
 function MyTorpedo(scene) {
 	CGFobject.call(this, scene);

   this.Body = new MyCylinder(this.scene, 20, 10);
   this.FrontTop = new myLamp(this.scene, 20, 10);
   this.BackTop = new myLamp(this.scene, 20, 10);
   this.rudder= new MyRudder(this.scene);

 	this.x = this.scene.submarine.x;
 	this.z = this.scene.submarine.z;
 	this.y = this.scene.submarine.y;
 	this.angulo = this.scene.submarine.angulo;

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

 };

 MyTorpedo.prototype = Object.create(CGFobject.prototype);
 MyTorpedo.prototype.constructor = MyTorpedo;

 MyTorpedo.prototype.display = function() {

this.scene.pushMatrix();	

	this.scene.translate(this.x,this.y,this.z);
 	this.scene.rotate(this.angulo,0,1,0);

 	this.scene.pushMatrix();
	if(this.scene.currSubmarineAppearance == 'Militar'){
    	this.militar.apply();
    }else if(this.scene.currSubmarineAppearance == 'Beatles'){
    	this.yellow.apply();
    }else if(this.scene.currSubmarineAppearance == 'Rusty'){
    	this.rusty.apply();
    }

	//Body

	this.scene.pushMatrix();
	this.scene.translate(0,-1.1,0);
 	this.scene.scale(0.15,0.15,1);
 	this.Body.display();
 	this.scene.popMatrix();

	//nose
 	this.scene.pushMatrix();
 	this.scene.translate(0,-1.1,1);
 	this.scene.scale(0.15, 0.15, 0.2);
 	this.FrontTop.display();
 	this.scene.popMatrix();

	//tail
	
	this.scene.pushMatrix();
	this.scene.translate(0,-1.1,0);
 	this.scene.rotate(180*degToRad,0,1,0);
 	this.scene.scale(0.15, 0.15, 0.2);
 	this.BackTop.display();
 	this.scene.popMatrix();


 	//vertical rudder
	this.scene.pushMatrix();
	this.scene.translate(0,-1.1,-0.1);
	this.scene.rotate(90*degToRad,0,0,1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.25,0.1,0.08);
	this.rudder.display();
	this.scene.popMatrix();

	//horizontal rudder

	this.scene.pushMatrix();
	this.scene.translate(0,-1.1,-0.1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.25,0.1,0.08);
	this.rudder.display();
	this.scene.popMatrix();

this.scene.popMatrix();

}

MyTorpedo.prototype.update = function(currTime) {
   

}
	