const os = require("os");

// info about the current user
const user = os.userInfo()
console.log(user)

// info about system uptime
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)