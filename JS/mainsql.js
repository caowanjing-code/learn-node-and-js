var express=require('express');
var mysql=require('mysql');//调用MySQL模块
var app=express();
 //创建 connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19990811cao',
    database: 'moon',//数据库名
    port: 3306   //端口号
});
app.get('/all',function(req,res){
    // 获取所有的用户
    connection.query('select * from book', function(err, rows, fields) {
        if (err) {
            throw err
        }
        res.send(rows);
    })
})
app.get('/add', function(req, res) {
    var obj = {
        msg: ''
    }
    var flag = true; // true表示用户名可用 false 表示用户名重复了不能使用
    // 判断用户名是否重复
    connection.query('select * from book', function(err, rows) {
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].user == req.query.user) {
                obj.msg = '用户名重复，不能使用';
                flag = false;
                res.send(obj);
                break;
            }
        }
        if (flag) {
            connection.query('insert into book(money,books) values("' + req.query.money + '","' + req.query.book + '")', function(err, rows) {
                console.log(rows)
                obj.msg = rows;
                res.send(obj)
            })
        }
    })
})
app.listen(3000,function(){
    console.log(3000);
})
