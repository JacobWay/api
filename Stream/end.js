const Writable = require("stream").Writable;

class MyWritable extends Writable {
    _write(chunk, encoding, callback){
        console.log(chunk);
    }

}

const myWritable = new MyWritable();
myWritable.setDefaultEncoding("utf-8");

myWritable.write("hi", "utf8");
myWritable.end("end!", "utf8");
//myWritable.write(" ???");
