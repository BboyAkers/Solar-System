/// <reference path="babylon.2.4.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function () {

    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true)


    var scene = new BABYLON.Scene(engine);
};