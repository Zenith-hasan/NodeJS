console.log("Hello Node JS");

const array = [3, 5, 6, 7, 5, 4, 4];

array.forEach((element) => {
  console.log(element * 10);
});

setTimeout(() => {
  console.log("Helllo Node");
}, 1000);

setInterval(() => {
  console.log("Node JS :) ");
}, 1200);

function addTwo(num01, num02) {
  return num01 + num02;
}

function substract( a,b){
	return a-b
}


function divide(a,b){
	if ( b === 0){
		throw new Error ("Divided By Zero is not allowed!")
	}

	return a / b
}