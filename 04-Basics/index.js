const lodash = require('lodash')

const names = ["hasan","rohim","korim","sajib"]
const capitalize = lodash.map(names,lodash.capitalize)
console.log(capitalize)