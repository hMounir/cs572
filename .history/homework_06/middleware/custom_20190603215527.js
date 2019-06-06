const custom = function(req,res,next){
    try {
        JSON.parse(buf);
      } catch(e) {
        res.status(500).send('not valid rquest');
        throw Error('invalid JSON');
      }
    return next();
};

module.exports = custom;