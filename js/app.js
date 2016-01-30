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

	var grass = new BABYLON.StandardMaterial('grass', scene);
	grass.diffuseTexture = new BABYLON.Texture('assets/images/grass.png', scene);
	grass.diffuseTexture.uScale = 10;
	grass.diffuseTexture.vScale = 10;

	ground.material = grass;

	//create a sphere
	var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
	sphere.position.y = 1;

	//create box
	var box = BABYLON.Mesh.CreateBox('box',scene);
	box.position = new BABYLON.Vector3(10, 3 , -4);
	box.scaling.y = 2;

	box.rotation.x = 45;

	var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 26, 4, scene);
	sphere2.position = new BABYLON.Vector3(3, 3, 3);
	sphere2.scaling = new BABYLON.Vector3(1, 0.5, 0.5);

	var sphereMaterial = new BABYLON.StandardMaterial('sphereMat', scene);
	sphereMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
	sphereMaterial.alpha = 0.5;

	sphere2.material = sphereMaterial;


	//create box
	var box = BABYLON.Mesh.CreateBox('box', 1, scene);
	box.position = new BABYLON.Vector3(10, 3 , -4);
	box.scaling.y = 2;

	box.rotation.x = 45;

	box.material = sphereMaterial;

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

	//listen for resize event
	window.addEventListener('resize', function(){
		engine.resize();
	});

};
//http://www.babylonjs-playground.com/
http://doc.babylonjs.com/generals/A_Babylon.js_Primer