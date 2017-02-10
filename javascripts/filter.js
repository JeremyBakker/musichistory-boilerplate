"use strict";

let view = require("./view.js"),
	songLoad = require("./songLoad.js");


$("#filterButton").click((event) => {
	var songs = songLoad.getSongs();
	filterSongs(songs);
});

let filterSongs = (songs) => {
	$("#main").empty();
	let songsArray = [];
	let artist = $("#artist").val();
	let album = $("#album").val();
	let selected = [];
	$(" input:checked ").each( function() {
    	selected.push($(this).val());
	});
	for (var i = 0; i < songs.length; i++) {
		console.log(songs[i].album);
		console.log();
		if ((songs[i].artist).toLowerCase() === artist.toLowerCase()) {
			songsArray.push(songs[i]);
		}
		if((songs[i].album.replace(/\s+/g, '')).toLowerCase() === album.toLowerCase()) {
			songsArray.push(songs[i]);
		}
		for (var j = 0; j < selected.length; j++) {
			if((songs[i].genre) === selected[j]){
				songsArray.push(songs[i]);
			}
		}
	}
	let uniqueSongsArray = [];
	$.each(songsArray, function(i, song){
	    if($.inArray(song, uniqueSongsArray) === -1) uniqueSongsArray.push(song);
	});
	songLoad.populateMusic(uniqueSongsArray);
};




