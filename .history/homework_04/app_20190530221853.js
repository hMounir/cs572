const url = require('url'); 
const { fork } = require('child_process');



require('http').createServer((function(request,response){
    console.log('Listening to port 8888');
    var query = url.parse(request.url).query;
    const childProcess = fork();
})).listen(8888);