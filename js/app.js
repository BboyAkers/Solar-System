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

    //Light environment
    var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    //Create a sphere
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    //render scene
    engine.runRenderLoop(function () {
        scene.render();
    });
};