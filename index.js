const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('<h1>Hello World!</h1>')
};
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});