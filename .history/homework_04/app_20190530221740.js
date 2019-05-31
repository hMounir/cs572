const fs = require('fs');
const url = require('url'); 


require('http').createServer((function(request,response){
    console.log('Listening to port 8888');
    var pathName = url.parse(request.url).query;
    
})).listen(8888);