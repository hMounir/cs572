const custom = function(req,res,next){
    try {
        console.log(req.body);
        // JSON.parse(req.body);
      } catch(e) {
        res.status(500).send('not valid rquest');
        throw Error('invalid JSON');
      }
    return next();
};

module.exports = custom;