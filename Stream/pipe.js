/*
 * src <stream.Readable> source stream that is piping to this writable.
 *
 * Build a readable, writable stream.
 * Reable stream pipes to Writable stream.
 *
 */

const assert = require("assert");

const Readable = require("stream").Readable;

class MyReadable extends Readable{
    constructor(options){
        super(options);
        this.size = 1;
    }

    _read(size){
        if(this.size-- === 0){
            this.push(null);
        }else{
            let buffer = Buffer.from("???", "utf-8");
            console.log("buffer in MyReadable ... ", buffer);
            this.push(buffer);
        }
    }
}

const myReadable = new MyReadable();
myReadable.read();

const Writable = require("stream").Writable;

class MyWritable extends Writable{
    constructor(options){
        super(options);
    }

    _write(chunk, encoding, callback){
        console.log("write in MyWritable ... ", chunk);
    }
}

const myWritable = new MyWritable();

myWritable.on("pipe", (src) => {
    //console.error("src ... ", src);
    //console.error("myReable ... ", myReadable);
    console.error("There is data stream piping");
    assert.equal(src, myReadable);
});

myReadable.pipe(myWritable);
