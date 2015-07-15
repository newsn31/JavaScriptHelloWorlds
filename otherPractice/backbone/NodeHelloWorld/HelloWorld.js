var http = require('http');
var fs = require('fs');
http.createServer(function (res, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3002);
console.log('Server running at http://localhost:3002/');

//how to stream a resource
var stream = fs.createReadStream('./resource.json')
stream.on('data', function(chunk){
  console.log(chunk)
})
stream.on('end', function(){
  console.log('finished')
})
