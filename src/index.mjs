import express from "express";
const app = express();
import "dotenv/config";
import http from "node:http";
import fs from "node:fs";

app.get("/", (req, res) => res.send("Hi"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Application is listening on port ${PORT}`))