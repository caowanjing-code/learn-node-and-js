var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo=db.db("runboo1");

    // 插入数据
    // var myobj=[
    //     {name:'菜鸟工具',url:"jhjhjhjhoihjhhb",type:'cn'},
    //     {name:'564465894',url:"vfdvsvdsdsa",type:'en'},
    //     {name:'6565465561',url:"jhhjbjojh",type:'cn'},
    // ];
//  查找所有数据
    // dbo.collection("site").find({}).toArray(function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    //     db.close();
    // })

    // 更新数据
    // var whereStr={"name":'菜鸟工具'}//查询条件
    // var updateStr={$set:{"url":"hojjijijih"}};
    // dbo.collection("site").updateMany(whereStr,updateStr,function(err,res){
    //     if(err)throw err;
    //     console.log("文档更新成功");
    //     db.close();
    // });



    // 删除数据
    // var whereStr={"name":"菜鸟工具"};//查询条件
    // dbo.collection("site").deleteMany(whereStr,function(err,obj){
    //     if(err)
    //     throw err;
    //     console.log("文档删除成功");
    //     db.close();
    // })

    // 排序
    
});