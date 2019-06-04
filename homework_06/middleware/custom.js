const custom = function(req,res,next){
    if(req.method === 'POST') {
        console.log(req.body);
        if(!req.body.id){
            res.status(500).send('invalid json id');
        }
        else {
            next();
        }
    } else {
        next();
    }
};

module.exports = custom;