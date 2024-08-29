import http from "node:http";
import fs from "node:fs";

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end;
}).listen(8080);