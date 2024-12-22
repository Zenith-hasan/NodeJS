// //? The Node.js Global Object is a built-in object that provides global variables and functions accessible throughout the Node.js runtime environment.We also can say that , node js global objets ore the objects that are available throught the all modules.

// //*  01. Buffer : The Buffer class is an inbuilt globally accessible class that means it can be used without importing any module. The Buffer class is used to deal with binary data. Buffer class objects are used to represent binary data as a sequence of bytes.

// const buffer = new Buffer.alloc(5, "abcde");
// console.log(buffer); // <Buffer 61 62 63 64 65>

// const buffertwo = new Buffer.alloc(5, "#@$%^");
// console.log(buffertwo); // <Buffer 23 40 24 25 5e>

// //* console - it is an inbuild global object used to print stdout and stderr.

// console.log(`This is a Console stdout msg`);
// console.error(`This is console error msg`);

// //* process -  It is an inbuilt global object that is an instance of EventEmitter used to get information on current process. It can also be accessed using require() explicitly.

// // ? Global

// //* setImmediate()
// //* clearImmediate()
// //* setInterval()
// //* clearInterval()
// //* setTimeout()
// //* clearTimeout()
// //* queueMicroatask()

// //setInterval()
// // let watch_seconds = setInterval(() => {
// //   console.log(`Execute in every seconds!`);
// // }, 1000);
// // clearInterval(watch_seconds);

// // Create a counter that increases every second
// let count = 0;
// const counterId = setInterval(() => {
//     count++;
//     console.log(`Count is now: ${count}`);
    
//     // Stop counting when we reach 5
//     if (count >= 5) {
//         console.log("Reached 5! Stopping the counter...");
//         clearInterval(counterId);
//     }
// }, 1000);




// // setTimeout()

// let time = 0
// const timer = setTimeout(() => {
// 	time++;
// 	console.log(`Time Count is now ${time}`)
// 	 if (time >= 6){
// 		console.log(`Time reacher at 6 ! Stopping the timer ....`)
// 		clearTimeout(timer)
// 	 }
// },1000)



//* Text Encoder and Decoder

const encoder = new TextEncoder();
const e = encoder.encode("Programio Node JS")

console.log(e)

const decoder = new TextDecoder()
const d = decoder.decode(e)

console.log(d)



//* URL 

const url = new URL("https://www.youtube.com/results?search_query=nodejs")
console.log(url)
console.log(url.searchParams.get('search_query'))


//? Webassembly

	//* require()
	//* exports
	//* __dirname
	//* __filename

console.log(__dirname)
console.log(__filename)


