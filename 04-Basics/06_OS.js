//? The os module is a node.js buile in module that provides a number of operating system-realted utility methods and properties.


const os = require('os')


//? Oprating system information

console.log(os.platform()) // return the name of the operating system

console.log(os.type()) // retrun the operating system name

console.log(os.arch()) // return the oprating system CPU architecture

console.log(os.release()) // retrun the operating system release

console.log(os.version()) // return a string identifying the opearting system version

console.log(os.uptime()) // return the system uptime in seconds

console.log(os.userInfo()) // retrun the user information

//? Memory information

console.log(os.totalmem()) // returns the total amount of system memory in byte

console.log(os.freemem()) // retruns the total availble system memory in bytes

console.log(os.cpus()) // return the information about the each cpu / core installed in the system

console.log(os.loadavg()) // returns an array containing the 1,5,and 15 mins load avarage.

console.log(os.networkInterfaces()) // returns an object containing network inteface

console.log(os.endianness()) // returns a string identifying the endianess of the CPU.

console.log(os.tmpdir()) // return thej operating system default directory of temporary files


console.log(os.hostname()) // return the hostname of the opeating system


console.log(os.EOL) // A string constant defining the operating system-specific end-of-line marker. It is \n on POSIX systems and \r\n on Windows.


console.log(os.constants.signals.SIGINT) // An object containing commonly used operating system-specific constants for error codes, process signals, etc.