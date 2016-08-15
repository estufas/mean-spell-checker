var path 		 = require('path');
// var app 		 = require('express');

module.exports = function(app) {
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'))
	});
};