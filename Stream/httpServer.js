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
            console.log("error oof req end ... ", error);
        };
    });
} );

httpServer.listen("9999", () => {
    console.log(`Server runs on ...`);
});
