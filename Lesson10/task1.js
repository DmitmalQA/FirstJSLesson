//constants for the colour to easier see the properties in the console.
const red = '\x1b[31m'
const green = '\x1b[32m'
const reset = '\x1b[0m'
const blue = '\x1b[34m'
const yellow = '\x1b[33m'

function delayedLog(message, delay){ //creating a function that would accept a message and a delay timer

    let delayedMessage = new Promise((resolve) => { //creating a new promise class instance with only resolve as I don't need to reject anything explicitly in this task.
        setTimeout(() => { //passing the function as a resolveHandler for setTimeout.
            resolve(message) //resolve scenario will display the message passed into the function.
        }, delay) //passing the delay variable passed into the function as a delay timer for setTimeout.
    })

    delayedMessage.then(result => console.log(result)) //checking the new promise instance with function then()
}

delayedLog(red + "Hello world! but in red." + reset, 2000)
console.log(blue + "Undelayed response. It will be blue." + reset)