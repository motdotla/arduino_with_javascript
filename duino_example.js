var SerialPort = require("serialport").SerialPort
var serial = new SerialPort("/dev/tty.usbmodem411");

serial.write("!001301.");
serial.write("!011301.");

// serial.write("!011300."); # to turn it off