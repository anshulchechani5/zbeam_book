/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/zpp_beam_book_report"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheAppPage.iShouldSeeThmaterialbaseuniteApp();
      	Then.onTheViewPage.iShouldSeeThePageView();

		//Cleanup
		Then.iTeardownMyApp();
	});
});
