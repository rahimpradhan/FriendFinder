var tableData = require('../data/table-data.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(tableData);

	});


	app.post('/api/friends', function(req, res){
		var newFriend = req.body;
		console.log("NF " , newFriend);

		var userScore = newFriend.scores;
		//Array.from(userScore);

			

		var matchFriend = '';
		var matchImage = '';
		var totalDifference = 1000

		// Examine all existing friends in the list
		for (var i = 0; i < tableData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userScore.length; j++) {
				diff += Math.abs(tableData[i].scores[j] - userScore[j]);
			}
			// console.log('diff = ' + diff);
			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchFriend = tableData[i].name;
				matchImage = tableData[i].photo;
			}
		}

		// Add new user
		tableData.push(newFriend);

		// Send appropriate response
		res.json({status: 'OK', matchFriend: matchFriend, matchImage: matchImage});
});

}


		