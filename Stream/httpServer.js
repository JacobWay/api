const http = require("http");


const httpServer = http.createServer( (req, res) => {
    let body = "";
    req.setEncoding("utf-8");

    req.on("data", (data) => {
        console.log("on req data: ... ", data);
        body += data;
    });

    req.on("end", () => {
        try{
            json = JSON.parse(body);
            res.write(typeof json);
            res.end();
        }catch(error){
            res.statusCode = 400;
            return res.end(`error: ${error.message}`);
        };
    });
} );

httpServer.listen("9999", () => {
    console.log(`Server runs on ...`);
});
