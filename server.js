var connect = require('connect');

var PORT = 8080;
connect.createServer(
    connect.static(__dirname)
).listen(PORT);
console.log("Listening on port "+PORT)