var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(9080);
console.log('Server running at http://localhost:9080/');