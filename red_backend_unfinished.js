var express = require('express')
var app = express()
var http = require('http').createServer(app)
var url = require('url')
var io = require('socket.io')(http)
var fs = require('fs')
var mysql = require('mysql')

var con = mysql.createConnection({host: "localhost", user: "root", password: "Password", database: "redreach"})

con.connect(function (err) {
  if (err) throw err;
})

app.use(express.static("im"))

app.get("/", function (req, res) {
  res.sendfile("red_messaging.html")
})

//When page is loaded, request is sent to the database


io.on("connection", function (socket) {
  socket.on('load_req', function (data) {
    var sql = "SELECT description FROM user_info WHERE name = '"+data+"';"
    con.query(sql, function (err, data) {
      if (err) throw err;
      console.log("Received!")
      console.log(data)
      socket.emit('response', data[data.length-1].description)
    })
    })

//When a certain conversation is clicked on the message screen

  socket.on('click', function (data) {
  })

//When a message is sent

    //Data storage protocal

    //Instant message protocal

  socket.on("first", function (data) {
    console.log(data)
    io.sockets.emit('second', data)
  })

//When a new user is created

  socket.on('create', function (data) {
    console.log("Pong")
    var sql = "INSERT INTO user_info VALUES ('"+data+"', '', 'placeholder^')"
    con.query(sql, function (err, data) {
      if (err) throw err;

    })
    var sql2 = "CREATE TABLE "+data+" (name TEXT, sr TEXT, message TEXT)"
    con.query(sql2, function (err, data) {
      if (err) throw err;
    })
  })

//When a new conversation is started between different users

  socket.on('new', function (data) {

    console.log("Ping pong ping pong ping pong ping pong")
    console.log(data)
    var one = data.substring(0, data.indexOf(","))
    console.log(one)

    var sql0 = "SELECT description FROM user_info WHERE name = '"+one+"';"
    var two = data.substring(data.indexOf(",")+1, data.length)

    con.query(sql0, function (err, data) {

      console.log(data)
      var sql = "UPDATE user_info SET description = '"+data[data.length-1].description+two+"' WHERE name = '"+one+"';"

      con.query(sql, function (err, data) {

        if (err) throw err;

      })
    })

  })


})


http.listen(8080, function () {
  console.log("Listening...")
})
