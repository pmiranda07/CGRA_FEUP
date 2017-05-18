/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Options');	

	// add a group of controls (and open/expand by defult)
	
	var luzes=this.gui.addFolder("Luzes");
	luzes.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	luzes.add(this.scene, 'Luz1');
	luzes.add(this.scene, 'Luz2');
	luzes.add(this.scene, 'Luz3');
	luzes.add(this.scene, 'Luz4');


	var relogio=this.gui.addFolder("Relogio");
	relogio.open();

	relogio.add(this.scene, 'Pausa');

	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', -5, 5);

	this.gui.add(this.scene, 'currSubmarineAppearance', this.scene.submarineAppearanceList);

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp

	switch (event.keyCode)
	{
		case (65) : //A
				this.scene.submarine.updateRotation(0);
				break;
		case (97) : //a
				this.scene.submarine.updateRotation(0);
				break;
		case (100) : //d
				this.scene.submarine.updateRotation(1);
				break;
		case (68) : //D 
				this.scene.submarine.updateRotation(1);
				break;
		case (119) : //w
				this.scene.submarine.updateMov(0);
				break;
		case (87) : //W
				this.scene.submarine.updateMov(0);
				break;
		case (115) : //s
				this.scene.submarine.updateMov(1);
				break;
		case (83) : //S
				this.scene.submarine.updateMov(1);
				break;
		case (81) : //Q
				this.scene.submarine.updateDeep(0);
				break;
		case (113) : //q
				this.scene.submarine.updateDeep(0);
				break;
		case (69) : //E
				this.scene.submarine.updateDeep(1);
				break;
		case (101) : //e
				this.scene.submarine.updateDeep(1);
				break;
		case (80) : //P
				this.scene.submarine.updatePer(0);
				break;
		case (112) : //p
				this.scene.submarine.updatePer(0);
				break;
		case (76) : //L
				this.scene.submarine.updatePer(1);
				break;
		case (108) : //l
				this.scene.submarine.updatePer(1);
				break;
		case (70) : //F
				this.scene.CreateTorpedo();
				break;
		case (102) : //f
				this.scene.CreateTorpedo();
				break;

		
	};
};

MyInterface.prototype.processKeyUp = function(event) {

	CGFinterface.prototype.processKeyboard.call(this,event);

	switch (event.keyCode)
	{
		case (65): //A
				this.scene.submarine.restartRudder();
				break;
		case (97): //a
				this.scene.submarine.restartRudder();
				break;
		case (100): //d
				this.scene.submarine.restartRudder();
				break;
		case (68): //D 
				this.scene.submarine.restartRudder();
				break;
		case (81) : //Q
				this.scene.submarine.restartHRudder();
				break;
		case (113) : //q
				this.scene.submarine.restartHRudder();
				break;
		case (69) : //E
				this.scene.submarine.restartHRudder();
				break;
		case (101) : //e
				this.scene.submarine.restartHRudder();
				break;
		
	};

};