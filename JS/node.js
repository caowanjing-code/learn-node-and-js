// function say(word){
//     console.log(word);
// }

// function execute(someFunction,value){
//     someFunction(value)
// }

// execute(say,"hello")
const http  = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello");
    response.end()
}).listen(8888);
console.log("8888端口正在运行")
