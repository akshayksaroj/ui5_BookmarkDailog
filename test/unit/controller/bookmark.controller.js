/*global QUnit*/

sap.ui.define([
	"com/akshayksaroj/learnings/bookmark/controller/bookmark.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bookmark Controller");

	QUnit.test("I should test the bookmark controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
