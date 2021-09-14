
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
//链接数据库
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19990811cao',
    database: 'moon',
    port:3306,
    multipleStatements:true // 支持执行多条 sql 语句
})


// // 更新操作
// conn.connect();
// var modsql='UPDATE book SET day=?,money=?,books=?,user=?,phone=? WHERE id=?';
// var modsqlParams=['8月12日',18,2,'李晓','46598498654',4];

// conn.query(modsql,modsqlParams,function(err,result){
//     if(err){
//         console.log('[UPDATE ERROR]-',err.message);
//         return;
//     }
//     console.log('------------update--------');
//     console.log('UPDATE AFFECTROWS',result.affectedRows);
//     console.log('-------------------------\n\n');
// });
// conn.end();

// 查询操作


conn.connect();

var sql='SELECT*FROM book';

conn.query(sql,function (err,result){
    if(err){
        console.log('[SELECT ERROR]-,err.message');
        return
    }
    console.log('----------select--------');
    console.log(result);
    console.log('----------------n\n');
})

conn.end();





