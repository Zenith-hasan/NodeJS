const path = require('path')

console.log(path.sep)  // path separator


//* joining a file path

const filePath = path.join('/02-Basic',"note",'test.txt')
console.log(filePath)

const base = path.basename(filePath)  // basename returns the file name 
console.log(base)


const abouslate = path.resolve(__dirname,'/02-Basic','note','test.txt')

console.log(abouslate)