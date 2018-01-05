// display a few hint's from the movie data after each incorrect guess
var request = require("request");
// var Word = require("./word.js");

var Hint = function () {
    // this.hintArray = [];
    this.ratings = "";
    this.country = "";
    this.language = "";
    this.year = "";
    this.plot = "";
    this.actors = "";
    this.movie = "";
    this.getHints = function (movie) {
        queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function (error, response, body) {
            // If the request is successful
            if (!error && response.statusCode === 200) {
                var returnObj = JSON.parse(body);
                return returnObj;
                // this.ratings = returnObj.Ratings[0].Value;
                // this.ratings = returnObj.Ratings[1].Value;
                // this.country = returnObj.Country;
                // this.language = returnObj.Language;
                // this.year = returnObj.Year;
                // this.plot = returnObj.Plot;
                // this.actors = returnObj.Actors;
            }
        });
    }
}
// var objNewPick = new Word();
// objNewPick = new Hint();
// objNewPick.queryOMDB(objNewPick.pick());

module.exports = Hint;