import express from "express";
const app = express();
import "dotenv/config";
import fs from "node:fs";

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(200).send("Hi");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`))