import express from "express";
const app = express();
import "dotenv/config";
import fs from "node:fs";

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("./src/index.html", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        res.status(200).send("Hi" + data);
    })
});

app.get("/contact-me", (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("./src/contact-me.html", (err, data) => {
        if(err) {
            console.log(err);
            return;
        }

        res.status(200).send("Hi" + data);
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`))