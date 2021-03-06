var Nerd = require('./models/Nerd');
var MadlibData = require('./models/Madlib');

module.exports = function(app) {

	// server routes ==========================================================
	// handle things like api calls
	// authentication routes
	
	//sample api route
	app.get('/api/nerds', function(req, res) {
		
		Nerd.find(function(err, nerds) {
			
			if (err)
				res.send(err);
			
			res.json(nerds);
		});
	});
	
	app.get('/datastorage/madlib', function(req, res) {
		
		Madlib.find(function(err, madlibs) {
			
			if (err)
				res.send(err);
			
			res.json(madlibs);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		/*
		res.sendFile('./public/views/index.html'); 
		//res.sendFile('./public/index.html'); // load our public/index.html file
		*/
		res.sendfile('./public/views/index.html'); 
		//res.sendfile('./public/index.html'); // load our public/index.html file
		
	});

};