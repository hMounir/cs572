const fs = require('fs');
const url = require('url'); 


require('http').createServer((function(request,response){
    console.log('Listening to port 8888');
    writeFile();

    var pathName = url.parse(request.url).pathname;
    console.log(pathName);    
    if(pathName == '/readFile'){
        readFile(request,response);
    }else if(pathName == '/readFileSync'){
        readFileSync(request,response);
    }else if(pathName == '/readStream'){
        readStream(request,response);
    }
})).listen(8888);