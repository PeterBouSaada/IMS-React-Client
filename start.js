var sys = require('sys');
var exec = require('child_process').exec;
var os = require('os');

function puts(error, stdout, stderr) { sys.puts(stdout) }

if(os.type() === 'Linux' || os.type() === 'Darwin') // Linux or Mac
    exec("export NODE_OPTIONS=\"--openssl-legacy-provider\" && react-scripts start", puts)
if(os.type() === "Windows_NT")
    exec("SET NODE_OPTIONS=\"--openssl-legacy-provider\" && react-scripts start", puts)