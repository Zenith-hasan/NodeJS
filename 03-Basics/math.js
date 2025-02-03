

function add(a,b){
	return a+b
}

function divide(a,b){
	if (b === 0 || a === 0){
		throw new Error("Divided With the Zero in not allowed!")
	}
	return a/b
}

function multiply(a,b){
	return a * b
}

function subtract (a,b){
	return a-b
}

module.exports = {
	add,
	divide,
	multiply,
	subtract,
};