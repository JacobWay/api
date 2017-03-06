const fs = require("fs");
const readable = fs.createReadStream("file.txt");

readable.on("readable", () => {
    let chunk;
    if(null !== (chunk = readable.read())){
        console.log(`Received ${chunk.length} bytes of data`);
    }
});
