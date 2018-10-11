const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,'index.html')));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,'index.html')))

const PORT = 2467;
app.listen(PORT,()=> console.log("Server started, listening on: "+PORT));