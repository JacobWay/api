/*
 * A writable stream class.
 *
 * Require the Writable class.
 * Define a custom constructor of writable class.
 * Inherit a prototype from super class.
 */

const Writable = require("stream").Writable;
const util = require("util");

function MyWritable(options){
    console.log("this ... ", this);
    if(!(this instanceof MyWritable)){
        return new MyWritable(options);
    }

    Writable.apply(this, options);
}

//util.inherits(MyWritable, Writable);
MyWritable.prototype = Object.create(Writable.prototype);

MyWritable.prototype._write = function _write(chunk, encoding, callback){
    console.log(chunk.toString());
    if(callback){
        callback();
    }
};

const writer = new MyWritable();
process.stdin.pipe(writer);
console.log("writer is instance of MyWritable: ... ", writer instanceof MyWritable);
console.log("writer is instance of Writable: ... ", writer instanceof Writable);
//writer.write("Hi");
