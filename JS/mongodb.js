var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  var dbase=db.db("runboom");
  var myob={name:"菜鸟教程",url:"www.runoob.com"};
  dbase.createCollection('site',function(err,res){
      if(err)
      throw err;
      console.log("文档插入成功！");
      db.close();
  })
});