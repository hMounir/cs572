const custom = function(req,res,next){
    if(req.method === 'POST') {
        try {
            JSON.parse(req.body);
          } catch(e) {
            res.status(404).send('invalid request');
            throw Error('invalid JSON');
          }
    } else {
        next();
    }
};

module.exports = custom;