const Writable = require("stream").Writable;

// Extends class of Writable.
class MyWritable extends Writable{
    constructor(options){
        super(options);
    }

    _write(chunk, encoding, callback){
        console.log(chunk.toString());
        if(callback){
            callback();
        }
    }
}

// The class is instantiated.
const writer = new MyWritable();

for(let i=0; i<3; ++i){
    writer.write(`hello ${i}\n`);
}

writer.end("This is the end!\n");

writer.on("finish", () => {
    console.log("All writes are now complete.");
});
