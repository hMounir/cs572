const url = require('url'); 
const { fork } = require('child_process');



require('http').createServer((function(request,response){
    console.log('Listening to port 8888');
    const query = url.parse(req.url,true).query;
    const childProcess = fork('child.js');
    childProcess.send(query.fileName);
    childProcess.on('message',fileData =>{
        console.log(fileData);
        response.end(fileData);
    });
})).listen(8888);