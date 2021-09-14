var http=require("http");
var url=require("url");


function start(route){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;

        route(pathname);
        
        console.log("Request for"+pathname+"received");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8889);
    console.log("server has start");

}
console.log(1111)

exports.start=start;