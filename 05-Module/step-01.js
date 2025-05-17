//  Finding the IP Address using the express 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Your IP is: ${ip}::ffff`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Finding out the IP address using the node js environment 

const http = require('http')
const server = http.createServer((req,res) => {
	const ip = req.socket.remoteAddress;
	res.end(`Your IP is ${ip}`)
	
})

server.listen(4500,() => {
	console.log(`Server is running at http://localhost:4500`);

})
