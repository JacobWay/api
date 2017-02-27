const EventEmitter = require("events");

class MyEmitter extends EventEmitter{
}

const myEmitter = new MyEmitter();

myEmitter.on("error", (error) => {
    console.log("whoops! there was an error.");
    //console.log("??? ", error);
});
myEmitter.emit("error", new Error("whoops!"));
