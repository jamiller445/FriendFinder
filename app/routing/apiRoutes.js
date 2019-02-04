// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friendsData = require("../data/friends.js");
let diff = [];
let totalDiff = 1000;
let sum = 0;
let matchIndex = 0;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    console.log("in post");
      console.log("in api/friends req= " + JSON.stringify(req.body.scores));

    for (i=0; i<friendsData.length; i++){
      for (j=0; j<friendsData[i].scores.length; j++){
        sum += Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
      }
      console.log('sum= ' + sum);
      if ( sum < totalDiff){
        console.log("checking diff sum");
        totalDiff = sum;
        matchIndex = i;
        matchName = friendsData[i].name;
        matchImage = friendsData[i].photo;
      }
      sum = 0;

    // totalDiff = diff.reduce(function(acc, val)  { return acc + val; }, 0);
    }
    console.log('Best matching record index= ' + matchIndex + "..." + JSON.stringify(friendsData[matchIndex]));
    totalDiff = 1000;
    friendsData.push(userInput);
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });

};
