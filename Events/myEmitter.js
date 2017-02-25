/*
 * Shows a simple EventEmitter instance with a single listener.
 *
 * Requires the EventEmitter class.
 * Extends the class to build own MyEmitter class.
 * Creates an instance of my own class.
 * Registers an event.
 * Triggers the event.
 *
 */

const EventEmitter = require("events");
class MyEmitter extends EventEmitter{
}

const myEmitter = new MyEmitter();
myEmitter.on("event", (event) => {
    console.log("An event occured!");
    console.log(event);
});

myEmitter.emit("event");
