var http = require("http");
var fs = require("fs");

const server = http.createServer(function(request,response){
    const image = fs.createReadStream("./download.jpg").pipe(response);
});

server.listen(5030);