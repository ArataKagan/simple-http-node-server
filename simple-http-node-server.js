const http = require('http'); 
const fs = require('fs');
const port = 3000;

fs.writeFile('hello-world.txt','Hello to this great world!', function (err){
    if (err) throw err;
    console.log('Saved!');
});

const requestHandler = (request, response) => {
    response.end(`Handling a request on port ${port}`);
}; 

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err) {
        return console.log(`You have an error: ${err}`);
    } 
    console.log(`server is listening on ${port}`);
});


