const url = require('url'); 
const fs = require('fs');



require('http').createServer((function(request,response){
    console.log('Listening to port 8888');
    var query = url.parse(request.url).query;
    const childProcess = fork();
})).listen(8888);