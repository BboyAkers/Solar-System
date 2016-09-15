/// <reference path="babylon.2.4.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function () {

    var canvas = document.getElementById('renderCanvas');

    //Create engine object
    var engine = new BABYLON.Engine(canvas, true);

    //Create Scene
    var scene = new BABYLON.Scene(engine);

    //Create Camera
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);

    camera.attachControl(canvas);

    //Light environment
    var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);


    //Create ground
    var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);

    var grass = new BABYLON.StandardMaterial('grass', scene);
    grass.diffuseTexture

    //Create a sphere
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;

    var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene);
    sphere2.position = new BABYLON.Vector3(3, 3, 3);

    var sphereMaterial = new BABYLON.StandardMaterial('sphereMat', scene);
    sphereMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
    sphereMaterial.alpha = 0.5;

    sphere2.material = sphereMaterial;

    //Create box
    var box = BABYLON.Mesh.CreateBox('box', 1 , scene);
    box.position = new BABYLON.Vector3(6, 2, 10);
    box.scaling.y = 2;

    box.material = sphereMaterial;

    box.rotation.x = 45;


    var cylinder = BABYLON.Mesh.CreateCylinder('cyl', 5, 1, 3, 16, scene);

    var lines = BABYLON.Mesh.CreateLines('lines', [
        new BABYLON.Vector3(0, 5, 0),
        new BABYLON.Vector3(1, 5, 0),
        new BABYLON.Vector3(0, 5, 1),
        new BABYLON.Vector3(2, 2, 0),
        new BABYLON.Vector3(1, 5, -5)
    ],scene);

    //render scene
    engine.runRenderLoop(function () {
        scene.render();
    });

    //listen for resize event
    window.addEventListener('resize', function () {
        engine.resize();
    })
};