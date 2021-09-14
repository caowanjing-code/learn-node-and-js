const MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost/runoob";
MongoClient.connect(url).then((conn)=>{
    console.log("数据库已经连接");
    var dbase=conn.db("runner");
    dbase.createCollection("site").then((res)=>{
        console.log("已经创建集合");
    }).catch((err)=>{
        console.log("数据库操作失误");
    }).finally(()=>{
        conn.close();
    })
    
}).catch((err)=>{
    console.log("数据库连接失败")
})