const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const colors = require("colors");
dotenv.config();  
connectDB()
const app = express();  
                          

app.get("/",(req, res) => {
    res.send("Api is running");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
   // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on PORT ${PORT}`.blue.bold ));