const calcultor = require('./math')

console.log(calcultor.add(5,5))
// console.log(calcultor.divide(3,0))

// try{
	
// 	calcultor.divide(4,0)
// 	console.log("Ok this num is not zero. So ,it can be divide ")
// }catch(error){
// 	console.log("Caught an error", error)
// }
console.log(calcultor.multiply(10,10))
console.log(calcultor.subtract(33,11))


//? Module Wrapper

(function(exports,require,modules,__filename,__dirname){
	const hello = "Hi, Node Js";
	console.log(hello)
	console.log(__dirname)
	console.log(__filename)
})();