const EventEmitter = require("events")

const customEmitter = new EventEmitter()

// on -> listen for an event
// emit -> emit an event
// we can have many customEmitter with the same name as shown below

customEmitter.on("response", (name, id) => {
    console.log(`data received from user ${name} with id: ${id}`)
})

customEmitter.on("response", () => {
    console.log(`Some other logic here`)
})

customEmitter.emit('response', 'himani', 20)