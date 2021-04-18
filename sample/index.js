/**
 * http://usejsdoc.org/
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
app.use(bodyParser.json());
var moment = require('moment');
//import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');



app.get('/:id', function (req,res,next){
	//res.send("Hello word");
	fs.readFile('nodejs2.json', 'utf8' , (err, data) => {
		  if (err) {
		    console.error(err)
		    return
		  }
		  var users = JSON.parse( data );
		  console.log("readData",users);
		  var countKey = Object.keys(users).length;
		  // print coubnt of data
		  console.log("Id",req.params.id);
	      var user = users["table" + req.params.id];
	      console.log(user);
		  console.log("readData1",req.query.hour,req.query.min,req.query.sec);
		
	      let date_ob = new Date();
	      let date = ("0" + date_ob.getDate()).slice(-2);	
	      let date1 = (date_ob.getDate());
	      console.log(date1);

	      console.log("moment Date");
	      moment().format('mmmm do yyyy, h:mm:ss a');
          console.log(moment().format('mmmm do yyyy, h:mm:ss a'));

	      console.log(user.name);
	      console.log( user );
	      res.end( JSON.stringify(user));
		
		})
})

app.post("/addLoginData", function (req,res,next){
	var obj = {
			   table: []
			};
	
	console.log(req.body);
	const {userName,password,id}=req.body
	console.log("PostMan UUID",id);
	fs.readFile('nodejs1.json', 'utf8', function readFileCallback(err, data){
	 
		if (err){
	        console.log("ERROOR FIND",err);
	    } else {
	    	
	    	if(!data)
	    		{
	    		
	    	    var now = moment().format();
	    	    console.log(now);
	    	    obj.table.push({ name: userName,
	    	    	id:id,
	    		    date: new Date()
	    		    }); //add some data
	    	    data = JSON.stringify(obj); //convert it back to json
	    	    fs.writeFile('nodejs1.json', data, 'utf8', next); // write it back
	    		}
	    	else
	    		{
	    		    		
	    		let newObj = JSON.parse(data); //now it an object
	    		newObj.table.push({ name: userName,
	    		id:id,
	    		date: new Date()
	    		}); 
	    		data = JSON.stringify(newObj); //convert it back to json
	    		fs.writeFile('nodejs1.json', data, 'utf8', next); // write it back
	    		}
	}});

	res.send("Successfully Added");

		
	
})


var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});