const custom = function(req,res,next){
    if(req.method === 'POST') {
        try {
            // console.log(req);
            // console.log(req.body);
            console.log(next);
            // JSON.parse(next.body);
            next();
          } catch(e) {
            res.status(404).send('invalid request');
            throw Error('invalid JSON');
          }
    } else {
        next();
    }
};

module.exports = custom;