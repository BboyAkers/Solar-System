/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	//get the canvas
	var canvas = document.getElementById('renderCanvas');
	
	//create a BabylonJS engine object
	var engine = new BABYLON.Engine(canvas, true);
	
	//create scene
	var scene = new BABYLON.Scene(engine);

	//create camera
	var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
	
	camera.attachControl(canvas);
	
	//light environment light(coming from above)
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

	var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);

	//create a sphere
	var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
	sphere.position.y = 1;

	//create box
	var box = BABYLON.Mesh.CreateBox('box',scene);
	box.position = new BABYLON.Vector3(10, 3 , -4);

	var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 26, 4, scene);
	sphere2.position = new BABYLON.Vector3(3, 3, 3);

	//create box
	var box = BABYLON.Mesh.CreateBox('box',scene);
	box.position = new BABYLON.Vector3(10, 3 , -4);

	var cylinder = BABYLON.Mesh.CreateCylinder('cyl', 5, 1, 3, 16, scene);
	cylinder.position = new BABYLON.Vector3(4, 4, 4);

	var lines = BABYLON.Mesh.CreateLines('lines', [
		new BABYLON.Vector3(0, 5, 0),
		new BABYLON.Vector3(1, 5, 0),
		new BABYLON.Vector3(0, 5, 1),
		new BABYLON.Vector3(0, 2, 0),
		new BABYLON.Vector3(1, 5, 0)
		], scene);
	var box2 = BABYLON.Mesh.CreateBox('box2', scene);
	box2.position = new BABYLON.Vector3(2, 2, 2);

	engine.runRenderLoop(function(){
		scene.render();
	});

};
//http://www.babylonjs-playground.com/
http://doc.babylonjs.com/generals/A_Babylon.js_Primer