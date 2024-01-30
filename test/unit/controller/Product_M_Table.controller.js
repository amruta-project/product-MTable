/*global QUnit*/

sap.ui.define([
	"product_mtable/controller/Product_M_Table.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Product_M_Table Controller");

	QUnit.test("I should test the Product_M_Table controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
