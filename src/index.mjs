import http from "node:http";
import fs from "node:fs";

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        res.write(data);
    })
    res.end;
}).listen(8080);