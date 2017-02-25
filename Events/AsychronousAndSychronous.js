/*
 * All listeners are called synchronously in the order in which they are registered.
 * The listener functions can switch to an asynchronous mode of operation.
 *
 */

const EventEmitter = require("events");

class MyEmitter extends EventEmitter{
}

const myEmitter = new MyEmitter();
myEmitter.on("event", (a, b) => {
    setImmediate( () => {
        console.log("This happens asynchronously");
    } );
});
myEmitter.emit("event");
