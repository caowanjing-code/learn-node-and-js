var fs = require('fs');
var data = fs.readFileSync('./text.txt', 'utf8');
// 等待操作返回结果，然后利用该结果
console.log(data);