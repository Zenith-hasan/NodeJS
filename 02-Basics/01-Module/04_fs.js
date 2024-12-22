const {readFileSync, writefileSync} = require('fs')

const first = readFileSync('./02-Basics/01-Module/note/first.txt','utf8')
const second = readFileSync('./01-Module/note/second.txt','utf8')

console.log(first)
console.log(second)