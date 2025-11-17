/*global QUnit*/

sap.ui.define([
	"project2/controller/Test2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test2 Controller");

	QUnit.test("I should test the Test2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
