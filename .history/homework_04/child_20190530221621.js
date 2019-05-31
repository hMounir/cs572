const fs = require('fs');
const longOperation = () =>{
    let sum = 0;
    for(let i=0;i<1e9;i++){
      sum +=i;
    }
    return sum;
};

process.on('message',(msg) =>{
  let data = '';
  let readStream = fs.createReadStream(msg, 'utf8');
  readStream.on('data', function(chunk) {
        data += chunk;
    }).on('end', function() {
        process.send(data);
    });
})