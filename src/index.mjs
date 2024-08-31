import express from "express";
const app = express();
import "dotenv/config";
import fs from "node:fs";

function serveHTMLContent(filePath, res, status=200) {
    res.writeHead(status, {"Content-Type": "text/html" });
    res.write("hi");

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        res.write(data);
        return res.end();
    })
}

app.get("/", (req, res) => {
    const filePath = "./src/index.html"
    serveHTMLContent(filePath, res);
});

app.get("/contact-me", (req, res) => {
    const filePath = "./src/contact-me.html";
    serveHTMLContent(filePath, res);
});

app.get("/about", (req, res) => {
    const filePath = "./src/about.html";
    serveHTMLContent(filePath, res);
})

app.use((req, res) => {
    const filePath = "./src/404.html";
    serveHTMLContent(filePath, res, 404);
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`))