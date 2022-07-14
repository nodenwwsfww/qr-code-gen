const http = require('http')
const fs = require('fs')

const requestListener = function (req, res) {
    var contents = fs.readFileSync(__dirname + '/index.html');

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(contents);
};

const host = 'localhost';
const port = 8000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});