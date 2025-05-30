
// Creating a hello world in node js

const http = require('http')

const server = http.createServer((req,res)=>{
	res.statusCode  = 200;
	res.setHeader('Content-Type','text/plain')
	res.end(`NodeJS Programio`)

	
})

server.listen(4600,() => {
	console.log(`Server is listening at http://localhost:4600`)
})




