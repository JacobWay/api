/*
 * Handling the event only once.
 *
 */
const EventEmitter = require("events");
class MyEmitter extends EventEmitter{
}
let counter = 0;

const myEmitter = new MyEmitter();

myEmitter.once("event", () => {
    console.log(++counter);
});

myEmitter.emit("event");
myEmitter.emit("event");

