"use strict";

let view = {};

$("#hideAdd").click(function(event) {
		$("#listContent").removeClass("hidden");
		$("#addMusicContainer").addClass("hidden");
	});

	$("#hideList").click(function(event) {
		$("#addMusicContainer").removeClass("hidden");
		$("#listContent").addClass("hidden");
	});

module.exports = view;