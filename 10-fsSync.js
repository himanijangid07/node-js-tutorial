const { readFileSync, writeFileSync } = require("fs");

console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // this will append the result of the file, so we will see the content twice
)

console.log('done with this task')
console.log('starting the next one')