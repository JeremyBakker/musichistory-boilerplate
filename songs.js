// Initialize an array
var songs = [];

// Add to the array using [songs.length] --- ([i] increases as songs are added)
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add a song to the beginning of the array
songs.unshift("No Sleep Till Brooklyn > by Beastie Boys on the album Licensed to Ill");

// Add a song to the end of the array
songs.push("Empire State of Mind > by Jay-Z on the album The Blueprint 3");

// Loop through the array and replace ">" with "-"
for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace(/>/g, "-");
	console.log(songs[i]);
}

// Loop through the array, replace special characters, and add the songs to the DOM in the main content area

for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace(/[!@(*]/g, "");
	console.log(songs[i]);
	document.getElementById("insertion").innerHTML += songs[i];
}
