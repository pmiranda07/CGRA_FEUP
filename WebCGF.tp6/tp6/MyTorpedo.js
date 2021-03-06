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
	this.y = this.scene.submarine.y-1.1;
	this.angulo = this.scene.submarine.angulo;
	this.lastUpdate=-1;
	this.inc=0;
	this.angDeep=0;
	
	//torpedo movement
	this.p1x=this.x;
	this.p1y=this.y;
	this.p1z=this.z;
	this.p2x=this.x+6*Math.sin(this.angulo);
	this.p2y=this.y;
	this.p2z=this.z+6*Math.cos(this.angulo);
	this.p3x=this.scene.targetList[this.scene.c].x;
	this.p3y=this.scene.targetList[this.scene.c].y+3;
	this.p3z=this.scene.targetList[this.scene.c].z;
	this.p4x=this.scene.targetList[this.scene.c].x;
	this.p4y=this.scene.targetList[this.scene.c].y;
	this.p4z=this.scene.targetList[this.scene.c].z;
	this.t=0;
	this.dist=Math.sqrt(Math.pow((this.p4x-this.p1x),2)+Math.pow((this.p4y-this.p1y),2)+Math.pow((this.p4z-this.p1z),2));
	this.torpedoSpeed=2;

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
	this.scene.rotate(this.angDeep,1,0,0);


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
	this.scene.translate(0,0,0);
	this.scene.scale(0.15,0.15,1);
	this.Body.display();
	this.scene.popMatrix();

	//nose
	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.scene.scale(0.15, 0.15, 0.2);
	this.FrontTop.display();
	this.scene.popMatrix();

	//tail

	this.scene.pushMatrix();
	this.scene.translate(0,0,0);
	this.scene.rotate(180*degToRad,0,1,0);
	this.scene.scale(0.15, 0.15, 0.2);
	this.BackTop.display();
	this.scene.popMatrix();


	//vertical rudder
	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.1);
	this.scene.rotate(90*degToRad,0,0,1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.25,0.1,0.08);
	this.rudder.display();
	this.scene.popMatrix();

	//horizontal rudder

	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.1);
	this.scene.rotate(90*degToRad,1,0,0);
	this.scene.scale(0.25,0.1,0.08);
	this.rudder.display();
	this.scene.popMatrix();

	this.scene.popMatrix();

}

MyTorpedo.prototype.update = function(currTime) {

if (this.lastUpdate == -1) {
		this.lastUpdate = currTime;
		inc=0;
	}
	else {
		var diff = currTime - this.lastUpdate;
		this.lastUpdate = currTime;
		inc = diff*this.torpedoSpeed/(this.dist*1000);
	}

if(this.x-this.p4x < 1.3 && this.y-this.p4y < 1.3 && this.z-this.p4z < 1.3)
	{
		this.scene.etorpedo = 2;
		this.scene.targ +=1;
		this.scene.explode +=1;
		this.scene.explodedisp = 1;

	}
	else
	{
		this.t+=inc;
		var P=[this.x, this.y, this.z];
		this.x=Math.pow((1-this.t),3)*this.p1x + 3*this.t*Math.pow((1-this.t),2)*this.p2x+3*Math.pow(this.t,2)*(1-this.t)*this.p3x+Math.pow(this.t,3)*this.p4x; 
		this.y=Math.pow((1-this.t),3)*this.p1y + 3*this.t*Math.pow((1-this.t),2)*this.p2y+3*Math.pow(this.t,2)*(1-this.t)*this.p3y+Math.pow(this.t,3)*this.p4y;
		this.z=Math.pow((1-this.t),3)*this.p1z + 3*this.t*Math.pow((1-this.t),2)*this.p2z+3*Math.pow(this.t,2)*(1-this.t)*this.p3z+Math.pow(this.t,3)*this.p4z;  
			
			//rotacao em y
			if((this.z-P[2])==0){
				if((this.x-P[0])>0){
					this.angulo=90*degToRad;
				}
				else if((this.x-P[0])<0){
					this.angulo=-90*degToRad;
				}
			}
			else{
				if((P[2]-this.z)<0){
					this.angulo=Math.atan((this.x-P[0])/(this.z-P[2]));
				}
				else if((P[2]-this.z)>0){
					this.angulo=180*degToRad+Math.atan((this.x-P[0])/(this.z-P[2]));
				}
			
			}

			//rotacao em x
			var partialDist=Math.sqrt(Math.pow((this.x-P[0]),2)+Math.pow((this.z-P[2]),2));
			if(partialDist==0){
				if((this.y-P[1])>0){
					this.angDeep=-90*degToRad;
				}
				else if(this.y-P[1]<0){
					this.angDeep=90*degToRad;
				}
			}
			else{
				this.angDeep=Math.atan((P[1]-this.y)/partialDist);
			}


   	}
}

