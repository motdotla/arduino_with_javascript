var SerialPort  = require("serialport").SerialPort
var app         = require('express').createServer();

var serial      = new SerialPort("/dev/tty.usbmodem411");
serial.write("!001301.");

app.get('/', function(req, res){
  res.send('<h1>Duino Express</h1><p><a href="/on">On</a></p><p><a href="/off">Off</a></p>');
});

app.get('/on', function(req, res){
  serial.write("!011301.");
});

app.get('/off', function(req, res) {
  serial.write("!011300.");
});

app.listen(3000);