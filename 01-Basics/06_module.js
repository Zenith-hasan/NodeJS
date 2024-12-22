//? Node js Module

//* Modules in Node.js are blocks of encapsulated code that can be reused throughout your application.

//* Each Module in Nodejs execute in its own modular Scope.

//* At core nodejs module is an object that contails -  export , require and module these three key propertise.


//* There are mainly three type of nodejs module that is - 01. Core Module 02.Local Module 03. Third-party Module


// * Creating a calculator and than its will be use as a module to the other file 

exports.add = function(x,y) {
	return x + y
}

exports.subtract = function (x , y ){
	return x - y 
} 

exports.mutliply = function (x ,y ) {
	return x * y
}

exports.divide = function ( x , y ){
	return x / y 
}