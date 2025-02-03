console.log("")


//? Node.js global objects are global in nature and available in all modules. You don't need to include these objects in your application; rather they can be used directly. These objects are modules, functions, strings and object etc. Some of these objects aren't actually in the global scope but in the module scope.


//? List of the some most used global objects :

//* __dirname
//* __filename
//* console
//* process
//* buffer
//* setImmediate(callback[,ags][,...])
//* setInterval(callback,delay[,args][,...])
//* setTimeout(callback,delay[,args][,...])
//* clearImmediate(callback,delay[,args][,...])
//* clearInterval(callback,delay[,args][,...])
//* clearTimeout(callback,delay[,args][,...])

console.log(__dirname)
console.log(__filename)