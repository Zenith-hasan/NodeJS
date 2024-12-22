const http = require('http')
const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader ('Content-Type','text/html')
	res.end('<h2> Programio NodeJS')
})

const PORT = 6700;
server.listen(PORT,() => {
	console.log(`Server is listening at http://localhost:6700`)
	
})