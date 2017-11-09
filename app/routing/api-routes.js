var tableData = require('../data/table-data.js');

module.exports = function(app){
	app.get('api/friends', function(req, res){
		res.json(tableData);

	});
}


		