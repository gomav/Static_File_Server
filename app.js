var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/:filename', function(req, res) {
	console.log(req.params.filename);
	fs.readFile('public/' + req.params.filename, function(err, data){
		if(err){
			res.send('File not found');
		}
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

var server = app.listen(6377, function() {
	console.log('Express server listening on port ' + server.address().port);
});
