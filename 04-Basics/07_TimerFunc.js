// //? NodeJS provide build-in timer function that allows scheduling the execution of code after a specified delay or at regular intervals. These timer function are the part of the "timers" module but can be used directly without requiring any additional imports.

// setTimeout(() => {
// 	const msg = "Executed after 5 seconds";
// 	console.log(msg)
// },1000)


// //* passing argument to the callback

// setTimeout((name) => {
// 	console.log(`Say my name is : ${name}`)
// },1000,"Harry")


// const timeId = setTimeout(() => {
// 	console.log(`This will not be executed because we used clear Timeout method!`)
	
// }, 3000)

// clearTimeout(timeId);
// console.log(`Timeout Cleared!`)


// setInterval(() => {	
// 	console.log(`This message will be executed every 2 seconds!`)
// },2000)


// // Passing an argument to the setInteraval


// setInterval((msg) => {
// 	console.log(msg)
// },2000,`This is a very important message!!!`)


// const timer = setInterval(() => {
// 	console.log(`Executed in every 3 Seconds!!!!!`);
// },3000)

// clearInterval(timer)
// console.log(`SetInterval timer is cleard!`)


setImmediate(() => {
	console.log(`Executed immediately after I/O events!`)
});

console.log('This message will print firsrt.')

const immediateId = setImmediate(() => {
	console.log(`this will not execute !`)
});

clearImmediate(immediateId)

//? process.nextTick()

console.log(`Start`);

process.nextTick(()=>{
	console.log(`Executed in nextTick`);
});

console.log('End')