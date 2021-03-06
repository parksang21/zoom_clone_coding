import http from "http"
import WebSocket from "ws"
import express from "express";

const app = express();

// console.log("hello");
// 이 아래에 있는 코드들은 설정을 위한 코드, 
// view engine 설정하고
app.set('view engine', 'pug')
// views directory 설정하는 것.
app.set('views', __dirname + "/views");
// creating public url expose public folder to users
app.use("/public", express.static(__dirname + "/public"));

// rendering template
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect('/'));

const handleListen = () => console.log('Listening on http://localhost:3000')

const server = http.createServer(app);

const sww = new WebSocket.Server({server});

server.listen(3000, handleListen);