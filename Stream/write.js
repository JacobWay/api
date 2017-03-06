const Writable = require("stream").Writable;

class MyWritable extends Writable{
    _write(){}
}

const stream = new MyWritable();

function write(data, cb){
    if(!stream.write(data)){
        stream.once("drain", cb);
    }else{
        process.nextTick(cb);
    }
}

write("hello", () => {
    console.log("write completed.");
});
