"use strict";
////////////////////////////////////////////
// CODE REORGANIZED FOR MOST RECENT      //
// ITERATION OF ASSIGNMENT                //
// SEE songLoad.js, view.js, and main.js. //
////////////////////////////////////////////


// $(document).ready(function() {
// 	/* 
// 	Ajax request to pull song data from JSON file 
// 	*/

// 	$.ajax({
// 		url:"songs.json"
// 		}).done(populateMusic);


// 	/* 
// 	1. add the songs to the DOM in the listContent main content area 
// 	2. attach delete button to entry
// 	*/

// 	function populateMusic(songList){
// 		for (var i = 0; i < songList.songs.length; i++) {
// 			var currentSong = songList.songs[i];
// 			$("#main").append(
// 				`<div class="musicEntry">
// 					<p>${currentSong.song}</p>
// 					<ul>
// 						<li>${currentSong.artist}</li>
// 						<li>${currentSong.album}</li>
// 						<li>Genre</li>
// 					</ul>
// 					<button class="delete" id=${currentSong.song}>Delete</button>
// 				</div>`
// 			);
// 		}
// 		$(".delete").click(function(event) {
// 			$(event.currentTarget).parent().remove();
// 		});
// 	}

		
// 		1. allow users to input data and add to the main section of the list view
// 		2. signal user if a field is empty
// 		3. clear fields on submission
// 		4. attach delete button to entry
	

// 	$("#addButton").click(function(event) {
// 		let song = $("#addSongText").val();
// 		let artist = $("#addArtistText").val();
// 		let album = $("#addAlbumText").val();
// 		if (song === "" || artist === "" || album === "") {
// 			// alert("Please enter values in each field before submitting.");
// 			return;
// 		}
// 		$("#main").append(
// 			`<div class="musicEntry">	
// 				<p>${song}</p>
// 				<ul>
// 					<li>${artist}</li>
// 					<li>${album}</li>
// 					<li>Genre</li>
// 				</ul>
// 				<button class="delete" id="${song}">Delete</button>
// 			</div>`
// 		);
// 		$("#addSongText").value = "";
// 		$("#addArtistText").value = "";
// 		$("#addAlbumText").value = "";
// 		$(".delete").click(function(event) {
// 			$(event.currentTarget).parent().remove();
// 		});
// 	});


	/*
		hide segments of the page based on user interaction with the navigation menu
	*/

	// $("#hideAdd").click(function(event) {
	// 	$("#listContent").removeClass("hidden");
	// 	$("#addMusicContainer").addClass("hidden");
	// });

	// $("#hideList").click(function(event) {
	// 	$("#addMusicContainer").removeClass("hidden");
	// 	$("#listContent").addClass("hidden");
	// });
			

	/*
		1. pull data from second JSON file on the click of "more" button at the bottom of list page
		2. populate that data to the DOM
	*/

// 	$("#moreButton").click (function(event){
// 		$.ajax({
// 		url:"songs2.json"
// 		}).done(populateMusic);
// 	});
// });

/////////////////////////////////////////////////////////////////////////////////

/************************************/
/* Deprecated Code from previous 	*/
/*   iterations of the assignment   */
/************************************/


// // add to the array using [songs.length] --- ([i] increases as songs are added)

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// // add songs to the beginning and end of the array

// songs.unshift("No Sleep Till Brooklyn > by Beastie Boys on the album Licensed to Ill");
// songs.push("Empire State of Mind > by Jay-Z on the album The Blueprint 3");


// // loop through the array and replace ">" with "-"

// for (var i = 0; i < songs.length; i++){
// 	songs[i] = songs[i].replace(/>/g, "-");
// 	console.log(songs[i]);
// }


// // loop through the array, replace special characters, 

// songs[i] = songs[i].replace(/[!@(*]/g, "");
// console.log(songs[i]);
// var song = songs[i].slice(0,songs[i].indexOf("by")-2);
// var artist = songs[i].slice(songs[i].indexOf("by")+3, songs[i].indexOf(" on "));
// var album = songs[i].slice(songs[i].indexOf("album")+6, songs[i].length+1);
