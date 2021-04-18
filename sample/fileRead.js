/**
 * http://usejsdoc.org/
 */
// const fs = require('fs')
var express = require('express');
var app = express();
 var fs = require("fs");
/*fs.readFile('nodejs1.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
*/// adding data file


var user = {
   "user4" : {
      "name" : "Harshad",
      "password" : "password4",
      "profession" : "Software Engneering",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile('nodejs2.json', 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})