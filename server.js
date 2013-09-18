/**
 * Created with JetBrains PhpStorm.
 * User: Miro
 * Date: 13-9-17
 * Time: 10:42
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
    console.log(request.url);
    if(request.url && request.url == '/'){
        fs.readFile(__dirname + '/index.html', function(err, contents){
            if(!err){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(contents);
            } else {
                response.writeHead(500);
                response.end();
            }
        });
    }
}).listen(8888);