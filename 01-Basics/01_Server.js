var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World am learining node')
}).listen(8080);

console.log("Server in runnning in port number 8000")

console.log("")

cons