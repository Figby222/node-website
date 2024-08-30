import express from "express";
const app = express();
import "dotenv/config";
import http from "node:http";
import fs from "node:fs";

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hi");
    
    let desiredFilePath = "./index.html";

    switch(req.url) {
        case "/":
            desiredFilePath = "./index.html";
            break;
        case "/contact-me":
            desiredFilePath = "./contact-me.html";
            break;
        case "/about":
            desiredFilePath = "./about.html";
            break;
        default:
            desiredFilePath = "./404.html";
            break;
    }

    fs.readFile(desiredFilePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        res.write(data);
        return res.end();
    })
}).listen(8080);