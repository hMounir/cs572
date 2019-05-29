/*
*** I noticed that both readFile and readFileSync have the
*/
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

function writeFile(){
    const file = fs.createWriteStream('./big.txt');
    for(let i=0; i<= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }
    file.end();
}

function readFile(request,response){
    fs.readFile('./big.txt', function(err, data) {
        response.write(data);
        response.end();
      });
}

function readFileSync(request,response){
    let file = fs.readFileSync('./big.txt', 'utf8');
    response.write(file);
    response.end();
}

function readStream(request,response){
    let data = '';
    let readStream = fs.createReadStream('./big.txt', 'utf8');
    readStream.on('data', function(chunk) {
        data += chunk;
    }).on('end', function() {
        response.write(data);
        response.end();
    });
}

