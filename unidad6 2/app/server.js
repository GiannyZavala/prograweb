var http=require("http"),
    server;

server=http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World:\n");
});

server.listen(3000);
console.log("Server rutting on port 3000");

