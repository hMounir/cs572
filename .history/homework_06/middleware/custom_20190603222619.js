const custom = function(req,res,next){
    if(req.method === 'POST') {
        res.end('GET method not supported');
    } else {
        next();
    }
};

module.exports = custom;