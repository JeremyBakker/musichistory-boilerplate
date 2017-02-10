"use strict";

//////////////////// Fundamental Data //////////////////////////

let songLoad = {};


/////////////////////////
//  GLOBAL VARIABLES   //
/////////////////////////

let songs = [];


/////////////////////////
//    AJAX REQUEST     //
//    FOR SONG DATA    //
/////////////////////////

songLoad.loadSongs = () => {

	return new Promise ((resolve, reject) => {
		$.ajax({
			url:"songs.json",
			type: "GET",
			success: (songsData) => {
				for (var i in songsData.songs) {
					songs.push(songsData.songs[i]);
				}	
				resolve();
			},
			error: () => {reject("Songs Failed to Load");}
		});
	});
};


/////////////////////////
//   EVENT LISTENERS   //
/////////////////////////

$("#moreButton").click((event) => {
	songLoad.populateMusic(songs);
});

$("#addButton").click((event) => {
	songLoad.addSong();
});


/////////////////////// Functions //////////////////////////////

/////////////////////////
//      LIST MUSIC     //
//        IN DOM       //
/////////////////////////

songLoad.populateMusic = (songs) => {	
	$("#main").empty();
	var currentSong;
	for (var i = 0; i < songs.length; i++) {
		currentSong = songs[i];
		songLoad.populateDOM(currentSong);
	}
	$(".delete").click(function(event) {
		$(event.currentTarget).parent().remove();
	});
};


/////////////////////////
//    ADD MUSIC TO     //
//    SONG ARRAY       //
/////////////////////////

songLoad.addSong = (event) => {
	let anotherSong = {};
	anotherSong.song = $("#addSongText").val();
	anotherSong.artist = $("#addArtistText").val();
	anotherSong.album = $("#addAlbumText").val();
	anotherSong.genre = $("#addGenreText").val();
	// if (song === "" || artist === "" || album === "") {
	// 	// alert("Please enter values in each field before submitting.");
	// 	return;
	// }
	songs.push(anotherSong);
	songLoad.populateDOM(anotherSong);
	$(".delete").click((event) => {
		$(event.currentTarget).parent().remove();
	});
};

songLoad.getSongs = () => {
	return songs;
};
console.log(songs);

/////////////////////////
//   APPEND DATA TO    //
//      THE DOM        //
/////////////////////////

songLoad.populateDOM = (currentSong) => {
	$("#main").append(
			`<div class="musicEntry">
				<p>${currentSong.song}</p>
				<ul>
					<li>${currentSong.artist}</li>
					<li>${currentSong.album}</li>
					<li>${currentSong.genre}</li>
				</ul>
				<button class="delete" id=${currentSong.song}>Delete</button>
			</div>`
		);
};

module.exports = songLoad;