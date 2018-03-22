require("dotenv").config();
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var importInfo = require("./keys.js");
var OmdbApi = require('omdb-api-pt');

// var spotify = new Spotify(importInfo.spotify);
var client = new Twitter(importInfo.twitter);

var newInfo = process.argv[2]
console.log(newInfo);
console.log(process.argv[3]);

if (newInfo === "my-tweets"){
    console.log("my-tweets")
    var params = {screen_name:'webninja2018'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
    for (var i =0; i < tweets.length; i++){
        console.log(i + 1 + " " + tweets[i].text);
    }
}
});
}
// Start Spotify else/if statement 
else if(newInfo === "spotify-this-song"){
    var spotify = new Spotify({
        id: "868122f746a74c6482b60dbb4ece08a9",
        secret: "553aae42aa1540b3982330726a5ed0c5"
      });
       
     // Query needs to be a string
     // Take input & turn it into a string
     //  Assign a var to the string &  pass that var int the query
     
     //get first word of song
     var songName = process.argv[3];

     // Create for loop here with the process.argv[3]
     for (var i = 4; i < process.argv.length; i++){
         // get any further words
         songName = songName + "+" + process.argv[i];

     }
     console.log(songName);
      spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(JSON.stringify(data.tracks.items[0], null, 4)); 
      });
}

//Start OMDB



