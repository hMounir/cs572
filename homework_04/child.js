const fs = require('fs');

process.on('message',(msg) =>{
  let data = '';
  let readStream = fs.createReadStream(msg, 'utf8');
  readStream.on('data', function(chunk) {
        data += chunk;
    }).on('end', function() {
        process.send(data);
    });
})