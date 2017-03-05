const Readable = require("stream").Readable;

class MyReadable extends Readable{
    _read(chunk){
        console.log("read in MyReadable: ", chunk);
    }
}

const myReadable = new MyReadable();
myReadable.setEncoding("utf-8");
myReadable.read("hi");

myReadable.on("data", () => {
    console.log(`Received bytes of ${data.length} data`);
});
