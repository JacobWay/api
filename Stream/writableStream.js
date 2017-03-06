const Writable = require("stream").Writable;

class MyWritable extends Writable {
    constructor(options){
        super(options);
    }

    _write(chunk, encoding, callback){
        chunk = chunk.toString();
        console.log("chunk in _write: ", chunk);
        if(chunk.toString().indexOf("a") > -1){
            callback(new Error("There is a in chunk"));
        }else{
            callback();
        }
    }
}

const myWritable = new MyWritable();

myWritable.write("dbc", "utf-8", (error) => {
    if(error){
        console.log("error in write: ", error);
    }else{
        console.log("No a in chunk.");
    }
});
