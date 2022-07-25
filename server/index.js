import express from "express";
const app = express();

const server = app.listen(9000, ()=>{});

app.get("/", (req,res)=>{res.end("hello world")});