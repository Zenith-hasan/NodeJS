// Knowing the host name of the current computer

const os = require('os')
console.log(os.hostname())

const name_ofthe_host = os.hostname();

do {
	console.log(`The host name of the computer is ${name_ofthe_host}`)
} while(os.hostname() )