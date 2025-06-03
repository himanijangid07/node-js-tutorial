// Modules - encapsulated code (only share minimum)
// CommonJS - every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names)

sayHi('sumit')
sayHi(names.himani)
sayHi(names.sweetu)
// sayHi(sayHi("vishal")) // first time printed vishal, and then second time undefined