const os = require('os')  //* a build in modeule that gives the info about the operating sysytem, 

const user = os.userInfo()  // info about the curret user
console.log(user)



console.log (`The System uptime is : ${os.uptime()} seconds `) // method to retrun the system uptime

const curretOS = {
	name : os.type(),
	releases : os.release(),
	totalMemory : os.totalmem(),
	freeMem : os.freemem()
}

console.log(curretOS)