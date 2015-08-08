var connect = require('connect');

var PORT = 9000;
connect.createServer(
    connect.static(__dirname)
).listen(PORT);
console.log("Listening on port "+PORT)