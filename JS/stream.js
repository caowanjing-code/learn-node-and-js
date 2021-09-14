// var fs=require("fs");
// var data='';

// // 创建可读流
// var readerStream=fs.createReadStream('./input.txt');

// readerStream.setEncoding('utf-8');



// //处理流事件
// readerStream.on('data',function(chunk){
//     data+=chunk;
// });

// readerStream.on('end',function(){
//     console.log(data);
// });

// readerStream.on('error',function(err){
//     console.log(err.stack);
// });
// console.log("程序执行完毕");


// var fs=require("fs");
// var data='这个是我的node初学阶段';

// // 创建一个可以写入的流，写入到文件output。txt中
// var writeStream=fs.createWriteStream('output.txt');

// writeStream.write(data,'utf-8');

// writeStream.end();


// // // 处理事件流
// writeStream.on('finish',function(){
//     console.log("写入完成");
// });
// writeStream.on('error',function(err){
//     console.log(err.stack);

// });



// // 管道读写操作
// readerStream.pipe(writeStream);
// console.log("程序执行完毕")


//链式流压缩文件
// var fs=require("fs");
// var zlib=require("zlib");

// fs.createReadStream("input.txt")
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));

// console.log("文件压缩完成");

// 解压文件操作
// var fs=require("fs");
// var zlib=require("zlib");
// fs.createReadStream("input.txt.gz")
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('input1.txt'));
// console.log("解压完成")