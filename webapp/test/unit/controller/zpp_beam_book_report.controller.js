/*global QUnit*/

sap.ui.define([
	"zpp_beam_book/controller/zpp_beam_book_report.controller"
], function (Controller) {
	"use strict";

	QUnit.module("zpp_beam_book_report Controller");

	QUnit.test("I should test the zpp_beam_book_report controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
