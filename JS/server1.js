var express = require('express');
var app = express();
var fs = require("fs");


// var user={
//   "user4":{
//     "name":"mmmmddd",
//     "password":"651654651651",
//     "profession":"singer",
//     "id":1
//   }
// }

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
     data=JSON.parse(data);
    //  data["user4"]=user["user4"];
    var user=data["user"+req.params.id]
       console.log(user);
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})