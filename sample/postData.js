/**
 * http://usejsdoc.org/
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
app.use(bodyParser.json());



		
app.post('/users', (req, res) => {
	
	var json = {
			   table: []
			};
	anchors = [ {  "title":"  2.0 Wireless " }  ]
	 fs.appendFileSync('testOutput.json', JSON.stringify(anchors));
	 var data = fs.readFileSync('nodejs1.json');
	 json = JSON.parse(data);
	 json.push(...anchors);

	fs.writeFile("testOutput.json", JSON.stringify(json))
	});


var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});