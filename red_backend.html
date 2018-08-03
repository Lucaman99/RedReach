var express = require('express')
var app = express()
var http = require('http').createServer(app)
var url = require('url')
var io = require('socket.io')(http)
var fs = require('fs')
var mysql = require('mysql')

app.use(express.static("im"))

app.get("/", function (req, res) {
  res.sendfile("red_messaging.html")
})

io.on("connection", function (socket) {
  socket.on("first", function (data) {
    console.log(data)
    io.sockets.emit('second', data)
  })
})

http.listen(8080, function () {
  console.log("Listening...")
})
